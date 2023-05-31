import { FormEvent, useState } from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { useRouter } from "next/router";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const router = useRouter();

  const onLoginSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const submitbttn = form.querySelector(
      `button[type="submit"]`
    ) as HTMLButtonElement;
    const emailinput = form.querySelector(
      `input[name="email"]`
    ) as HTMLInputElement;
    const passinput = form.querySelector(
      `input[name="pass"]`
    ) as HTMLInputElement;
    if (submitbttn && emailinput && passinput) {
      submitbttn.disabled = true;
      emailinput.disabled = true;
      passinput.disabled = true;
      submitbttn.style.opacity = "0.3";
      emailinput.style.opacity = "0.3";
      passinput.style.opacity = "0.3";
    }
    const status = await signIn("customSignIn", {
      redirect: false, // Mengubah nilai redirect menjadi false untuk menangani penanganan kesalahan secara manual
      email: userInfo.email,
      password: userInfo.password,
      callbackUrl: "/dashboard",
    });
    if (status?.error) {
      alert("Email atau password salah"); // Menampilkan pesan kesalahan jika terjadi kesalahan saat login
      if (submitbttn && emailinput && passinput) {
        submitbttn.disabled = false;
        emailinput.disabled = false;
        passinput.disabled = false;
        submitbttn.style.opacity = "1";
        emailinput.style.opacity = "1";
        passinput.style.opacity = "1";
      }
      return null;
    }

    if (status?.ok) {
      router.push("/dashboard"); // Redirect ke halaman dashboard jika login berhasil
    }
  };

  // const onLoginSubmit = async (event: FormEvent) => {
  //   event.preventDefault();
  //   const status = await signIn("customSignIn", {
  //     redirect: true,
  //     email: userInfo.email,
  //     password: userInfo.password,
  //     callbackUrl: "/dashboard",
  //   });
  // };

  async function lockedfeature() {
    router.push({ pathname: "_index" });
  }
  return (
    <>
      <Head>
        <title>Kitchen Health</title>
        <link rel="stylesheet" href="css/loginPage.css" />
      </Head>

      <img
        src="assets/bg/background.png"
        alt="background kitchen health"
        className="img"
      />
      <div>
        <div className="kotakPutih">
          <a href="/">
            <img src="assets/logo/logo.png" alt="logo kitchen health" />
          </a>
          <div>
            <p className="fontMasuk">Masuk</p>
            <p className="fontBelumPunyaAkun">
              Belum punya akun?
              <Link
                className="fontDaftar"
                href="/register"
                style={{ textDecoration: "underline" }}
              >
                Daftar
              </Link>
            </p>
          </div>
          <div>
            <form onSubmit={onLoginSubmit}>
              <p className="fontForm">Email</p>
              <div className="">
                <input
                  value={userInfo.email}
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, email: target.value })
                  }
                  className="input"
                  type="text"
                  name="email"
                  placeholder="Masukkan email"
                />
              </div>

              <p className="fontForm">Password</p>
              <div className="passwordContainer">
                <input
                  value={userInfo.password}
                  onChange={({ target }) =>
                    setUserInfo({ ...userInfo, password: target.value })
                  }
                  className={`input ${showPassword ? "showPassword" : ""}`}
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
                    className={`passwordIcon ${showPassword ? "hidden" : ""}`}
                    style={{ width: "32px", height: "28px", marginLeft: "5px" }}
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
                    className={`passwordIcon ${showPassword ? "" : "hidden"}`}
                    style={{ width: "28px", height: "18px", marginLeft: "5px" }}
                  />
                </button>
              </div>

              {/* <div>
                <table style={{ width: 420, height: 65 }}>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" name="optiona" id="opta" />
                      </td>
                      <td>
                        <label className="checkboxtext">Remember Me</label>
                      </td>
                      <td
                        style={{ textAlign: "right" }}
                        className="checkboxtext"
                      >
                        <a style={{ textDecoration: "none" }} href="">
                          Lupa Password
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
              <button
                type="submit"
                style={{ width: "420px", height: "45px" }}
                className="py-2 mt-10  bg-[#389E0D] text-white hover:bg-[#298403] border-2 border-[#389E0D]  text-lg hover:text-neutral-50 rounded-40 transition ease-in-out delay-150  duration-300 rounded-md "
              >
                Login
              </button>

              <p className="atau">atau</p>
              <div className="">
                <button
                  type="button"
                  onClick={lockedfeature}
                  style={{ width: "420px", height: "45px" }}
                  className="py-2 px- bg-white text-[#389E0D] hover:bg-[#298403] border-2 border-[#389E0D]  text-lg hover:text-neutral-50 rounded-40 transition ease-in-out delay-150  duration-300 rounded-md "
                >
                  {/* </button> */}
                  {/* <button
                  type="button"
                  style={{ textDecoration: "none", color: "#389E0D" }}
                  onClick={lockedfeature}
                > */}
                  {/* <img src="assets/loginRegisterPage/google.png" alt="" /> */}
                  Masuk dengan Google
                </button>
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

export default Login;
