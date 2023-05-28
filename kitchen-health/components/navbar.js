import Link from "next/link";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { useState } from 'react';
import { useRouter } from "next/router";

const Navbar = () => {
  const navigation = [
    "Beranda",
    "Rekomendasi",
    "Komunitas",
    "Tentang Kami",
  ];

  const [searchTerm, setSearchTerm] = useState('');
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

  return (
    <div className="w-full " >
      <nav className="fixed top-0 left-0 right-0 z-50 mb-1 bg-[#ffff] flex flex-wrap items-center justify-between p-2 mx-auto lg:justify-between xl:px-0" style={{ boxShadow: '0px 4px rgba(0, 0, 0, 0.25)' }}>
        {/* Logo  */}
        < Disclosure >
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-17xl font-medium text-[#389E0D] dark:text-gray-100">
                    <span>
                      <Image
                        src="/assets/logo/logo.png"
                        alt=""
                        width="300"
                        height="300"
                        className="w-500 "
                      />
                    </span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-[#389E0D] focus:text-[#389E0D] focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item === 'Beranda' ? '/' : item === 'Rekomendasi' ? '/login' : item === 'Komunitas' ? '/login' : item === 'Tentang Kami' ? '/tentangKami' : `/${item.replace(/\s/g, '').toLowerCase()}`} passHref
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-[#389E0D] focus:text-[#389E0D]   focus:outline-none">
                        <div role="button">{item}</div>
                      </Link>

                    ))}
                    <Link href="/login" className="w-full px-6 py-2 mt-3 text-center text-white  dark:bg-[#389E0D] rounded-md lg:ml-5">
                      Masuk
                    </Link>

                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => {
              const itemPath =
                item === "Beranda"
                  ? "/dashboard"
                  : item === "Rekomendasi"
                    ? "/login"
                    : item === "Komunitas"
                      ? "/login"
                      : item === "Tentang Kami"
                        ? "/tentangKami"
                        : `/${item.replace(/\s/g, "").toLowerCase()}`;

              const isActive = router.pathname === itemPath;

              return (
                <Link key={index} href={itemPath} passHref>
                  <div
                    className={`inline-block py-2 text-lg font-normal no-underline rounded-md focus:bg-indigo-100 focus:outline-none group pr-12 ${isActive ? "text-[#6C894A] text-underline" : "text-black"
                      }`}
                  >
                    {item}
                    <span className="block mx-auto max-w-0 group-hover:max-w-full transition-all duration-500 h-[3px] rounded bg-[#6C894A]"></span>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>

        {/* search */}

        <div className=" mr-2 hidden lg:flex relative mx-auto text-gray-600">
          <input
            className={`border-2 ${isInputFocused ? 'border-[#389E0D]' : 'border-gray-300'} bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none`}
            type="text"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <button type="submit" className="absolute right-0 top-0 mt-2.5 mr-4">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* cart */}
        {/* <div div className="hidden  lg:flex nav__item" >
          <Link href="/cart" className="px-4 py-4 text-white w-16 h-16 rounded-md md:ml-5">
            <img src="/assets/navbar/keranjang.png" />
          </Link>
        </div> */}


        <div className="hidden mr-12 space-x-4  lg:flex nav__item">
          <Link href="/login" className="py-1.5 px-6 bg-[#389E0D] hover:bg-[#298403] border-2 border-[#389E0D] text-white hover:text-neutral-50 rounded-40 transition ease-in-out delay-150  duration-300 rounded-md md:ml-5">
            Masuk
          </Link>
          {/* <ThemeChanger /> */}
        </div>
      </nav >
    </div >

  );
}

export default Navbar;