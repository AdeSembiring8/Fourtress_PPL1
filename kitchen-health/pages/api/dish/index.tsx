import connectMongo from "../../../db/conn";
import { dish } from "../../../model/Schema";

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
    connectMongo().catch((error) =>
      res.json({ error: "Connection Failed...!" })
    );
    const result = await dish.find({}, null, { limit: limit || 10 });
    res.json(result);
  } else {
    res.json("Only GET Method");
  }
}
