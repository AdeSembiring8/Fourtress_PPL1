import Image from "next/image";
import Container from "./container";
// import heroImg from "../public/assets/loginRegisterPage/piring.png";

const Hero = ({ diseases }) => {
  // const data = diseases.map((row) =>
  //   row.id === "646dd932f023558beeb7dd4d" ? null : { ...row }
  // );
  let data = new Array();
  for (let row of diseases) {
    if (row.id !== "646dd932f023558beeb7dd4d") {
      data.push(row);
    }
  }
  return (
    <>
      <div className="relative mt-20">
        <img
          src="/assets/bg/bg-header.png"
          alt="Gambar"
          className="w-full h-auto"
        />
        <div className="absolute top-4 mt-2 sm:mt-12 z-10 w-full text-white text-3xl font-bold text-left">
          <Container className="flex flex-wrap ">
            <div className="flex items-center w-1/2">
              <div className="max-w-xl mb-48">
                <h1
                  className="text-4xl font-bold leading-snug tracking-tight text-white-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight sm:text-sm dark:text-white"
                  style={{ wordBreak: "break-word" }}
                >
                  Healthy Food, <br />
                  Cook your own food.
                </h1>
                <p
                  className="py-5 text-xl font-medium leading-normal text-white-500 lg:text-xl xl:text-1xl sm:text-sm dark:text-white-300"
                  style={{ wordBreak: "break-word" }}
                >
                  Kitchen Health merupakan platform yang menyediakan resep
                  masakan sehat sesuai kebutuhanmu. Kami juga menyediakan fitur
                  pembelian bahan masakan yang kamu butuhkan. Selamat
                  menjelajah!
                </p>

                <div className="pt-2 relative mx-auto text-gray-600 ">
                  <input
                    className="border-2 border-gray-300 bg-white h-16 px-5 w-full rounded-lg text-sm focus:outline-none"
                    type=""
                    name=""
                    placeholder="Mau cari resep apa nih?"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-5 "
                  ></button>
                </div>
              </div>
            </div>
            {/* <div className="flex items-center justify-center  lg:w-1/2">
              <div className="">
                <Image
                  src={heroImg}
                  width="460"
                  height="20000"
                  className="mb-32"
                  alt="Hero Illustration"
                  loading="eager"
                  placeholder="blur"
                />
              </div>
            </div> */}
          </Container>
        </div>
      </div>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-left text-black dark:text-black">
            Kamu mau jaga pola makan untuk apa?
          </div>

          <div className="flex flex-wrap justify-center text-center gap-5 mt-10 md:justify-around">
            {data.map((row) => (
              <a href={"/rekomendasi/" + row.name.replace(" ", "_")}>
                <div className="">
                  <img
                    src={
                      "../assets/loginRegisterPage/" +
                      row.name.toLowerCase() +
                      ".png"
                    }
                  />
                  <div className="text-center">{row.name}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
