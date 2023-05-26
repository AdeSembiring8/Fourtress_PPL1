import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import Navbar from "../components/navbar2";
import Footer from "../components/footer";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

function Profile({ userprof }: any) {
  const { user, diseases } = userprof;
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

      <div className="h-auto bg-white ">
        <div className="w-full h-[1200px]">
          <img
            src="/assets/bg/bg.png"
            className="w-full   relative rounded-tl-lg rounded-tr-lg h-96"
          />

          {/* <div className="bg-white rounded-lg shadow-xl pb-8 h-full ml-64 mr-64"> */}
          <div className="h-auto absolute border-2 bg-white ml-44 -mt-32 pl-96 pr-96  ">
            <div className="flex flex-col items-center -mt-20">
              <img
                src={user.prof_pic}
                alt=""
                className="w-40 border-4 border-white rounded-full"
              />
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-2xl">{user.profile_name}</p>

              </div>

              <p className="text-sm text-gray-500">username</p>
              <a href="/editProfile" className="mt-12 mr-6 py-2 px-7   bg-white hover:bg-[#389E0D] border-2 border-[#389E0D] text-[#389E0D] hover:text-neutral-50 rounded-40 transition ease-in-out delay-150  duration-300 rounded-md md:ml-5 " style={{ fontSize: '15px' }}>
                <button type="submit" className="relative right-3  top-1">
                  <img src="/assets/profilePage/edit.png" className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
                Edit Profile
              </a>
              <a href="/pesananSaya" className="mt-5  mr-6 py-2 px-8  bg-white hover:bg-[#389E0D] border-2 border-[#389E0D] text-[#389E0D] hover:text-neutral-50 rounded-40 transition ease-in-out delay-150  duration-300 rounded-md md:ml-5 " style={{ fontSize: '15px' }}>
                <button type="submit" className="relative right-3  top-1">
                  <img src="/assets/profilePage/pesanan.png" className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
                Pesanan Saya
              </a>

              <ul className="mt-12 text-gray-700">
                <li className="flex border-y py-4">
                  <span className="font-bold w-44 pr-8 text-right">Email</span>
                  <span className="text-gray-700">{user.email}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-44 pr-8 text-right">
                    Nomer Telepon
                  </span>
                  <span className="text-gray-700">{user.tel}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-44 pr-8 text-right">Alamat</span>
                  <span className="text-gray-700">{user.address}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-44 pr-8 text-right">
                    Jenis Kelamin
                  </span>
                  <span className="text-gray-700">{user.gender}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-44 pr-8 text-right">
                    Tanggal Lahir
                  </span>
                  <span className="text-gray-700">{user.birth_date}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-44 pr-8 text-right">
                    Riwayat Penyakit
                  </span>
                  <span className="text-gray-700">
                    {diseases.map((row: any) => (
                      <span>{row.name + " "}</span>
                    ))}
                  </span>
                </li>
              </ul>
              <a href="/login" className="mt-12 mb-12 mr-6 py-2 px-7   bg-white hover:bg-[#F5222D] border-2 border-gray-300 text-[#8C8C8C] hover:text-neutral-50 rounded-40 transition ease-in-out delay-150  duration-300 rounded-md md:ml-5 " style={{ fontSize: '15px' }}>
                Keluar
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          <div className="flex items-center space-x-4 mt-2"></div>
        </div>
      </div >

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
  const userprof = await fetch("http://localhost:3000/api/profile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());
  return {
    props: {
      session,
      userprof,
    },
  };
}

export default Profile;
