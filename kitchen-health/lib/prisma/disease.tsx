import prisma from ".";

export async function getDiseases() {
  try {
    const diseases = await prisma.disease.findMany();
    return { diseases };
  } catch (error) {
    return { error };
  }
}

export async function getDiseaseById(id: any) {
  try {
    const disease = await prisma.disease.findUnique({
      where: { id },
    });
    return { disease };
  } catch (error) {
    return { error };
  }
}

export async function createDisease(disease: any) {
  try {
    const diseasecreate = await prisma.disease.create({ data: disease });
    return { diseasecreate: diseasecreate };
  } catch (error) {
    return { error };
  }
}
