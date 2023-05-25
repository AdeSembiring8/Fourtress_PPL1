import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar2";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";

function LandingPage2() {
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

export default LandingPage2