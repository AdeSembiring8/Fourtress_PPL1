import prisma from ".";

export async function getNutrients(limit: number) {
  try {
    const nutrient = await prisma.nutrient.findMany({
      take: limit ? limit : 10,
    });
    return { nutrient };
  } catch (error) {
    return { error };
  }
}

export async function createNutrient(data: any) {
  try {
    const nutrient = await prisma.nutrient.create({ data: data });
    return { nutrient: nutrient };
  } catch (error) {
    return { error };
  }
}
