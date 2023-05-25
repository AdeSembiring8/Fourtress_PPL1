import Image from "next/image";
import Container from "./container";
import heroImg from "../public/assets/loginRegisterPage/piring.png";



const Hero = () => {
  return (
    <>
      <div className="relative mt-20">
        <img src="/assets/bg/bg.png" alt="Gambar" className="w-full h-auto" />
        <div className="absolute top-4  z-10 w-full text-white text-3xl font-bold text-left">
          <Container className="flex flex-wrap ">
            <div className="flex items-center w-full lg:w-1/2">
              <div className="max-w-2xl mb-48">
                <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                  Healthy Food,
                  Cook your own food.
                </h1>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-1xl dark:text-gray-300">
                  Kitchen Health merupakan platform yang menyediakan resep masakan sehat sesuai kebutuhanmu. Kami juga menyediakan fitur pembelian bahan masakan yang kamu butuhkan. Selamat menjelajah!
                </p>

                <div className="">
                  <div className="pt-2 relative mx-auto text-gray-600">
                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                      type="" name="" placeholder="Mau cari resep apa nih?" />
                    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                      
                    </button>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex items-center justify-center  lg:w-1/2">
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
            </div>

          </Container>
        </div>
      </div>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-left text-black dark:text-black">
            Kamu mau jaga pola makan untuk apa?
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="">
              <img src="../assets/loginRegisterPage/gerd.png" />

            </div>
            <div className="">
              <img src="../assets/loginRegisterPage/diabetes.png" />
            </div>
            <div className="">
              <img src="../assets/loginRegisterPage/kolestrol.png" />
            </div>
            <div className="">
              <img src="../assets/loginRegisterPage/kanker.png" />
            </div>
            <div className="">
              <img src="../assets/loginRegisterPage/jantung.png" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
          <div>
            Gerd
          </div>
          <div>
            Diabetes
          </div>
          <div>
            kolestrol
          </div>
          <div>
            Kanker
          </div>
          <div>
            Jantung
          </div>
        </div>
        
      </Container>
    </>
  );
}



export default Hero;