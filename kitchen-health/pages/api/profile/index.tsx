import { getToken } from "next-auth/jwt";
import {
  getAccountDiseases,
  getAccountById,
} from "../../../lib/prisma/account";

export default async function handler(req: any, res: any) {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
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
    // Not Signed in
    return res.status(401).json("not signed in");
  }
}
