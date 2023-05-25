import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import Navbar from "../components/navbar2";
import Footer from "../components/footer";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Profile() {
  const { data, error } = useSWR("/api/profile", fetcher);
  if (error || !data) {
    return null;
  }
  console.log(data);
  const { user, diseases } = data;
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
                    <img src="/assets/bg/bg.png" className="w-full   relative rounded-tl-lg rounded-tr-lg h-96" />

          {/* <div className="bg-white rounded-lg shadow-xl pb-8 h-full ml-64 mr-64"> */}
          <div className="h-auto absolute border-2 bg-white ml-44 -mt-32 pl-96 pr-96  ">
            <div className="flex flex-col items-center -mt-20">
              <img
                src={user.prof_pic}
                alt=""
                className="w-40 border-4 border-white rounded-full"
              />
              <button className="flex items-center  px-4 py-2 mt-12 mb-6 rounded text-sm space-x-2 transition duration-100">
                <img src="/assets/profilePage/edit.png" alt="" />
              </button>
              <button className="flex items-center  px-4 py-2 my-3 rounded text-sm space-x-2 transition duration-100">
                <img src="/assets/profilePage/pesanan.png" alt="" />
              </button>
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-2xl">{user.profile_name}</p>
                <span className="bg-blue-500 rounded-full p-1" title="Verified">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-100 h-2.5 w-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
              </div>
              <p className="text-gray-700">
                Senior Software Engineer at Tailwind CSS
              </p>
              <p className="text-sm text-gray-500">New York, USA</p>

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
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          <div className="flex items-center space-x-4 mt-2"></div>
        </div>
      </div>

            <Footer />
        </>

    )

}

export default Profile;
