import { getToken } from "next-auth/jwt";
import { updateAccountById } from "../../../lib/prisma/account";

export default async function handler(req: any, res: any) {
  const token = await getToken({ req });
  if (token) {
    const { ...args } = req.body;
    try {
      const { user, error } = await updateAccountById(token.AccObj, {
        ...args,
      });
      if (error) return res.status(500).json({ error });
      return res.status(200).json({ user });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.status(401).json("not signed in");
  }
}
