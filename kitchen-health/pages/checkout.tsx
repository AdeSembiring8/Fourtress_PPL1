import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar2";
import Image from "next/legacy/image";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";



function Checkout({ userprof }: any) {
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
            </Head >
            <Navbar user={user} />


            <div className="mx-auto mt-8 max-w-2xl md:mt-12">
                <div className="px-4 sm:px-8 ">
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <div className="flex w-full flex-col px-1 py-4">
                                <p className="text-xl font-medium">Alamat Pengiriman</p>
                                <p className="text-gray-400 mt-5">Jatinangor, Sumedang, Jawa Barat</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                                <p className="text-xl font-medium">Metode Pembayaran</p>
                                <button type="button" className="ml-80">
                                    <img src="\assets\loginRegisterPage\pilih.png" className="w-12" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="\assets\loginRegisterPage\bayam.png" alt="" />
                            <div className="flex w-full flex-col px-4 py-4 justify-center">
                                <span className="font-semibold">Sayur Bayam Jagung</span>
                                <p className="text-lg font-bold relative">Rp10.000
                                    <span className="float-right text-gray-400 text-right sm:top-auto">1x</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="\assets\loginRegisterPage\capcay.png" alt="" />
                            <div className="flex w-full flex-col px-4 py-4 justify-center">
                                <span className="font-semibold">Sayur Capcay</span>
                                <p className="text-lg font-bold relative">Rp25.000
                                    <span className="float-right text-gray-400 text-right sm:top-auto">1x</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="\assets\loginRegisterPage\kentang.png" alt="" />
                            <div className="flex w-full flex-col px-4 py-4 justify-center">
                                <span className="font-semibold">Kentang Goreng</span>
                                <p className="text-lg font-bold relative">Rp10.000
                                    <span className="float-right text-gray-400 text-right sm:top-auto">1x</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Total</p>
                                <p className="text-xl font-semibold text-gray-900 ml-96"><span className="text-xs font-normal text-gray-400 ml-12">Rp</span> 45.000</p>
                            </div>

                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-[#389E0D] px-6 py-4 text-lg font-medium text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#389E0D]">
                            Bayar
                            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

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
export default Checkout
