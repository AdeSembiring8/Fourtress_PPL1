import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import Navbar from "../components/navbar2";
import Footer from "../components/footer";
import Card from "../components/rekomendasi";

function Rekomendasi() {
    return (
        <>
            <Navbar />
            <Card />
            <div className="flex flex-col items-center -mt-20">
            <button className="flex items-center  px-96 py-2 mt-12 mb-64 rounded text-sm space-x-12 transition duration-100">
                <img src="/assets/button/next.png" alt="/" />
            </button>
            </div>

            <Footer />
        </>
    )
}
export default Rekomendasi