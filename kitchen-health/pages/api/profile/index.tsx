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
    const {
      AccountID,
      username,
      email,
      profile_name,
      first_name,
      last_name,
      address,
    } = await account.findOne({ AccountID: token.AccountID });
    return res.json({
      AccountID,
      username,
      email,
      profile_name,
      first_name,
      last_name,
      address,
    });
  } else {
    // Not Signed in
    return res.status(401).json("not signed in");
  }
}
