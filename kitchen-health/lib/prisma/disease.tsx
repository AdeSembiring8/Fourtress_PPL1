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
  try {
    const distl = await prisma.nutrient.findMany({
      select: {
        id: true,
        tolerance: {
          take: 1,
          orderBy: {
            amount: "asc",
          },
          select: {
            amount: true,
          },
        },
      },
      where: {
        tolerance: {
          some: {
            disease: {
              id: {
                in: diseasesid,
              },
            },
          },
        },
      },
    });
    let dishid = new Array();
    for (let row of distl) {
      const dishdis = await prisma.dish.findMany({
        select: {
          id: true,
        },
        where: {
          containswith: {
            some: {
              amount: {
                lte: row.tolerance[0].amount,
              },
              nutrient: {
                id: row.id,
              },
            },
          },
        },
      });
      if (dishdis[0]) {
        for (let rowj of dishdis) {
          dishid.push(rowj.id);
        }
      }
    }
    return { dishid };
  } catch (error) {
    return { error };
  }
}
