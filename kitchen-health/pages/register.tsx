import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";

function Register() {
    return (
        <>
            <Head>
                <title>Kitchen Health</title>
                <link rel="stylesheet" href="css/RegisterPage.css" />
            </Head>
            <Image
                src="/background.png"
                alt="bg"
                width="1833"
                height="1400"
                objectFit="cover"
            />
            <div>
                <div className="kotakPutih">
                    <img src="assets/logo/logo.png" alt="logo kitchen health" />
                    <div>
                        <p className="fontDaftar">Daftar</p>
                        <p className="fontBuatAkun">
                            Buat akun atau
                            <a className="fontLogin" href="">
                                Login
                            </a>
                        </p>
                    </div>
                    <div>
                        <form action="" method="post">
                            <p className="fontForm">Nama Lengkap</p>
                            <div className="form">
                                <input
                                    className="input"
                                    type="text"
                                    name="nama"
                                    placeholder="Masukkan nama lengkap"
                                />
                            </div>
                            <p className="fontForm">Nama Pengguna</p>
                            <div className="form">
                                <input
                                    className="input"
                                    type="text"
                                    name="np"
                                    placeholder="Masukkan nama pengguna"
                                />
                            </div>
                            <p className="fontForm">Email</p>
                            <div className="form">
                                <input
                                    className="input"
                                    type="email"
                                    name="email"
                                    placeholder="Masukkan email"
                                />
                            </div>
                            <table className="tablePass">
                                <tbody>
                                    <tr>
                                        <td className="fontForm">Password</td>
                                        <td className="fontForm" style={{ textAlign: "right" }}>
                                            Konfirmasi Password
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table style={{ width: 480, height: 20 }}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="formPass">
                                                <input
                                                    className="inputPass"
                                                    type="password"
                                                    name="pass"
                                                    placeholder="Masukkan password"
                                                />
                                                <img src="assets/loginRegisterPage/Hide.png" alt="logo kitchen health" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="formPass">
                                                <input
                                                    className="inputPass"
                                                    type="password"
                                                    name="pass"
                                                    placeholder="Konfirmasi password"
                                                />
                                                <img src="assets/loginRegisterPage/Hide.png" alt="logo kitchen health" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="butt">
                                <div className="but">
                                    <button
                                        type="submit"
                                    >Daftar
                                    </button>
                                </div>
                            </div>
                            <p className="atau">atau</p>
                            <div className="google">
                                <a style={{ textDecoration: "none", color: "#389E0D" }} href="">
                                    <img src="google.png" alt="" />
                                    Daftar dengan Google
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>




        </>
    )

}

export default Register