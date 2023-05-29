import { createAccount, getAccountByEmail } from "../../../lib/prisma/account";
import { hash } from "bcryptjs";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });
    const { username, password, email, profile_name } = req.body;
    const splitted_first = profile_name.split(" ", 1);
    const first_name = profile_name.substring(0, splitted_first[0].length);
    const last_name = profile_name.substring(splitted_first[0].length + 1);
    const address = "";
    const tel = "";
    const gender = "";
    const birth_date = "";
    const randprofpic = [
      "/assets/profilePage/profimg1.png",
      "/assets/profilePage/profimg2.png",
      "/assets/profilePage/profimg3.png",
    ];
    const prof_pic =
      randprofpic[Math.floor(Math.random() * randprofpic.length)];

    // check duplicate users
    try {
      const { user, error } = await getAccountByEmail(email);
      if (error) return res.status(500).json({ error });
      if (user) return res.json({ message: "User already exist!" });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
    try {
      const data = {
        username,
        email,
        profile_name,
        first_name,
        last_name,
        address,
        password: await hash(password, 12),
        tel,
        gender,
        birth_date,
        prof_pic,
      };
      const { user, error } = await createAccount(data);
      if (error) return res.status(500).json({ error });
      return res.status(200).json({ user });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted" });
  }
}
