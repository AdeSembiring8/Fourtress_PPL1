import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";


function Home() {
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
  )

}

export default Home