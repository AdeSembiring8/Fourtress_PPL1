import { getDiseaseDish } from "../../../lib/prisma/disease";
import { getDishesById } from "../../../lib/prisma/dish";

/**
 *
 * @param req
 *
 * @param res
 */
export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { diseasesid } = req.body;
    try {
      const { result, error: diserr } = await getDiseaseDish(diseasesid);
      if(!result){
        return res.status(200).json(null);
      }
      const { dish, error: disherr } = await getDishesById(result);
      if (diserr || disherr) return res.status(500).json({ diserr, disherr });
      return res.status(200).json(dish);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.json("Only POST Method");
  }
}
