import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

function LandingPage({ dishes }: any) {
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
      <Hero />

      <Card dishes={dishes} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const { dishes } = await fetch("http://localhost:3000/api/dish", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      dishes,
    },
  };
}

export default LandingPage;
