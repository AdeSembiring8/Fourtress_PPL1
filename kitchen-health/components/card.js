import React from "react";
import Container from "./container";

const Card = ({ dishes }) => {
  const limitedDishes = dishes.slice(0, 4);

  return (
    <Container>
      {/* <div div className="mb-10 text-xl text-left text-black dark:text-black">
        Kamu mau jaga pola makan untuk apa ?
      </div> */}
      <div className="flex flex-wrap  ">
        {dishes.map((dish) => (
          <div
            className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mx-4 my-4"
            key={dish.id}
            style={{ width: "calc(25% - 2rem)" }} // Set the width to 25% minus the horizontal margin
          >
            <a href="#">
              <img
                className="w-full relative rounded-tl-lg rounded-tr-lg h-40 object-cover"
                src={dish.prof_img}
                alt=""
              />
            </a>

            <div className="grid grid-cols-1 gap-2 pt-8 p-8">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-black">
                  {dish.title}
                </h5>
              </a>
              <p className="font-normal text-black-700 mb-3 dark:text-[#389E0D]">
                {dish.price}
              </p>
              <p className="font-normal text-gray-700 mb-3 w-60 dark:text-black-400">
                {dish.desc}
              </p>
              <a
                href="#"
                className="group inline-flex px-3 py-2 w-44 rounded-lg text-sm items-center bg-[#389E0D] font-medium text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#389E0D]"
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
    </Container>
  );
};

export default Card;
