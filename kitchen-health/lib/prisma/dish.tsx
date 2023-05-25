import prisma from ".";

export async function getDishes(limit: number) {
  try {
    const dishes = await prisma.dish.findMany({
      take: limit ? limit : 10,
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

export async function getDishById(id: any) {
  try {
    const dish = await prisma.dish.findUnique({
      where: { id },
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
