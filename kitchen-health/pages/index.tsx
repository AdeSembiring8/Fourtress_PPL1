import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { getDishes } from "../lib/prisma/dish";
import { getDiseases } from "../lib/prisma/disease";

function LandingPage({ dishes, diseases }: any) {
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

      <Card dishes={dishes} />
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
  const { dishes, error: disheserr } = await getDishes(10);
  const { diseases, error: diseaseserr } = await getDiseases();
  return {
    props: {
      session,
      dishes,
      diseases
    },
  };
}

export default LandingPage;
