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
    const userFromDB = await prisma.account.create({
      data: user,
      select: {
        id: true,
      },
    });
    return { user: userFromDB };
  } catch (error) {
    return { error };
  }
}

export async function getAccountById(id: any) {
  try {
    const user = await prisma.account.findUnique({
      select: {
        id: true,
        username: true,
        email: true,
        profile_name: true,
        first_name: true,
        last_name: true,
        address: true,
        tel: true,
        gender: true,
        birth_date: true,
        prof_pic: true,
      },
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

export async function getTransactions(accid: any) {
  try {
    const transaction = await prisma.transaction.findMany({
      select: {
        id: true,
        date: true,
        dish: {
          select: {
            id: true,
            title: true,
            price: true,
            prof_img: true,
          },
        },
      },
      where: {
        accountid: accid,
      },
    });
    return { transaction };
  } catch (error) {
    return { error };
  }
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
    return { transaction };
  } catch (error) {
    return { error };
  }
}

export async function postDiscussion(data: any) {
  try {
    const { accid, content, createdat } = data;
    const discussion = await prisma.account.update({
      where: {
        id: accid,
      },
      data: {
        discussion: {
          create: {
            content: content,
            createdat: createdat,
          },
        },
      },
    });
    return { discussion };
  } catch (error) {
    return { error };
  }
}
