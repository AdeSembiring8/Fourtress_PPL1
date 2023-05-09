import connectMongo from "../../../db/conn";
import khaccount from "../../../model/Schema";
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
      first_name,
      last_name,
      address,
    } = req.body;

    // check duplicate users
    const checkexisting = await khaccount.findOne({ email });
    if (checkexisting)
      return res.status(422).json({ message: "User Already Exists...!" });

    // hash password
    khaccount
      .create(
        {
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
