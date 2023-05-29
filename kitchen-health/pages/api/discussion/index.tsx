import { getDiscussions } from "../../../lib/prisma/discussion";
import { postDiscussion } from "../../../lib/prisma/account";

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
  } else if (req.method == "GET") {
    try {
      const { discussions, error } = await getDiscussions();
      if (error) return res.status(500).json({ error });
      return res.status(200).json({ discussions });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
  res
    .status(500)
    .json({ message: "The requested HTTP Method cannot be processed" });
}
