import { getToken } from "next-auth/jwt";
import connectMongo from "../../../db/conn";
import { account } from "../../../model/Schema";

export default async function handler(req: any, res: any) {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req });
  if (token) {
    // Signed in
    connectMongo().catch((error) => {
      error: "Connection Failed...!";
    });
    const { ...args } = req.body;
    const result = await account.findByIdAndUpdate(token.AccountID, {
      ...args,
    });
    res.json(result)
  } else {
    // Not Signed in
    res.status(401).json("not signed in");
  }
}
