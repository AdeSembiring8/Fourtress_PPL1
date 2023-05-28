import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import Navbar from "../../components/navbar2";
import Footer from "../../components/footer";
import Card from "../../components/rekomendasi";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { getDiseaseByName } from "../../lib/prisma/disease";
import { serverurl } from "../server";

function Rekomendasi({ dishes, userprof }: any) {
  const { user } = userprof;
  return (
    <>
      <Navbar user={user} />

      <Card dishes={dishes} />
      {/* <div className="flex flex-col items-center -mt-20">
                <button className="flex items-center  px-96 py-2 mt-12 mb-64 rounded text-sm space-x-12 transition duration-100">
                    <img src="/assets/button/next.png" alt="/" />
                </button>
            </div> */}

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
  const userprof = await fetch(serverurl + "/api/profile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());
  const { disease, error } = await getDiseaseByName(
    context.query.diseasename.replace("_", " ")
  );
  if (!disease) {
    return null;
  }
  const dishes = await fetch(serverurl + "/api/disease/dish", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ diseasesid: disease.id }),
  }).then((res) => res.json());
  return {
    props: {
      session,
      dishes,
      userprof,
    },
  };
}
export default Rekomendasi;
