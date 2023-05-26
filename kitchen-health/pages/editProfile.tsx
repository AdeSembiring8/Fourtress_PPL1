import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar2";
import Image from "next/legacy/image";
import Link from "next/link";
import Footer from "../components/footer";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";


function EditProfile({ userprof }: any) {
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
            <form className="flex flex-col items-center mt-32 text-gray-700">
                <div className="flex border-y border-gray-400 py-3">
                    <label htmlFor="nama" className="font-bold w-44 pr-8 text-right">
                        Nama
                    </label>
                    <input
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
                        id="address"
                        className="text-gray-700"
                        placeholder="masukkan alamat anda"
                    ></textarea>
                </div>
                <div className="flex border-b border-gray-400 py-3">
                    <label htmlFor="gender" className="font-bold w-44 pr-7 text-right">
                        Jenis Kelamin
                    </label>
                    <select id="gender" className="w-44 mr-1 text-gray-700">
                        <option value="male">Laki-laki</option>
                        <option value="female">Perempuan</option>
                    </select>
                </div>
                <div className="flex border-b border-gray-400 py-3">
                    <label htmlFor="birthDate" className="font-bold w-44 pr-7 text-right">
                        Tanggal Lahir
                    </label>
                    <input
                        id="birthDate"
                        type="date"
                        className="text-gray-700 w-44"
                    />
                </div>
                <div className="flex border-b border-gray-400 py-3">
                    <span className="font-bold w-44 pr-3 text-right">Riwayat Penyakit</span>
                    <div>
                        <label htmlFor="gerd" className="inline-flex items-center ml-5 mr-5">
                            <input
                                id="gerd"
                                type="checkbox"
                                className="text-gray-700 mr-2"
                            />
                            Gerd
                        </label>
                        <label htmlFor="diabetes" className="inline-flex items-center mr-3 ml-6">
                            <input
                                id="diabetes"
                                type="checkbox"
                                className="text-gray-700 mr-2 "
                            />
                            Jantung
                        </label>
                        <div className="">
                            <label htmlFor="cancer" className="inline-flex items-center ml-5 mr-5">
                                <input
                                    id="cancer"
                                    type="checkbox"
                                    className="text-gray-700 mr-2"
                                />
                                Kanker
                            </label>
                            <label htmlFor="heartDisease" className="inline-flex items-center mr-3 ml-2">
                                <input
                                    id="heartDisease"
                                    type="checkbox"
                                    className="text-gray-700 mr-2"
                                />
                                Kolestrol
                            </label>
                        </div>
                        <div className="">
                            <label htmlFor="diabetes" className="inline-flex items-center ml-5 mr-5">
                                <input
                                    id="diabetes"
                                    type="checkbox"
                                    className="text-gray-700 mr-2"
                                />
                                Diabetes
                            </label>
                        </div>
                    </div>
                </div>
                <a href="/editProfile" className="mt-6 mb-12 mr-6 py-2 px-7   bg-white hover:bg-[#389E0D] border-2 border-[#389E0D] text-[#389E0D] hover:text-neutral-50 rounded-40 transition ease-in-out delay-150  duration-300 rounded-md md:ml-5 " style={{ fontSize: '15px' }}>
                    Simpan
                </a>
            </form>
            <Footer />
        </>
    )
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
export default EditProfile