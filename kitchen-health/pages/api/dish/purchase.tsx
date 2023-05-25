import { getToken } from "next-auth/jwt";
import { buyDish } from "../../../lib/prisma/account";

/**
 *
 * @param req
 * DishID: DishID
 *
 * @param res
 */
export default async function handler(req: any, res: any) {
  const token = await getToken({ req });
  if (req.method === "POST" && token) {
    const { DishID } = req.body;
    try {
      const { message, error } = await buyDish({
        accountid: token.AccObj,
        dishid: DishID,
        date: Date.now(),
      });
      if (error) return res.status(500).json({ error });
      return res.status(200).json({ message });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.json("Cannot Process Request");
  }
}
