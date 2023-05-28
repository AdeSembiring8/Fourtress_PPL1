import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { serverurl } from "./server";

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
      <Hero diseases={diseases}/>

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
  const { dishes } = await fetch(serverurl + "/api/dish", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  const { diseases } = await fetch(serverurl + "/api/disease", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  return {
    props: {
      session,
      dishes,
      diseases
    },
  };
}

export default LandingPage;
