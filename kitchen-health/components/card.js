import React, { useState } from "react";
import Container from "./container";

const Card = ({ dishes, searched = false }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const nextStartIndex = startIndex + 4;
    if (nextStartIndex < dishes.length) {
      setStartIndex(nextStartIndex);
    }
  };

  const handlePrevious = () => {
    const previousStartIndex = startIndex - 4;
    if (previousStartIndex >= 0) {
      setStartIndex(previousStartIndex);
    }
  };

  const limitedDishes = dishes.slice(startIndex, startIndex + 4);
  const showNextButton = startIndex + 4 < dishes.length;
  const showPreviousButton = startIndex > 0;
  return (
    <Container>
      {/* <div className="flex flex-wrap  " onLoad={(e)=>(e.target.scrollIntoView({ behavior: "smooth", block: "center" }))}> */}
      <div
        className="flex flex-wrap justify-center  "
        onLoad={
          searched === true
            ? (e) =>
              e.target.scrollIntoView({ behavior: "instant", block: "center" })
            : null
        }
      >
        {limitedDishes.map((dish) => (
          <div
            className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mx-4 my-4"
            key={dish.id}
            style={{ width: "18rem" }}
          >
            <a href={"/resep?dishname=" + dish.title.replace(" ", "_")}>

              <img
                className="w-full relative rounded-tl-lg rounded-tr-lg h-40 object-cover"
                src={dish.prof_img}
                alt=""
              />
            </a>

            <div className="p-5  ">
              <ul className="mb-6">
                <li className="flex justify-between">
                  <span className="text-gray-900 font-bold text-2xl tracking-tight  dark:text-black">
                    {dish.title}
                  </span>
                  {/* masukin waktu masak */}
                  <span className="text-right ml-12 font-normal text-black-700 mb-3 dark:text-[#8C8C8C]">
                    {dish.guide.split(";")[0]}
                  </span>
                </li>
              </ul>
              <p className="font-normal text-black-700 mb-3 dark:text-[#389E0D]">
                {dish.price}
              </p>
              <p className="font-normal text-gray-700 mb-3 w-60 dark:text-black-400">
                {dish.desc.split(" ").slice(0, 8).join(" ")}
                {dish.desc.split(" ").length > 2 ? "..." : ""}
              </p>
              <a
                href={"/resep?dishname=" + dish.title.replace(" ", "_")}
                // className="group inline-flex w-full items-center justify-center rounded-md bg-[#389E0D] px-6 py-4 text-lg font-medium text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#389E0D]"
                className="group inline-flex px-3 py-2 w-44 rounded-lg text-sm items-center   bg-[#389E0D]  font-medium text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#389E0D]"
              // className="text-white bg-[#389E0D]  transition-all duration-200 ease-in-out focus:shadow hover:bg-[#389E0D] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Selengkapnya
                <svg

                  xmlns="http://www.w3.org/2000/svg"

                  className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"

                  fill="none"

                  viewBox="0 0 24 24"

                  stroke="currentColor"

                  strokeWidth="2"

                >
                  <path

                    strokeLinecap="round"

                    strokeLinejoin="round"

                    d="M13 7l5 5m0 0l-5 5m5-5H6"

                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {showPreviousButton && (
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-[#389E0D] rounded-md hover:bg-[#298403]  focus:outline-none mr-2"
            onClick={handlePrevious}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22.75 6.426c0-1.136-.494-2.127-1.271-2.694c-.797-.581-1.871-.686-2.808-.041l-.009.006L13.75 7.29v-.168c0-1.036-.473-1.933-1.204-2.442c-.746-.52-1.745-.613-2.62-.038L2.51 9.52c-.87.572-1.259 1.562-1.259 2.48c0 .918.389 1.908 1.26 2.48l7.417 4.877c.874.575 1.873.482 2.619-.037c.731-.51 1.204-1.407 1.204-2.443v-.167l4.912 3.593l.01.006c.936.645 2.01.54 2.807-.041c.777-.567 1.27-1.557 1.27-2.694V6.426Zm-9 8.425l5.78 4.228c.363.247.738.215 1.065-.023c.349-.255.655-.772.655-1.482V6.426c0-.71-.306-1.227-.655-1.482c-.327-.238-.701-.27-1.065-.023l-5.78 4.228v5.702Zm-3-8.954a.792.792 0 0 1 .938.014c.301.21.562.631.562 1.212v9.754c0 .58-.261 1.003-.562 1.212a.792.792 0 0 1-.937.015l-7.418-4.877c-.358-.236-.583-.695-.583-1.227c0-.531.225-.99.583-1.226l7.418-4.877Z" clip-rule="evenodd" /></svg></button>
        )}
        {showNextButton && (
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-[#389E0D] rounded-md hover:bg-[#298403] focus:outline-none"
            onClick={handleNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M3 6.804v10.392c0 1.54 1.667 2.502 3 1.732l3-1.732V6.804L6 5.072c-1.333-.77-3 .192-3 1.732Zm18 3.464c1.333.77 1.333 2.694 0 3.464l-9 5.196c-1.333.77-3-.192-3-1.732V6.804c0-1.54 1.667-2.502 3-1.732l9 5.196Z" /></svg>
          </button>
        )}
      </div>

    </Container>
  );
};

export default Card;
