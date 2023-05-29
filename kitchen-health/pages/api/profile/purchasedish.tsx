import { buyDish } from "../../../lib/prisma/account";

/**
 *
 * @param req
 * DishID: DishID
 *
 * @param res
 */
export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { dishid, accid } = req.body;
    try {
      const { transaction, error } = await buyDish({
        accountid: accid,
        dishid: dishid,
        date: new Date(),
      });
      if (error) return res.status(500).json({ error });
      return res.status(200).json({ transaction });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.json("Cannot Process Request");
  }
}
