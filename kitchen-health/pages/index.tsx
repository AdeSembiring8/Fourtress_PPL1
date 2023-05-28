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

      <div className="mb-10 text-xl text-left text-black dark:text-black">
        Kamu mau jaga pola makan untuk apa ?
      </div>
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
  const { dishes } = await fetch("http://localhost:3000/api/dish", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

  return {
    props: {
      session,
      dishes,
    },
  };
}

export default LandingPage;
