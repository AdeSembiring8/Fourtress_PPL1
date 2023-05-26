import { FormEvent, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { serverurl } from "./server";

function Register() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    val_pass: "",
    email: "",
    profile_name: "",
  });
  const router = useRouter();
  const onRegisterSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (Object.values(userInfo).every((x) => x === null || x === "")) {
      //validasi form kosong
      return null;
    }
    if (userInfo.password !== userInfo.val_pass) {
      //validasi password tidak sama
      return null;
    }

    await fetch(serverurl + "/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data)
          router.push({
            pathname: "/regisQuestion",
            query: { id: data.user.id },
          });
        else console.log(data);
      });
  };
  return (
    <>
      <Head>
        <title>Kitchen Health</title>
        <link rel="stylesheet" href="css/RegisterPage.css" />
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
              <Link href="/login" className="fontLogin">
                Login
              </Link>
            </p>
          </div>
          <div>
            <form onSubmit={onRegisterSubmit}>
              <p className="fontForm">Nama Lengkap</p>
              <div className="form">
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
              <div className="form">
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
              <div className="form">
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
              <table style={{ width: 480, height: 20 }}>
                <tbody>
                  <tr>
                    <td>
                      <div className="formPass">
                        <input
                          value={userInfo.password}
                          onChange={({ target }) =>
                            setUserInfo({ ...userInfo, password: target.value })
                          }
                          className="inputPass"
                          type="password"
                          name="pass"
                          placeholder="Masukkan password"
                        />
                        <img
                          src="assets/loginRegisterPage/Hide.png"
                          alt="logo kitchen health"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="formPass">
                        <input
                          value={userInfo.val_pass}
                          onChange={({ target }) =>
                            setUserInfo({ ...userInfo, val_pass: target.value })
                          }
                          className="inputPass"
                          type="password"
                          name="pass"
                          placeholder="Konfirmasi password"
                        />
                        <img
                          src="assets/loginRegisterPage/Hide.png"
                          alt="logo kitchen health"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="butt">
                <div className="but">
                  <button type="submit">Daftar</button>
                </div>
              </div>
              <p className="atau">atau</p>
              <div className="google">
                <a style={{ textDecoration: "none", color: "#389E0D" }} href="/_index">
                  <img src="google.png" alt="" />
                  Daftar dengan Google
                </a>
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
        destination: "/dashboard",
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
