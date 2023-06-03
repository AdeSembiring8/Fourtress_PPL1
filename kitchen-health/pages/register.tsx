import { FormEvent, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { serverurl } from "../lib/prisma/server";
import { stat } from "fs";

function Register() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    val_pass: "",
    email: "",
    profile_name: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [passwordMismatch, setPasswordMismatch] = useState(false); // State untuk melacak kesalahan password tidak sama

  const router = useRouter();
  const onRegisterSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setPasswordMismatch(false);

    const form = event.target as HTMLFormElement;
    const submitbttn = form.querySelector(
      `button[type="submit"]`
    ) as HTMLButtonElement;
    if (submitbttn) {
      submitbttn.disabled = true;
      submitbttn.style.opacity = "0.3";
    }
    // if (
    //   Object.values(userInfo).every((x) => x === null || x === "")) {
    //   //validasi form kosong
    //   return null;
    // }
    // if (userInfo.password !== userInfo.val_pass) {
    //   //validasi password tidak sama

    //   setPasswordMismatch(true);

    //   return null;
    // }

    // Validasi form kosong
    if (
      Object.values(userInfo).some((value) => value === null || value === "")
    ) {
      alert("Harap isi semua field.");
      if (submitbttn) {
        submitbttn.disabled = false;
        submitbttn.style.opacity = "1";
      }
      return null;
    }

    // Validasi password tidak sama
    if (userInfo.password !== userInfo.val_pass) {
      setPasswordMismatch(true);
      if (submitbttn) {
        submitbttn.disabled = false;
        submitbttn.style.opacity = "1";
      }
      return null;
    }

    const status = await fetch(serverurl + "/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    }).then((res) => res.json());
    if (status.message || status.error) {
      alert(status.message || status.error);
      submitbttn.disabled = false;
      submitbttn.style.opacity = "1";
      return null;
    }
    router.push({
      pathname: "/regisQuestion",
      query: { id: status.user.id },
    });
  };

  async function lockedfeature() {
    router.push({ pathname: "_index" });
  }
  return (
    <>
      <Head>
        <title>Kitchen Health</title>
        <link rel="stylesheet" href="css/registerPage.css" />
      </Head>
      <img
        src="assets/bg/background.png"
        alt="logo kitchen health"
        className="img"
      />

      <div>
        <div className="kotakPutih" style={{ marginBottom: "72px" }}>
          <img src="assets/logo/logo.png" alt="logo kitchen health" />
          <div>
            <p className="fontDaftar">Daftar</p>
            <p className="fontBuatAkun">
              Buat akun atau
              <Link
                href="/login"
                className="fontLogin"
                style={{ textDecoration: "underline" }}
              >
                Login
              </Link>
            </p>
          </div>
          <div>
            <form onSubmit={onRegisterSubmit}>
              <p className="fontForm pt-3">Nama Lengkap</p>
              <div className="">
                <input
                  value={userInfo.profile_name}
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, profile_name: target.value })
                  }
                  className="input"
                  type="text"
                  name="nama"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <p className="fontForm">Nama Pengguna</p>
              <div className="">
                <input
                  value={userInfo.username}
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, username: target.value })
                  }
                  className="input"
                  type="text"
                  name="np"
                  placeholder="Masukkan nama pengguna"
                />
              </div>
              <p className="fontForm">Email</p>
              <div className="">
                <input
                  value={userInfo.email}
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, email: target.value })
                  }
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
              {passwordMismatch && (
                <p style={{ color: "red" }}>
                  Password tidak sama dengan konfirmasi password.
                </p>
              )}{" "}
              {/* Menampilkan pesan kesalahan jika passwordMismatch adalah true */}
              <table style={{ width: 480, height: 20 }}>
                <tbody>
                  <tr>
                    <td>
                      <div className="passwordContainer w-56">
                        <input
                          value={userInfo.password}
                          onChange={({ target }) =>
                            setUserInfo({ ...userInfo, password: target.value })
                          }
                          className={`input ${
                            showPassword ? "showPassword" : ""
                          }`}
                          type={showPassword ? "text" : "password"}
                          name="pass"
                          placeholder="Masukkan password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="togglePasswordButton"
                        >
                          <img
                            src="assets/loginRegisterPage/show.png"
                            alt="Tampilkan Password"
                            className={`passwordIcon ${
                              showPassword ? "hidden" : ""
                            }`}
                            style={{
                              width: "32px",
                              height: "28px",
                              marginLeft: "5px",
                            }}
                          />
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="togglePasswordButton"
                        >
                          <img
                            src="assets/loginRegisterPage/Hide.png"
                            alt="Sembunyikan Password"
                            className={`passwordIcon ${
                              showPassword ? "" : "hidden"
                            }`}
                            style={{
                              width: "28px",
                              height: "18px",
                              marginLeft: "5px",
                            }}
                          />
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="passwordContainer w-56">
                        <input
                          value={userInfo.val_pass}
                          onChange={({ target }) =>
                            setUserInfo({ ...userInfo, val_pass: target.value })
                          }
                          className={`input ${
                            showPassword ? "showPassword" : ""
                          }`}
                          type={showPassword ? "text" : "password"}
                          name="pass"
                          placeholder="Masukkan password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="togglePasswordButton"
                        >
                          <img
                            src="assets/loginRegisterPage/show.png"
                            alt="Tampilkan Password"
                            className={`passwordIcon ${
                              showPassword ? "hidden" : ""
                            }`}
                            style={{
                              width: "32px",
                              height: "28px",
                              marginLeft: "5px",
                            }}
                          />
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="togglePasswordButton"
                        >
                          <img
                            src="assets/loginRegisterPage/Hide.png"
                            alt="Sembunyikan Password"
                            className={`passwordIcon ${
                              showPassword ? "" : "hidden"
                            }`}
                            style={{
                              width: "28px",
                              height: "18px",
                              marginLeft: "5px",
                            }}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="butt">
                <div className="but">
                  <button
                    type="submit"
                    style={{ width: "450px", height: "45px" }}
                    className="py-2 px- bg-[#389E0D] text-white hover:bg-[#298403] border-2 border-[#389E0D] text-lg hover:text-neutral-50 rounded-40 transition ease-in-out delay-150 duration-300 rounded-md"
                  >
                    Daftar
                  </button>
                </div>
              </div>
              <p className="atau">atau</p>
              <div className="">
                <button
                  className="py-2  bg-white text-[#389E0D] hover:bg-[#298403] border-2 border-[#389E0D] text-lg hover:text-neutral-50 rounded-40 transition ease-in-out delay-150 duration-300 rounded-md"
                  onClick={lockedfeature}
                  // href="/_index"
                  style={{ width: "450px", height: "45px" }}
                >
                  Daftar dengan Google
                </button>
                {/* <a style={{ textDecoration: "none", color: "#389E0D" }} href="/_index">
                  <img src="google.png" alt="" />
                  Daftar dengan Google
                </a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Register;
