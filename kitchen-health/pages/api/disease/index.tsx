import { createDisease, getDiseases } from "../../../lib/prisma/disease";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });
    try {
      const { diseasecreate, error } = await createDisease(req.body);
      if (error) return res.status(500).json({ error });
      return res.status(200).json({ diseasecreate });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method == "GET") {
    try {
      const { diseases, error } = await getDiseases();
      if (error) return res.status(500).json({ error });
      return res.status(200).json({ diseases });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
  res
    .status(500)
    .json({ message: "The requested HTTP Method cannot be processed" });
}
