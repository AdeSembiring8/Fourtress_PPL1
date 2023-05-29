import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import Navbar from "../components/navbar2";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { serverurl } from "./server";

function Komunitas({ userprof }: any) {
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
              <div className=" flex justify-start items-center">
                <img
                  src="/assets/Team/muaz.png"
                  alt=""
                  className=" w-16 h-16 rounded-full"
                />
                <h1 className=" ml-6 font-semibold"> Muaz Abdul Rohim</h1>
              </div>
              <div className=" ml-20 ">
                <p className=" text-sm text-justify">
                  Hey guys, jadi aku mau bahas nih tentang diet sehat yang bisa
                  membantu menjaga diri dari GERD. Apa itu GERD? GERD atau
                  Gastroesophageal Reflux Disease adalah kondisi yang terjadi
                  ketika asam lambung naik ke kerongkongan dan menyebabkan
                  iritasi. Nah, biasanya GERD ini bisa terjadi karena makanan
                  atau minuman yang kita konsumsi. Nah, untuk menghindari GERD,
                  kita bisa mulai dengan menjaga pola makan kita. Pertama-tama,
                  kurangi makanan atau minuman yang bisa memicu GERD, seperti
                  makanan pedas, berlemak, asam, kafein, dan minuman beralkohol.
                  Selain itu, kita juga perlu menghindari makanan atau minuman
                  yang bisa membuat kita terlalu kenyang, terutama sebelum
                  tidur. Selain itu, kita juga perlu menambahkan makanan yang
                  sehat ke dalam pola makan kita, seperti buah-buahan, sayuran,
                  dan protein yang rendah lemak. Kita juga perlu mengunyah
                  makanan dengan baik dan tidak terburu-buru saat makan. Kita
                  bisa memperhatikan rasa kenyang saat makan, dan jika sudah
                  merasa kenyang, jangan terus memaksa diri untuk makan lebih
                  banyak. Terakhir, jangan lupa untuk tetap aktif bergerak dan
                  menjaga berat badan kita. Kita bisa melakukan olahraga ringan
                  seperti berjalan-jalan atau bersepeda, dan menjaga pola tidur
                  yang teratur. Jadi, itu dia sedikit tips dari aku tentang diet
                  sehat yang bisa membantu menjaga diri dari GERD. Semoga
                  bermanfaat ya! Ingat, menjaga kesehatan itu penting untuk
                  menjalani hidup dengan lebih bahagia dan produktif :)
                </p>
              </div>
              <div className=" ml-20 text-sm font-medium text-gray-500 mt-5  text-end">
                <h1> 26 Mei 2023</h1>
              </div>

              <div className=" flex justify-start items-center mt-5 ">
                <img
                  src="/assets/Team/indah.png"
                  alt=""
                  className=" w-16 h-16 rounded-full"
                />
                <h1 className=" ml-6 font-semibold"> Indah</h1>
              </div>
              <div className=" ml-20 ">
                <p className=" text-sm text-justify">Niseeeeee Info!!!!</p>
              </div>
              <div className=" ml-20 text-sm font-medium text-gray-500 mt-5 text-end">
                <h1> 26 Mei 2023</h1>
              </div>
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
  return {
    props: {
      session,
      userprof,
    },
  };
}
export default Komunitas;
