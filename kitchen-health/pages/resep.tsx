import React from "react";
import Head from "next/head";
import Navbar2 from "../components/navbar2";
import Navbar from "../components/navbar";
import Resep from "../components/resep";
import Card from "../components/card";
import Footer from "../components/footer";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { getDishByName, getDishes } from "../lib/prisma/dish";
import { getAccountDiseases, getAccountById } from "../lib/prisma/account";

function Recipe({ dishes, userprof, pagedish }: any) {
  const { user } = userprof;
  return (
    <>
      <Head>
        <title>Kitchen Health</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {user === null ? <Navbar /> : <Navbar2 user={user} />}
      <Resep pagedish={pagedish} user={user} />

      <Card dishes={dishes} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const { dish: pagedish } = await getDishByName(
    context.query.dishname.replace("_", " ")
  );
  const { dishes, error: disheserr } = await getDishes(10);
  if (!session) {
    return {
      props: {
        session,
        dishes,
        userprof: { user: null },
        pagedish,
      },
    };
  }
  const { user } = session;
  const { AccObj } = user as any;
  const { user: userdata, error: usererror } = await getAccountById(AccObj);
  const { diseases: userdisease, error: userdiserr } = await getAccountDiseases(
    AccObj
  );
  const userprof = {
    user: userdata,
    diseases: userdisease,
  };
  return {
    props: {
      session,
      dishes,
      userprof,
      pagedish,
    },
  };
}

export default Recipe;
