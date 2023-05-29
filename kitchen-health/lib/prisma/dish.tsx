import prisma from ".";

export async function getDishes(limit: number) {
  try {
    const dishes = await prisma.dish.findMany({
      take: limit ? limit : 12,
    });
    return { dishes };
  } catch (error) {
    return { error };
  }
}

export async function createDish(dish: any) {
  try {
    const dishForDB = await prisma.dish.create({ data: dish });
    return { dishForDB: dishForDB };
  } catch (error) {
    return { error };
  }
}

export async function getDishesById(id: any) {
  try {
    const dishes = await prisma.dish.findMany({
      where: {
        id: {
          in: id,
        },
      },
    });
    return { dishes };
  } catch (error) {
    return { error };
  }
}

export async function getDishByName(name: any) {
  try {
    const dish = await prisma.dish.findFirst({
      where: {
        title: name,
      },
      include: {
        containswith: {
          include: {
            nutrient: true,
          },
        },
      },
    });
    return { dish };
  } catch (error) {
    return { error };
  }
}

export async function updateDishById(id: any, data: any) {
  try {
    const dish = await prisma.dish.update({
      where: { id: id },
      data: data,
    });
    return { dish };
  } catch (error) {
    return { error };
  }
}

export async function setDishNutrient(data: any) {
  for (let row of data) {
    try {
      const nutrients = await prisma.dish.update({
        where: { id: row.dishid },
        data: {
          containswith: {
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

export async function updateDishTools(data: any) {
  try {
    const dish = await prisma.dish.updateMany({
      data: {
        tools: data,
      },
    });
    return { dish };
  } catch (error) {
    return { error };
  }
}

// export async function getAccountDiseases(accid: any) {
//   try {
//     const diseases = await prisma.disease.findMany({
//       where: {
//         sufferfrom: {
//           some: {
//             account: {
//               id: accid,
//             },
//           },
//         },
//       },
//     });
//     return { diseases };
//   } catch (error) {
//     return { error };
//   }
// }
