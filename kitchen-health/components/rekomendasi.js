import React from "react";
import Container from "./container";

const Card = ({ dishes }) => {
    return (
        <Container >
            <div className="mt-28 ml-5  text-xl text-left text-black dark:text-black" >
                Rekomendasi Resep Untukmu
            </div>
            <div className=" flex flex-wrap  ">
                {dishes.map((dish) => (
                    <div
                        className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mx-4 my-4"
                        key={dish.id}
                    >
                        <a href="#">
                            <img className="w-full h-48" src={dish.prof_img} alt="" />
                        </a>

                        <div className="p-5">
                            <ul className="mb-6">
                                <li >
                                    <span className="text-gray-900 font-bold text-2xl tracking-tight  dark:text-black">
                                        {dish.title}
                                    </span>
                                    <span className="ml-12 font-normal text-black-700 mb-3 dark:text-[#8C8C8C]">
                                        {dish.title}
                                    </span>
                                </li>

                            </ul>
                        
                            <p className="font-normal text-black-700 mb-3 dark:text-[#389E0D]">
                                {dish.price}
                            </p>
                            <p className="font-normal text-gray-700 mb-3 dark:text-black-400">
                                {dish.desc}
                            </p>
                            <a
                                href="#"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Read more
                                <svg
                                    className="-mr-1 ml-2 h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
                {/* </div> */}
            </div>

        </Container>
    );
}

export default Card;