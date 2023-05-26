import { createNutrient, getNutrients } from "../../../lib/prisma/nutrient";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });
    try {
      const { nutrient, error } = await createNutrient(req.body);
      if (error) return res.status(500).json({ error });
      return res.status(200).json({ nutrient });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method == "GET") {
    try {
      const { limit } = req.query;
      const { nutrient, error } = await getNutrients(Number(limit));
      if (error) return res.status(500).json({ error });
      return res.status(200).json({ nutrient });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
  res
    .status(500)
    .json({ message: "The requested HTTP Method cannot be processed" });
}
