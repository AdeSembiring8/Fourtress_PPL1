import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import Navbar from "../components/navbar2";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { serverurl } from "./server";

function Komunitas({ userprof, discussions }: any) {
  const { user } = userprof;
  const postbtnn = async () => {};
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

      <div className="flex justify-center items-center">
        <div className="w-full mt-40 mx-24">
          <div className="bg-white border border-gray-200 rounded-lg shadow w-full my-4 p-4">
            <div className=" px-16 py-5 ">
              <div className=" flex justify-between items-center">
                <img
                  src={user.prof_pic}
                  alt=""
                  className="w-20 h-20  rounded-full"
                />
                <input
                  className="w-full h-14 mx-6 border border-gray-200 p-3 rounded-lg"
                  type="text"
                  placeholder="Apa yang ingin kamu diskusikan ?"
                />
                <div className="hidden  space-x-4  lg:flex nav__item">
                  <button
                    type="submit"
                    className="py-1.5 px-6  bg-[#389E0D] hover:bg-[#298403] border-2 border-[#389E0D] text-white hover:text-neutral-50 rounded-40 transition ease-in-out delay-150  duration-300 rounded-md "
                  >
                    Posting
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow w-full my-4 p-4">
            <div className=" px-16 py-5 ">
              {discussions.map((row: any) => (
                <>
                  <div
                    className=" flex justify-start items-center"
                    key={row.id}
                  >
                    <img
                      src={row.account.prof_pic}
                      alt=""
                      className=" w-16 h-16 rounded-full"
                    />
                    <h1 className=" ml-6 font-semibold">
                      {row.account.profile_name}
                    </h1>
                  </div>
                  <div className=" ml-20 ">
                    <p className=" text-sm text-justify">{row.content}</p>
                  </div>
                  <div className=" ml-20 text-sm font-medium text-gray-500 mt-5  text-end">
                    <h1>
                      {new Date(row.createdat).toLocaleString(undefined, {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </h1>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
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
  const { discussions } = await fetch(serverurl + "/api/discussion", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  return {
    props: {
      session,
      userprof,
      discussions,
    },
  };
}
export default Komunitas;
