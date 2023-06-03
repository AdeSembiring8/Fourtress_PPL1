import React from "react";
import { useRouter } from "next/router";
import { serverurl } from "../lib/prisma/server";

const Resep = ({ pagedish, user }) => {
  const guide = pagedish.guide.split(";");
  const duration = guide[0];
  guide.shift();
  const recipe = pagedish.recipe.split(";");
  const tools = pagedish.tools.split(";");
  const compound = pagedish.containswith;
  const router = useRouter();
  const pesanbttn = async (e) => {
    if (!user) {
      router.push({ pathname: "/login" });
      return null;
    }
    const btn = e.target;
    btn.disabled = true;
    btn.style.opacity = "0.3";
    const transaction = await fetch(serverurl + "/api/profile/purchasedish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dishid: pagedish.id, accid: user.id }),
    }).then((res) => res.json());
    if (transaction.error) {
      alert("Gagal membeli makanan!");
      btn.disabled = false;
      btn.style.opacity = "1";
    } else {
      /**
       * LINK WA CHECKOUT
       */
      window.open("https://web.whatsapp.com/", "_blank");
      router.push({ pathname: "/pesananSaya" });
    }
  };
  return (
    <div className="justify-center items-center">
      <img
        src={pagedish.prof_img}
        className="w-full relative rounded-tl-lg rounded-tr-lg h-96 object-cover"
      />

      <div className="flex justify-center items-center">
        <div className="max-w-8xl mx-14">
          <div className=" relative bg-white border border-gray-200 rounded-lg shadow w-full my-4 p-4 -mt-40">
            <div className=" px-16 py-10 ">
              <div className=" mb-4 flex justify-between items-center">
                <h1 className="text-4xl font-bold text-left">
                  {pagedish.title}
                </h1>
                <div className="flex items-center">
                  <h2 className=" text-2xl font-bold ">Rp {pagedish.price}</h2>
                  <button
                    className=" bg-green-500 text-white py-2 px-4 rounded ml-3"
                    onClick={pesanbttn}
                  >
                    {" "}
                    + Pesan{" "}
                  </button>
                </div>
              </div>
              <div className="mb-5 flex justify-start ">
                <h3 className=" text-xl font-semibold "> Waktu Masak</h3>
                <h4 className=" text-lg font-light text-right ml-3">
                  {" "}
                  {duration}
                </h4>
                <h3 className=" text-xl font-semibold ml-32">
                  {" "}
                  {compound[0].nutrient.name}
                </h3>
                <h4 className=" text-lg font-light ml-3">
                  {compound[0].amount} grams
                </h4>
                <h3 className=" text-xl font-semibold ml-32">
                  {" "}
                  {compound[1].nutrient.name}
                </h3>
                <h4 className=" text-lg font-light ml-3">
                  {compound[1].amount} grams
                </h4>
              </div>
              <p className=" text-lg ">{pagedish.desc} </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow w-full my-4 p-4">
            <div className=" px-16 py-10 ">
              <div>
                <h1 className="text-4xl font-bold text-left">Bahan Masakan</h1>
              </div>
              <div className="mt-3">
                <ul className="list-disc px-4 " style={{ columnCount: 2 }}>
                  {recipe.map((row) => (
                    <li className=" my-5">{row}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow w-full my-4 p-4">
            <div className=" px-16 py-10 ">
              <div>
                <h1 className="text-4xl font-bold text-left">Alat Memasak</h1>
              </div>
              <div className="mt-3">
                <ul className="list-disc px-4 " style={{ columnCount: 1 }}>
                  {tools.map((row) => (
                    <li className=" my-5">{row}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow w-full my-4 p-4 -mb-16">
            <div className=" px-16 py-10 ">
              <div>
                <h1 className="text-4xl font-bold text-left">Cara Memasak</h1>
              </div>
              <div className="mt-3">
                <ul className=" list-decimal px-4 " style={{ columnCount: 1 }}>
                  {guide.map((row) => (
                    <li className=" my-5">{row} </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-8xl my-40 mx-14">
        <h1 className="text-2xl font-bold text-left -mb-48">
          Resep yang mungkin kamu suka
        </h1>
      </div>
    </div>
  );
};

export default Resep;
