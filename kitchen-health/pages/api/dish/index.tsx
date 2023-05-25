import { getDishes } from "../../../lib/prisma/dish";

/**
 *
 * @param req
 * param limit (optional)
 *
 * @param res
 */
export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    const { limit } = req.query;
    try {
      const { dishes, error } = await getDishes();
      if (error) return res.status(500).json({ error });
      return res.status(200).json({ dishes });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.json("Only GET Method");
  }
}
