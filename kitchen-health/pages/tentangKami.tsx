import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import Navbar from "../components/navbar2";
import Footer from "../components/footer";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";


interface TeamMember {
    name: string;
    position: string;
    image: string;
}


function AboutPage({ userprof }: any) {
    const { user } = userprof;

    const teamMembers: TeamMember[] = [
        {
            name: 'Ade Dwi Fatwa Sembiring',
            position: 'Product manager',
            image: '/assets/team/ade.png',
        },
        {
            name: 'Indah Sutriyati',
            position: 'UI/UX Designer',
            image: '/assets/team/indah.png',
        },
        {
            name: 'Della Fuziyyah Husna',
            position: 'Front-End Developer',
            image: '/assets/team/della.png',
        },
        {
            name: 'Mu`az Abdul Rohim',
            position: 'Back-End Developer',
            image: '/assets/team/muaz.png',
        },
    ];
    const teamSupport: TeamMember[] = [
        {
            name: 'Pak Akmal S.Si.,MT.',
            position: 'Dosen Pengampu',
            image: '/assets/team/akmal.png',
        },
        {
            name: 'Dicky Rahma Hermawan',
            position: 'Asisten Praktikum',
            image: '/assets/team/dicky.jpg',
        },
        {
            name: 'Ananda Miftakhul Syifa',
            position: 'Asisten Praktikum',
            image: '/assets/team/ananda.jpg',
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
            <Navbar user={user} />
            <div className="container mx-auto py-8" style={{
                backgroundImage: "url('/assets/bg/bg2.png')",
            }}>
                <h1 className="text-4xl font-bold mb-4 text-center mt-20">Tentang Kami</h1>
                <p className="text-center mt-9 font-normal ml-44 mr-44 pr-48 pl-48">Kitchen Health merupakan platform yang menyediakan resep masakan sehat sesuai kebutuhanmu. Kami juga menyediakan fitur pembelian bahan masakan  yang kamu butuhkan. Selamat menjelajah!</p>
                <h1 className="text-4xl font-bold text-center mt-20">Tim Pengembang</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pt-8 p-32">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-none m-5">
                            <div className="border-0 border-gray-200 rounded-3xl overflow-hidden">
                                <img className="w-full mb-4 rounded-none" src={member.image} alt={member.name} />
                            </div>
                            <h2 className="text-center mb-2 text-gray-900 font-bold text-medium mt-7">{member.name}</h2>
                            <p className="text-center text-gray-700 mb-10 font-normal text-medium leading-6 font-roboto mt-2">{member.position}</p>
                        </div>
                    ))}
                </div>
                <h1 className="text-4xl font-bold text-center">Pembimbing</h1>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-9 lg:grid-cols-3  gap-2 pt-8 px-48">
                        {teamSupport.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-none m-5">
                                <div className="border-0 border-gray-200 rounded-3xl overflow-hidden">
                                    <img className="w-full mb-4 rounded-none" src={member.image} alt={member.name} />
                                </div>
                                <h2 className="text-center mb-2 text-gray-900 font-bold text-medium mt-7">{member.name}</h2>
                                <p className="text-center text-gray-700 mb-10 font-normal text-medium leading-6 font-roboto mt-2">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

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

export default AboutPage;