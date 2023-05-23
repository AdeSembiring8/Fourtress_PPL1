import connectMongo from "../../../db/conn";
import { transaction } from "../../../model/Schema";
import { getToken } from "next-auth/jwt";

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
    connectMongo().catch((error) =>
      res.json({ error: "Connection Failed...!" })
    );
    const { DishID } = req.body;
    const TransactionID =
      (Math.floor(Date.now() / Math.pow(10, 3)) -
        Math.floor(Date.now() / Math.pow(10, 7)) * Math.pow(10, 4)) *
        Math.pow(10, 2) +
      DishID;
    const result = await transaction.create({
      TransactionID: TransactionID,
      AccountID: token.AccountID,
      DishID: DishID,
      date: Date.now(),
    });
    res.json(result);
  } else {
    res.json("Cannot Process Request");
  }
}
