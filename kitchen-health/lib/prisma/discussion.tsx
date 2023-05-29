import prisma from ".";

export async function getDiscussions() {
  try {
    const discussions = await prisma.discussion.findMany({
      select: {
        id: true,
        content: true,
        createdat: true,
        account: {
          select: {
            profile_name: true,
            prof_pic: true,
          },
        },
      },
      orderBy: {
        createdat: "desc",
      },
    });
    return { discussions };
  } catch (error) {
    return { error };
  }
}
