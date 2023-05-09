import React from "react";
import Container from "./container";

const Card = () => {
    return (
        <Container className="ml-24" >
            <div className="mb-10 text-xl text-left text-black dark:text-black" >
                Rekomendasi resep untukmu
            </div >
             <div className="flex justify-center  left-56 mb-56 ">
                <div className="relative mx-auto w-full">
                    {/* <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">  */}
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm ">
                        <a href="#">
                            <img className="w-full" src="/assets/loginRegisterPage/kentang.png" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-black">Ketang Panggang</h5>
                            </a>
                            <p className="font-normal text-black-700 mb-3 dark:text-[#389E0D]">Rp 18.000</p>
                            <p className="font-normal text-gray-700 mb-3 dark:text-black-400">Kentang memiliki indeks glikemik yang rendah, sehingga bisa menjadi pilihan karbohidrat yang baik untuk penderita ....</p>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
        </Container>
    );
}

export default Card;