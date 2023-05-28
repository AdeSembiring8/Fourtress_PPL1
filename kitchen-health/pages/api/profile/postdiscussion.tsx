import { postDiscussion } from "../../../lib/prisma/account";

/**
 *
 * @param req
 * DishID: DishID
 *
 * @param res
 */
export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { accid, content } = req.body;
    try {
      const { discussion, error } = await postDiscussion({
        accid,
        content,
        createdat: new Date(),
      });
      if (error) return res.status(500).json({ error });
      return res.status(200).json({ discussion });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.json("Cannot Process Request");
  }
}
