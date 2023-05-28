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

export async function getDiseaseByName(name: any) {
  try {
    const disease = await prisma.disease.findFirst({
      where: {
        name: name,
      },
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

export async function setDiseaseTolerant(data: any) {
  for (let row of data) {
    try {
      const tolerance = await prisma.disease.update({
        where: { id: row.diseaseid },
        data: {
          tolerance: {
            create: {
              amount: row.amount,
              nutrient: {
                connect: {
                  id: row.nutrientid,
                },
              },
            },
          },
        },
      });
    } catch (error) {
      return { error };
    }
  }
  return { message: "Query OK" };
}

export async function getDiseaseDish(diseasesid: any) {
  if (!diseasesid.length) {
    diseasesid = ["646dd932f023558beeb7dd4d"];
  }
  try {
    const distl = await prisma.tolerance.groupBy({
      by: ["nutrientid"],
      where: {
        diseaseid: {
          in: diseasesid,
        },
      },
      _min: {
        amount: true,
      },
    });
    const nutrid = distl.map((row) => ({
      id: row.nutrientid,
      tolerance_amount: row._min.amount as number,
    }));
    const dishesid = await prisma.dish.findMany({ select: { id: true } });
    let result = dishesid.map((row) => row.id);
    for (let row of nutrid) {
      const dishdis = await prisma.dish.findMany({
        select: {
          id: true,
        },
        where: {
          id: {
            in: result,
          },
          containswith: {
            some: {
              amount: {
                lte: row.tolerance_amount,
              },
              nutrient: {
                id: row.id,
              },
            },
          },
        },
      });
      if (!dishdis.length) {
        return { result: null };
      }
      result = dishdis.map((rowid) => rowid.id);
    }
    return { result };
  } catch (error) {
    return { error };
  }
}
