import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar2";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { getAccountDiseases, getAccountById } from "../lib/prisma/account";
import { getDishes, searchDishes } from "../lib/prisma/dish";
import { getDiseases } from "../lib/prisma/disease";

function LandingPage2({ dishes, userprof, diseases, searched_dishes }: any) {
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

      <Navbar user={user} />
      <Hero diseases={diseases} />
      

      {dishes === null ? (
        <Card dishes={searched_dishes} searched={true} />
      ) : (
        <Card dishes={dishes} />
      )}
      <Footer />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
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
  const { diseases, error: diseaseserr } = await getDiseases();
  if (context.query.searchq) {
    const search_words = context.query.searchq.split("_");
    const query_array = search_words.map((row: any) => ({
      title: {
        contains: row,
        mode: "insensitive",
      },
    }));
    const { dishes: searched_dishes, error: searcherr } = await searchDishes(
      query_array
    );
    return {
      props: {
        session,
        dishes: null,
        diseases,
        userprof,
        searched_dishes,
      },
    };
  }
  const { dishes, error: disheserr } = await getDishes(10);
  return {
    props: {
      session,
      dishes,
      userprof,
      diseases,
    },
  };
}

export default LandingPage2;
