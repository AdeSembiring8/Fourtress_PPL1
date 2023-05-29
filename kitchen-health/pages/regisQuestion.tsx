import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { serverurl } from "../lib/prisma/server";

function RegisQuestion({ diseases }: any) {
  const router = useRouter();
  const [checkboxError, setCheckboxError] = useState(false); // State untuk melacak kesalahan checkbox
  const btnpressed = async () => {
    const { id } = router.query;
    const checkbx = document.getElementsByName("optiona") as any;
    let checkedarr = new Array();
    for (let i = 0; i < checkbx.length; i++) {
      if (checkbx[i].checked === true) {
        checkedarr.push(checkbx[i].value);
      }
    }

    if (checkedarr.length === 0) {
      setCheckboxError(true); // Set state checkboxError menjadi true jika tidak ada checkbox yang dicentang
      return;
    }

    const record = { Diseases: checkedarr, AccountID: id };
    const result = await fetch(serverurl + "/api/auth/regisQ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push({ pathname: "/login" });
      });
  };
  return (
    <>
      <Head>
        <title>Kitchen Health</title>
        <link rel="stylesheet" href="css/regisQuestionPage.css" />
      </Head>

      <img
        src="assets/bg/background.png"
        alt="logo kitchen health"
        className="img"
      />
      <div>
        <div className="kotakPutih">
          <img src="assets/logo/logo.png" alt="logo kitchen health" />
          <div style={{ marginBottom: "-10px" }}>
            <p className="fontRegis">
              Apa riwayat penyakit yang pernah kamu alami?
            </p>
          </div>
          <div style={{ paddingLeft: 40 }}>
            <table style={{ width: 450, height: 65 }}>
              <tbody>
                {diseases.map((row: any) => (
                  <tr className="tr" key={row.id}>
                    <td>
                      <input
                        type="checkbox"
                        name="optiona"
                        id="opta"
                        value={row.id}
                      />{" "}
                    </td>
                    <td>
                      <label className="checkboxtext"> {row.name} </label>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {checkboxError && (
            <p style={{ color: "red", paddingLeft: "12px" }}>
              Pilih minimal satu, jangan dikosongin yaa.
            </p>
          )}
          <div style={{ paddingLeft: 10 }}>
            <div className="butt">
              <div className="">
                <button
                  onClick={btnpressed}
                  type="submit"
                  style={{ width: "420px", height: "45px" }}
                  className="py-2 px- bg-[#389E0D] text-white hover:bg-[#298403] border-2 border-[#389E0D] text-lg hover:text-neutral-50 rounded-40 transition ease-in-out delay-150 duration-300 rounded-md"
                >
                  Simpan
                </button>
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
  const { diseases, error } = await fetch(serverurl + "/api/disease", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  return {
    props: {
      session,
      diseases,
    },
  };
}

export default RegisQuestion;
