import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import Navbar2 from "../components/navbar2";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { getAccountDiseases, getAccountById } from "../lib/prisma/account";

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

function AboutPage({ userprof }: any) {
  const { user } = userprof;

  const teamMembers: TeamMember[] = [
    {
      name: "Ade Dwi Fatwa Sembiring",
      position: "Product manager",
      image: "/assets/team/Ade.png",
    },
    {
      name: "Indah Sutriyati",
      position: "UI/UX Designer",
      image: "/assets/team/Indah.png",
    },
    {
      name: "Della Fuziyyah Husna",
      position: "Front-End Developer",
      image: "/assets/team/Della.png",
    },
    {
      name: "Mu`az Abdul Rohim",
      position: "Back-End Developer",
      image: "/assets/team/Muaz.png",
    },
  ];
  const teamSupport: TeamMember[] = [
    {
      name: "Pak Akmal S.Si.,MT.",
      position: "Dosen Pengampu",
      image: "/assets/team/Akmal.png",
    },
    {
      name: "Dicky Rahma Hermawan",
      position: "Asisten Praktikum",
      image: "/assets/team/dicky.jpg",
    },
    {
      name: "Ananda Miftakhul Syifa",
      position: "Asisten Praktikum",
      image: "/assets/team/ananda.jpg",
    },
  ];

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
      <div
        className="container mx-auto py-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/bg/bg2.png')",
        }}
      >
        <h1 className="text-4xl font-bold mb-4 text-center mt-20">
          Tentang Kami
        </h1>
        <div className="container mx-auto py-4 text-center">
          <p className="font-normal mx-4 sm:px-8 lg:px-60">
            Kitchen Health merupakan platform yang menyediakan resep masakan sehat
            sesuai kebutuhanmu. Kami juga menyediakan fitur pembelian bahan
            masakan yang kamu butuhkan. Selamat menjelajah!
          </p>
        </div>

        <h1 className="text-4xl font-bold text-center mt-20">Tim Pengembang</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-8 p-4 md:p-32">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 m-2 md:m-5"
            >
              <div className="border-0 border-gray-200 rounded-3xl overflow-hidden">
                <img
                  className="w-full h-auto mb-4 rounded-none object-cover"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <h2 className="text-center mb-2 text-gray-900 font-bold text-medium mt-7">
                {member.name}
              </h2>
              <p className="text-center text-gray-700 mb-10 font-normal text-medium leading-6 font-roboto mt-2">
                {member.position}
              </p>
            </div>
          ))}
        </div>
        <h1 className="text-4xl font-bold text-center">Pembimbing</h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-8 p-4 md:ml-52 ">
            {teamSupport.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 m-2 md:m-5"
              >
                <div className="border-0 border-gray-200 rounded-3xl overflow-hidden">
                  <img
                    className="w-full h-auto mb-4 rounded-none object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <h2 className="text-center mb-2 text-gray-900 font-bold text-medium mt-7">
                  {member.name}
                </h2>
                <p className="text-center text-gray-700 mb-10 font-normal text-medium leading-6 font-roboto mt-2">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      props: {
        session,
        userprof: {
          user: null,
        },
      },
    };
  }
  const { user } = session;
  const { AccObj } = user as any;
  const { user: userdata, error: usererror } = await getAccountById(AccObj);
  const { diseases: userdisease, error: userdiserr } = await getAccountDiseases(
    AccObj
  );
  const userprof = {
    user: userdata,
    diseases: userdisease,
  };
  return {
    props: {
      session,
      userprof,
    },
  };
}

export default AboutPage;
