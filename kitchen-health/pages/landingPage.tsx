import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";
import { getSession } from "next-auth/react";

function LandingPage() {
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

      <Card />
      <Footer />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        premanent: false,
      },
    };
  }
  // authorize user return session
  return {
    props: { session },
  };
}
export default LandingPage;
