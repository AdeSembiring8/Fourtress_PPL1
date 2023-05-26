import {
  getAccountDiseases,
  getAccountById,
} from "../../../lib/prisma/account";

export default async function handler(req: any, res: any) {
  const { AccObj } = req.body;
  try {
    const { diseases } = await getAccountDiseases(AccObj);
    const { user } = await getAccountById(AccObj);
    return res.status(200).json({ user, diseases });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
  return res.status(401).json("not signed in");
}
