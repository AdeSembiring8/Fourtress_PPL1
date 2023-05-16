// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"

export default async function handler(req: any, res: any) {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req })
  if (token) {
    // Signed in
    return res.json(token.AccountID);
  } else {
    // Not Signed in
    return res.status(401).json("not signed in");
  }
}