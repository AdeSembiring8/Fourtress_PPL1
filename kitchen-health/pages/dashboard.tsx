import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar2";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { serverurl } from "../lib/prisma/server";

function LandingPage2({ dishes, userprof, diseases }: any) {
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
      <div className=" mt-12 ml-20 text-xl text-left text-black dark:text-black">
        Kamu mau jaga pola makan untuk apa ?
      </div>

      <Card dishes={dishes} />
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
  const { dishes } = await fetch(serverurl + "/api/dish", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  const userprof = await fetch(serverurl + "/api/profile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ AccObj: AccObj }),
  }).then((res) => res.json());
  const { diseases } = await fetch(serverurl + "/api/disease", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
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
