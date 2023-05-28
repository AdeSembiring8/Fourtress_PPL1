import React from "react";
import Head from "next/head";
import Navbar2 from "../components/navbar2";
import Navbar from "../components/navbar";
import Resep from "../components/resep";
import Card from "../components/card";
import Footer from "../components/footer";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { getDishByName } from "../lib/prisma/dish";
import { serverurl } from "./server";

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
  const { dishes } = await fetch(serverurl + "/api/dish", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
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
  const userprof = await fetch(serverurl + "/api/profile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());
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
