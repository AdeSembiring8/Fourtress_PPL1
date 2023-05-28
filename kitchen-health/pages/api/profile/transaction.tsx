import { getTransactions } from "../../../lib/prisma/account";

export default async function handler(req: any, res: any) {
  const { AccObj } = req.body;
  try {
    const { transaction, error } = await getTransactions(AccObj);
    if (error) return res.status(500).json({ error });
    return res.status(200).json(transaction);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
