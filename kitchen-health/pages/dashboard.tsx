import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar2";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function LandingPage2() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push({ pathname: "/login" });
  }

  const { data: dishdata, error: disherr } = useSWR("/api/dish", fetcher);
  const { data: userdata, error: usererr } = useSWR("/api/profile", fetcher);
  if (disherr || !dishdata || usererr || !userdata) {
    return null;
  }
  const { dishes } = dishdata;
  const { user } = userdata;
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
      <Hero />

      <Card dishes={dishes} />
      <Footer />
    </>
  );
}

// export async function getServerSideProps(context: any) {
//   const session = await getServerSession(context.req, context.res, authOptions);
//   const { dishes } = await fetch("http://localhost:3000/api/dish", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   }).then((res) => res.json());
//   const user = await fetch("http://localhost:3000/api/profile", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   }).then((res) => res.json());
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//       dishes,
//       user,
//     },
//   };
// }

export default LandingPage2;
