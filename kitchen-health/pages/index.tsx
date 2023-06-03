import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { getDishes, searchDishes } from "../lib/prisma/dish";
import { getDiseases } from "../lib/prisma/disease";

function LandingPage({ dishes, diseases, searched_dishes }: any) {
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

      <Navbar />
      <Hero diseases={diseases} />

      <div className="mb-10 text-xl text-left text-black dark:text-black">
        Kamu mau jaga pola makan untuk apa ?
      </div>
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
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
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
        searched_dishes,
      },
    };
  }
  const { dishes, error: disheserr } = await getDishes(10);
  return {
    props: {
      session,
      dishes,
      diseases,
    },
  };
}

export default LandingPage;
