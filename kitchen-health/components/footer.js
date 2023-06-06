import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = [
    "Beranda",
    "Rekomendasi",
    "Komunitas",
  ];
  const legal = ["Tentang Kami", "Profil Saya"];
  return (
    <div className="bg-black">
      <Container>

        <div className=" grid max-w-screen-2xl grid-cols-1 gap-10 pt-8 top-auto   dark:border-trueGray-700 lg:grid-cols-5">
          <div className="flex flex-wrap w-full -mt-2 -ml-8 lg:ml-0">
            {" "}
            <Link href="/"  >
              <Image
                src="/assets/logo/logo.png"
                alt=""
                width="300"
                height="300"
                className="w-full px-4 py-2 text-gray-500 rounded-md"

              />

            </Link>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 focus:text-[#389E0D] ">
                <p>FOURTRESS</p>
                <p>Teknik Informatika</p>
                <p>Universitas Padjadjaran</p>
                <p>Email : fourtress@gmail.com</p>
                <p>Phone : (021) 2212-4702</p>
                <p>Mobile : 0813-1888-4702</p>
              </div>

            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link key={index} href={item === 'Beranda' ? '/' : item === 'Rekomendasi' ? '/rekomendasi' : item === 'Komunitas' ? '/komunitas' : `/${item.replace(/\s/g, '').toLowerCase()}`} passHref
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-[#389E0D] focus:text-[#389E0D] ">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link key={index} href={item === 'Tentang Kami' ? '/tentangKami' : item === 'Profil Saya' ? '/profile' : `/${item.replace(/\s/g, '').toLowerCase()}`} passHref
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-[#389E0D] focus:text-[#389E0D]  focus:outline-none ">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div className="w-40  text-gray-500 rounded-md dark:text-gray-300 ">Hubungi Kami</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://wa.me/6281318884702"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Twitter</span>
                <WhatsApp />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=fourtress@gmail.com"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Gmail</span>
                <Gmail />
              </a>
              <a
                href="https://instagram.com/kitchen_health"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/in/ade-dwi-fatwa-sembiring-561a38207/"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with by{" "}
          <a
            href="https://web3templates.com/"
            target="_blank"
            rel="noopener">
            Fourtress.
          </a>{" "}

        </div>
      </Container>
      {/* Do not remove this */}

    </div>
  );
}

const WhatsApp = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    class="bi bi-whatsapp"
    viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /> </svg>


);

const Gmail = ({ size = 28 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-brand-gmail"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none" stroke-linecap="round" stroke-linejoin="round" id="IconChangeColor">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" id="mainIconPathAttribute"></path> <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" id="mainIconPathAttribute"></path> <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" id="mainIconPathAttribute"></path> <path d="M16 4l-4 4l-4 -4" id="mainIconPathAttribute"></path> <path d="M4 6.5l8 7.5l8 -7.5" id="mainIconPathAttribute"></path> </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

