import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";

function RegisQuestion() {
    return (
        <>
            <Head>
                <title>Kitchen Health</title>
                <link rel="stylesheet" href="css/regisQuestionPage.css" />
            </Head>
            
            <img src="assets/bg/background.png" alt="logo kitchen health" className="img" />
            <div>
                <div className="kotakPutih">
                    <img src="assets/logo/logo.png" alt="logo kitchen health" />
                    <div style={{ marginBottom: "-10px" }}>
                        <p className="fontRegis">Apa riwayat penyakit yang pernah kamu alami?</p>
                    </div>
                    <div style={{ paddingLeft: 40 }}>
                        <table style={{ width: 450, height: 65 }}>
                            <tbody>
                                <tr className="tr">
                                    <td>
                                        <input type="checkbox" name="optiona" id="opta" />{" "}
                                    </td>
                                    <td>
                                        <label className="checkboxtext"> Gerd </label>{" "}
                                    </td>
                                </tr>
                                <tr className="tr">
                                    <td>
                                        <input type="checkbox" name="optiona" id="opta" />{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <label className="checkboxtext"> Diabetes </label>{" "}
                                    </td>
                                </tr>
                                <tr className="tr">
                                    <td>
                                        <input type="checkbox" name="optiona" id="opta" />{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <label className="checkboxtext"> Kolestrol </label>{" "}
                                    </td>
                                </tr>
                                <tr className="tr">
                                    <td>
                                        <input type="checkbox" name="optiona" id="opta" />{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <label className="checkboxtext"> Kanker </label>{" "}
                                    </td>
                                </tr>
                                <tr className="tr">
                                    <td>
                                        <input type="checkbox" name="optiona" id="opta" />{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <label className="checkboxtext"> Jantung </label>{" "}
                                    </td>
                                </tr>
                                <tr className="tr">
                                    <td>
                                        <input type="checkbox" name="optiona" id="opta" />{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <label className="checkboxtext"> Obesitas </label>{" "}
                                    </td>
                                </tr>
                                <tr className="tr">
                                    <td>
                                        <input type="checkbox" name="optiona" id="opta" />{" "}
                                    </td>
                                    <td>
                                        {" "}
                                        <label className="checkboxtext">
                                            {" "}
                                            Tidak Memiliki riwayat penyakit{" "}
                                        </label>{" "}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ paddingLeft:10 }}>
                        <div className="butt">
                            <div className="but">
                                <button
                                    type="submit"
                                >Simpan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )

}

export default RegisQuestion