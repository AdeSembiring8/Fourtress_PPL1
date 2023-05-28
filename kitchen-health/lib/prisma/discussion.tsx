import prisma from ".";

export async function getDiscussions() {
  try {
    const discussion = await prisma.discussion.findMany({
      select: {
        content: true,
        createdat: true,
        account: {
          select: {
            profile_name: true,
          },
        },
      },
      orderBy: {
        createdat: "desc",
      },
    });
    return { discussion };
  } catch (error) {
    return { error };
  }
}
