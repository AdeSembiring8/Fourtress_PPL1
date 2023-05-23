import connectMongo from "../../../db/conn";
import { sufferFrom } from "../../../model/Schema";

/**
 *
 * @param req
 * Diseases: array of DiseaseID
 * AccountID: AccountID
 *
 * @param res
 */
export default async function handler(req: any, res: any) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));
  const { Diseases, AccountID } = req.body;
  let arrayRecord = new Array();
  for (let diseaseid of Diseases) {
    arrayRecord.push({ DiseaseID: diseaseid, AccountID: AccountID });
  }
  const result = await sufferFrom.create(arrayRecord);
  res.json(result);
}
