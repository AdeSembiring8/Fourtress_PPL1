import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar2";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { getAccountDiseases, getAccountById } from "../lib/prisma/account";
import { getDishes } from "../lib/prisma/dish";
import { getDiseases } from "../lib/prisma/disease";

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
  const { dishes, error: disheserr } = await getDishes(10);
  const { user: userdata, error: usererror } = await getAccountById(AccObj);
  const { diseases: userdisease, error: userdiserr } = await getAccountDiseases(
    AccObj
  );
  const userprof = {
    user: userdata,
    diseases: userdisease,
  };

  const { diseases, error: diseaseserr } = await getDiseases();
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
