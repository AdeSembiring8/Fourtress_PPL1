import { getToken } from "next-auth/jwt";
import {
  getAccountDiseases,
  getAccountById,
} from "../../../lib/prisma/account";

export default async function handler(req: any, res: any) {
  const token = await getToken({ req });
  if (token) {
    try {
      const { diseases } = await getAccountDiseases(token.AccObj);
      const { user } = await getAccountById(token.AccObj);
      return res.status(200).json({ user, diseases });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(401).json("not signed in");
  }
}
