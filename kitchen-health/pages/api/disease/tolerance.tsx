import { setDiseaseTolerant } from "../../../lib/prisma/disease";

/**
 *
 * @param req
 *
 * @param res
 */
export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const data = req.body;
    try {
      const { message, error } = await setDiseaseTolerant(data);
      if (error) return res.status(500).json({ error });
      return res.status(200).json({ message });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.json("Only POST Method");
  }
}
