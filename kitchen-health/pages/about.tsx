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

const AboutPage: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            name: 'Ade Dwi Fatwa Sembiring',
            position: 'Product manager',
            image: '/assets/Team/ade.png',
        },
        {
            name: 'Indah Sutriyati',
            position: 'UI/UX Designer',
            image: '/assets/Team/indah.png',
        },
        {
            name: 'Della Fuziyyah Husna',
            position: 'Front-End Developer',
            image: '/assets/Team/della.png',
        },
        {
            name: 'Mu`az Abdul Rohim',
            position: 'Back-End Developer',
            image: '/assets/Team/muaz.png',
        },
    ];

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-4 text-center mt-20">Tentang Kami</h1>
            <p className="text-center mt-9 font-normal ml-44 mr-44 pr-48 pl-48">Kitchen Health merupakan platform yang menyediakan resep masakan sehat sesuai kebutuhanmu. Kami juga menyediakan fitur pembelian bahan masakan  yang kamu butuhkan. Selamat menjelajah!</p>
            <h1 className="text-4xl font-bold text-center mt-20">Tim Pengembang</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 p-48">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-none m-5">
                        <div className="border-0 border-gray-200 rounded-3xl overflow-hidden">
                            <img className="w-full mb-4 rounded-none" src={member.image} alt={member.name} />
                        </div>
                        <h2 className="text-center mb-2 text-gray-900 font-bold text-2xl mt-7">{member.name}</h2>
                        <p className="text-center text-gray-700 mb-10 font-normal text-2xl leading-6 font-roboto mt-2">{member.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutPage;