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

export async function createGoogleAccount(user: any) {
  try {
    const userFromDB = await prisma.account.upsert({
      where: {
        googleid: user.id,
      },
      update: {
        email: user.email,
        profile_name: user.profile_name,
        first_name: user.first_name,
        last_name: user.last_name,
        prof_pic: user.prof_pic,
      },
      create: {
        username: "",
        password: "",
        email: user.email,
        profile_name: user.profile_name,
        first_name: user.first_name,
        last_name: user.last_name,
        address: "",
        tel: "",
        gender: "",
        birth_date: "",
        prof_pic: user.prof_pic,
        googleid: user.id,
      },
    });
    return { userFromDB };
  } catch (error) {
    return { error };
  }
}

export async function getAccountById(id: string) {
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
      where: { id: id },
    });
    return { user };
  } catch (error) {
    return { error };
  }
}

export async function getAccountGoogle(googleid: string) {
  try {
    const user = await prisma.account.findUnique({
      select: {
        id: true,
      },
      where: { googleid: googleid },
    });
    return { user };
  } catch (error) {
    return { error };
  }
}

export async function getAccountByEmail(email: any) {
  try {
    const user = await prisma.account.findFirst({
      where: { email: email, password: { not: "" } },
    });
    return { user };
  } catch (error) {
    return { error };
  }
}

export async function updateAccountById(id: any, data: any) {
  try {
    const user = await prisma.account.update({
      select: {
        id: true,
      },
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

export async function sufferDisease(AccountID: any, diseasedata: any) {
  try {
    const deletedis = await prisma.sufferFrom.deleteMany({
      where: {
        account: {
          id: AccountID,
        },
      },
    });
  } catch (error) {
    return { error };
  }
  try {
    const sufferres = await prisma.account.update({
      where: { id: AccountID },
      data: {
        sufferfrom: {
          create: diseasedata,
        },
      },
    });
  } catch (error) {
    return { error };
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
