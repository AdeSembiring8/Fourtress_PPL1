import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar2";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

function LandingPage2({ dishes, userprof }: any) {
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
      <Hero />

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
  const { dishes } = await fetch("http://localhost:3000/api/dish", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  const userprof = await fetch("http://localhost:3000/api/profile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());
  return {
    props: {
      session,
      dishes,
      userprof,
    },
  };
}

export default LandingPage2;
