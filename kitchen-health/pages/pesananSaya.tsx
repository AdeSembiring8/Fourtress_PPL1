import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar2";
import Image from "next/legacy/image";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { getAccountDiseases, getAccountById, getTransactions } from "../lib/prisma/account";

function PesananSaya({ userprof, transaction }: any) {
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

      <div className="mx-auto pt-8 max-w-2xl md:mt-12">
        <div className="px-4 sm:px-8 ">
          <p className="text-2xl font-medium mt-12">Pesanan Saya</p>

          <div className="mt-5 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {transaction.map((row: any) => (
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={row.dish.prof_img}
                  alt=""
                />
                <div className="flex w-full flex-col px-4 py-4 justify-center">
                  <span className="font-medium text-xl">{row.dish.title}</span>
                  <p className="font text-[#389E0D] relative mt-3">
                    {row.dish.price}
                    <span className="ml-32 text-[#3E4347] text-right sm:top-auto">
                      1x
                    </span>
                    <span className="ml-9 float-right text-[#3E4347] text-right sm:top-auto">
                      Sedang diproses
                    </span>
                  </p>
                </div>
              </div>
            ))}
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
  const { sub } = user as any;
  const { user: userdata, error: usererror } = await getAccountById(sub);
  const { diseases: userdisease, error: userdiserr } = await getAccountDiseases(
    sub
  );
  const userprof = {
    user: userdata,
    diseases: userdisease,
  };
  const { transaction, error: trerr } = await getTransactions(sub);
  return {
    props: {
      session,
      userprof,
      transaction,
    },
  };
}
export default PesananSaya;
