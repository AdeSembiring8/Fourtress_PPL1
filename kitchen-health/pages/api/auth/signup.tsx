import connectMongo from "../../../db/conn";
import { account } from "../../../model/Schema";
import { hash } from "bcryptjs";

export default async function handler(req: any, res: any) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  // only post method is accepted
  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });
    const {
      username,
      password,
      email,
      profile_name,
      address,
    } = req.body;
    const AccountID =
      Math.floor(Date.now() / Math.pow(10, 3)) -
      Math.floor(Date.now() / Math.pow(10, 12)) * Math.pow(10, 9);
    const splitted_first = profile_name.split(" ", 1);
    const first_name = profile_name.substring(0, splitted_first[0].length);
    const last_name = profile_name.substring(splitted_first[0].length + 1);
    // check duplicate users
    const checkexisting = await account.findOne({ email });
    if (checkexisting)
      return res.status(422).json({ message: "User Already Exists...!" });

    // hash password
    account
      .create(
        {
          AccountID,
          username,
          email,
          profile_name,
          first_name,
          last_name,
          address,
          password: await hash(password, 12),
        }
        //   function (err: any, data: any) {
        //     if (err) return res.status(404).json({ err });
        //     res.status(201).json({ status: true, user: data });
        //   }
      ) // NEED ERROR HANDLING
      .then((result) => {
        res.json({ result });
      });
  } else {
    res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted" });
  }
}
