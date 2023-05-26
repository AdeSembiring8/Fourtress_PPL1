import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args: any[]) => fetch(args[0]).then((res) => res.json());

function RegisQuestion() {
  const router = useRouter();
  const { data, error } = useSWR("/api/disease", fetcher);
  if (error || !data) {
    return null;
  }
  const { diseases } = data;
  const btnpressed = async () => {
    const { id } = router.query;
    const checkbx = document.getElementsByName("optiona") as any;
    let checkedarr = new Array();
    for (let i = 0; i < checkbx.length; i++) {
      if (checkbx[i].checked === true) {
        checkedarr.push(checkbx[i].value);
      }
    }
    const record = { Diseases: checkedarr, AccountID: id };
    const result = await fetch("http://localhost:3000/api/auth/regisQ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push({ pathname: "/" });
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
          <div style={{ paddingLeft: 10 }}>
            <div className="butt">
              <div className="but">
                <button type="submit" onClick={btnpressed}>
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

export default RegisQuestion;
