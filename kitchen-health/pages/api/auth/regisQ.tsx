import { sufferDisease } from "../../../lib/prisma/account";
/**
 *
 * @param req
 * Diseases: array of DiseaseID
 * AccountID: AccountID
 *
 * @param res
 */
export default async function handler(req: any, res: any) {
  const { Diseases, AccountID } = req.body;
  let arrayRecord = new Array();
  for (let diseaseid of Diseases) {
    arrayRecord.push({ accountid: AccountID, diseaseid: diseaseid });
  }
  try {
    const { message, error } = await sufferDisease(arrayRecord);
    if (error) return res.status(500).json({ error });
    return res.status(200).json({ message });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
