import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";

function Login() {
  return (
    <>
      <Head>
        <title>Kitchen Health</title>
        <link rel="stylesheet" href="css/loginPage.css" />
      </Head>
      <Image
        src="/background.png"
        alt="bg"
        width="1833"
        height="1200"
        objectFit="cover"
      />



      <div style={{ backgroundImage: 'url("assets/bg/background.png")' }}>
        <div className="kotakPutih">
          <img src="assets/logo/logo.png" alt="logo kitchen health" />
          <div>
            <p className="fontMasuk">Masuk</p>
            <p className="fontBelumPunyaAkun">
              Belum punya akun?
              <a className="fontDaftar" href="">
                Daftar
              </a>
            </p>
          </div>
          <div>
            <form action="" method="post">
              <p className="fontForm">Email</p>
              <div className="form">
                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="Masukkan email"
                />
              </div>
              <p className="fontForm">Password</p>
              <div className="form">
                <input
                  className="input"
                  type="email"
                  name="pass"
                  placeholder="Masukkan password"
                />
                <img src="assets/loginRegisterPage/Hide.png" alt="logo kitchen health" />
              </div>
              <div>
                <table style={{ width: 420, height: 65 }}>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" name="optiona" id="opta" />
                      </td>
                      <td>
                        <label className="checkboxtext">Remember Me</label>
                      </td>
                      <td style={{ textAlign: "right" }} className="checkboxtext">
                        <a style={{ textDecoration: "none" }} href="">
                          Lupa Password
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="but">
                <button
                  type="submit"
                >Login
                </button>
              </div>
              <p className="atau">atau</p>
              <div className="google">
                <a style={{ textDecoration: "none", color: "#389E0D" }} href="">
                  {/* <img src="assets/loginRegisterPage/google.png" alt="" /> */}
                  Masuk dengan Google
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )

}

export default Login