import Image from "next/image";
import Container from "./container";
import { useState } from "react";
import { useRouter } from "next/router";


const Hero = ({ diseases }) => {
  let data = new Array();
  for (let row of diseases) {
    if (row.id !== "646dd932f023558beeb7dd4d") {
      data.push(row);
    }
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const router = useRouter();
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleSearch = async (e) => {
    if (e.key) {
      if (e.key !== "Enter") {
        return null;
      }
    }
    router.push({
      pathname: "/",
      query: { searchq: searchTerm.replace(" ", "_") },
    });
  };
  return (
    <>
      <div className="relative mt-20">
        <img
          src="/assets/bg/bg-header.png"
          alt="Gambar"
          className="w-full h-auto"
        />
        <div className="absolute top-4 sm:mt-8 z-10 w-full text-white text-3xl font-bold text-left">
          <Container className="flex flex-wrap">
            <div className="flex items-center w-1/2">
              <div className="max-w-xl xl:mt-40 mb-48 sm:px-4">
                <p
                  className=" hidden sm:block text-sm font-bold leading-snug tracking-tight text-white-800 sm:text-2xl lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white"
                  style={{ wordBreak: "break-word" }}
                >
                  Healthy Food, <br />
                  Cook your own food.
                </p>
                <p
                  className="hidden sm:block py-5 text-sm font-medium leading-normal text-white-500 lg:text-xl xl:text-1xl sm:text-sm dark:text-white-300"
                  style={{ wordBreak: "break-word" }}
                >
                  Kitchen Health merupakan platform yang menyediakan resep masakan sehat sesuai kebutuhanmu. Kami juga menyediakan fitur pembelian bahan masakan yang kamu butuhkan. Selamat menjelajah!
                </p>

                <div className="pt-2 relative mx-auto text-gray-600">
                  <input
                    className="border-2 border-gray-300 bg-white h-16 px-5 w-full rounded-lg text-sm focus:outline-none"
                    type="text"
                    name="search"
                    placeholder="Mau cari resep apa nih?"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onKeyDown={handleSearch}
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-5"
                    onClick={handleSearch}
                  ></button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl ml-12 visual text-left text-black dark:text-black">
            Kamu mau jaga pola makan untuk apa?
          </div>

          <div className="flex flex-wrap justify-center text-center gap-5 mt-10 md:justify-around">
            {data.map((row) => (
              <a key={row.id} href={"/rekomendasi/" + row.name.replace(" ", "_")}>
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
          <div className="text-xl mt-32 ml-12 visual text-left text-black dark:text-black">
            Resep sehat yang mudah di buat
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
