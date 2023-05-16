import connectMongo from "../../../db/conn";
import {
  dish,
  ingredient,
  disease,
  discussion,
  comment,
  nutrient,
} from "../../../model/Schema";

export default async function handler(req: any, res: any) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));
  const { tablename } = req.query;
  const tbllis = new Map<String, any>([
    ["dish", dish],
    ["ingredient", ingredient],
    ["disease", disease],
    ["discussion", discussion],
    ["comment", comment],
    ["nutrient", nutrient],
  ]);
  const useSchema = tbllis.get(tablename);
  // only post method is accepted
  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });
    const { ...args } = req.body;
    // hash password
    useSchema
      .create(
        {
          ...args,
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
