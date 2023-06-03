import React, { FormEvent, useState } from "react";
import Head from "next/head";
import Navbar from "../components/navbar2";
import Image from "next/legacy/image";
import Link from "next/link";
import Footer from "../components/footer";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { useRouter } from "next/router";
import { serverurl } from "../lib/prisma/server";
import { getAccountDiseases, getAccountById } from "../lib/prisma/account";
import { getDiseases } from "../lib/prisma/disease";

function EditProfile({ userprof, diseases }: any) {
  const { user, diseases: userdis } = userprof;
  const [userInfo, setUserInfo] = useState({
    profile_name: user.profile_name,
    email: user.email,
    tel: user.tel,
    address: user.address,
    gender: user.gender ? user.gender : "Laki-laki",
    birth_date: user.birth_date,
  });
  //   const userdisarr: Array<String> = userdis.map((dis: any) => dis.id);
  const router = useRouter();
  const bttnpressed = async (event: FormEvent) => {
    event.preventDefault();
    const linelem = event.target as HTMLLinkElement;
    linelem.style.pointerEvents = "none";
    linelem.style.opacity = "0.3";
    const splitted_first = userInfo.profile_name.split(" ", 1);
    const first_name = userInfo.profile_name.substring(
      0,
      splitted_first[0].length
    );
    const last_name = userInfo.profile_name.substring(
      splitted_first[0].length + 1
    );
    const checkbx = document.getElementsByName("disoption") as any;
    let checkedarr = new Array();
    for (let i = 0; i < checkbx.length; i++) {
      if (checkbx[i].checked === true) {
        checkedarr.push(checkbx[i].value);
      }
    }

    const sentdata = { ...userInfo, first_name, last_name };
    const record = { Diseases: checkedarr, AccountID: user.id };

    const { user: updatemsg, error: updaterrr } = await fetch(
      serverurl + "/api/profile/update",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sentdata, useracc: user }),
      }
    ).then((res) => res.json());
    const { message: regisqmsg, error: regisqerr } = await fetch(
      serverurl + "/api/auth/regisQ",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      }
    ).then((res) => res.json());
    if (updaterrr || regisqerr) {
      alert("gagal update profile");
      linelem.style.pointerEvents = "auto";
      linelem.style.opacity = "1";
    }
    if (updatemsg && regisqmsg) {
      router.push({ pathname: "/profile" });
    }
  };
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
      <form className="flex flex-col items-center mt-32 text-gray-700">
        <div className="flex border-y border-gray-400 py-3">
          <label htmlFor="nama" className="font-bold w-44 pr-8 text-right">
            Nama
          </label>
          <input
            value={userInfo.profile_name}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, profile_name: target.value })
            }
            id="nama"
            type="text"
            className="text-gray-700 items-center"
            placeholder="masukkan nama anda"
          />
        </div>
        <div className="flex border-b border-gray-400 py-3">
          <label htmlFor="tel" className="font-bold w-44 pr-8 text-right">
            Email
          </label>
          <input
            value={userInfo.email}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, email: target.value })
            }
            id="email"
            type="email"
            className="text-gray-700"
            placeholder="masukkan email anda"
          />
        </div>
        <div className="flex border-b border-gray-400 py-3">
          <label htmlFor="tel" className="font-bold w-44 pr-8 text-right">
            Nomor Telepon
          </label>
          <input
            value={userInfo.tel}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, tel: target.value })
            }
            id="tel"
            type="tel"
            className="text-gray-700"
            placeholder="masukkan nomor anda"
          />
        </div>
        <div className="flex border-b border-gray-400 py-3">
          <label htmlFor="address" className="font-bold w-44 pr-8 text-right">
            Alamat
          </label>
          <textarea
            value={userInfo.address}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, address: target.value })
            }
            id="address"
            className="text-gray-700"
            placeholder="masukkan alamat anda"
          ></textarea>
        </div>
        <div className="flex border-b border-gray-400 py-3">
          <label htmlFor="gender" className="font-bold w-44 pr-7 text-right">
            Jenis Kelamin
          </label>
          <select
            id="gender"
            className="w-44 mr-1 text-gray-700"
            value={userInfo.gender}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, gender: target.value })
            }
          >
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div className="flex border-b border-gray-400 py-3">
          <label htmlFor="birthDate" className="font-bold w-44 pr-7 text-right">
            Tanggal Lahir
          </label>
          <input
            id="birthDate"
            type="date"
            value={userInfo.birth_date}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, birth_date: target.value })
            }
            className="text-gray-700 w-44"
          />
        </div>
        <div className="flex border-b border-gray-400 py-3">
          <span className="font-bold w-44 pr-3 text-right">
            Riwayat Penyakit
          </span>
          <div>
            <div className="flex flex-col">
              {diseases.map((row: any) => (
                <label
                  htmlFor={row.name}
                  className="inline-flex items-center ml-5 mr-5"
                  key={row.id}
                >
                  <input
                    id={row.name}
                    type="checkbox"
                    name="disoption"
                    className="text-gray-700 mr-2"
                    value={row.id}
                  />
                  {row.name}
                </label>
              ))}
            </div>
          </div>
        </div>

        <a
          href="/editProfile"
          className="mt-6 mb-12 mr-6 py-2 px-7   bg-white hover:bg-[#389E0D] border-2 border-[#389E0D] text-[#389E0D] hover:text-neutral-50 rounded-40 transition ease-in-out delay-150  duration-300 rounded-md md:ml-5 "
          style={{ fontSize: "15px" }}
          onClick={bttnpressed}
        >
          Simpan
        </a>
      </form>
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
  const { AccObj } = user as any;
  const { user: userdata, error: usererror } = await getAccountById(AccObj);
  const { diseases: userdisease, error: userdiserr } = await getAccountDiseases(
    AccObj
  );
  const userprof = {
    user: userdata,
    diseases: userdisease,
  };
  const { diseases, error: diseaseserr } = await getDiseases();
  return {
    props: {
      session,
      userprof,
      diseases,
    },
  };
}
export default EditProfile;
