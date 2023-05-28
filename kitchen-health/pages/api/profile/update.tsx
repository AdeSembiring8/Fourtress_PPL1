import { updateAccountById } from "../../../lib/prisma/account";

export default async function handler(req: any, res: any) {
  const { sentdata, useracc } = req.body;
  try {
    const { user, error } = await updateAccountById(useracc.id, sentdata);
    if (error) return res.status(500).json({ error });
    return res.status(200).json({ user });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
