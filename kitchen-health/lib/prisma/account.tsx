import prisma from ".";

export async function getAccounts() {
  try {
    const users = await prisma.account.findMany();
    return { users };
  } catch (error) {
    return { error };
  }
}

export async function createAccount(user: any) {
  try {
    const userFromDB = await prisma.account.create({ data: user });
    return { user: userFromDB };
  } catch (error) {
    return { error };
  }
}

export async function getAccountById(id: any) {
  try {
    const user = await prisma.account.findUnique({
      where: { id },
    });
    return { user };
  } catch (error) {
    return { error };
  }
}

export async function getAccountByEmail(email: any) {
  try {
    const user = await prisma.account.findFirst({
      where: { email: email },
    });
    return { user };
  } catch (error) {
    return { error };
  }
}

export async function updateAccountById(id: any, data: any) {
  try {
    const user = await prisma.account.update({
      where: { id: id },
      data: data,
    });
    return { user };
  } catch (error) {
    return { error };
  }
}

export async function getAccountDiseases(accid: any) {
  try {
    const diseases = await prisma.disease.findMany({
      where: {
        sufferfrom: {
          some: {
            account: {
              id: accid,
            },
          },
        },
      },
    });
    return { diseases };
  } catch (error) {
    return { error };
  }
}

export async function sufferDisease(suffer: any) {
  try {
    const deletedis = await prisma.sufferFrom.deleteMany({
      where: {
        account: {
          id: suffer[0].accountid,
        },
      },
    });
  } catch (error) {
    return { error };
  }
  for (let row of suffer) {
    try {
      const sufferres = await prisma.account.update({
        where: { id: row.accountid },
        data: {
          sufferfrom: {
            create: {
              disease: {
                connect: {
                  id: row.diseaseid,
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

export async function buyDish(data: any) {
  try {
    const transaction = await prisma.account.update({
      where: { id: data.accountid },
      data: {
        transaction: {
          create: {
            date: data.date,
            dish: {
              connect: {
                id: data.dishid,
              },
            },
          },
        },
      },
    });
  } catch (error) {
    return { error };
  }
  return { message: "Query OK" };
}
