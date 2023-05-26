import React from "react";

const GridCards: React.FC = () => {
    return (
        <div className="justify-center items-center">
            <img
                src="/assets/makanan/salad.png"
                className="w-full relative rounded-tl-lg rounded-tr-lg h-96 object-cover"
            />

            <div className="flex justify-center items-center">
                <div className="max-w-8xl mt-40 mx-14">
                    <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-full my-4 p-4">
                        <div className=" px-16 py-10 ">
                            <div className=" mb-4 flex justify-between items-center">
                                <h1 className="text-4xl font-bold text-left">Sayur Bayam Jagung</h1>
                                <div className="flex items-center">
                                    <h2 className=" text-2xl font-bold ">Rp 10.000</h2>
                                    <button className=" bg-green-500 text-white py-2 px-4 rounded ml-3"> + Pesan </button>
                                </div>
                            </div>
                            <div className="mb-5 flex justify-start ">
                                <h3 className=" text-xl font-semibold "> Waktu Masak</h3>
                                <h4 className=" text-lg font-light text-right ml-3"> 15 Min</h4>
                                <h3 className=" text-xl font-semibold ml-32"> Kalori</h3>
                                <h4 className=" text-lg font-light ml-3">100 kkal</h4>
                            </div>
                            <p className=" text-lg ">Sayur bayam jagung adalah salah satu makanan yang sehat dan baik untuk dikonsumsi oleh penderita kolesterol tinggi. Bayam dan jagung kaya akan serat, vitamin, mineral, dan antioksidan yang baik untuk kesehatan. Selain itu, sayur bayam jagung biasanya dimasak dengan teknik merebus atau dikukus, sehingga tidak menggunakan banyak minyak dan tidak menambahkan lemak ke dalam makanan. </p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-full my-4 p-4">
                        <div className=" px-16 py-10 ">
                            <div>
                                <h1 className="text-4xl font-bold text-left">Bahan Masakan</h1>
                            </div>
                            <div className="mt-3">
                                <ul className="list-disc px-4 " style={{ columnCount: 2 }}>
                                    <li className=" my-5">1 ikat bayam</li>
                                    <li className=" my-5">1 buah jagung manis</li>
                                    <li className=" my-5">2 siung bawang merah</li>
                                    <li className=" my-5">1 siung bawang putih</li>
                                    <li className=" my-5">Garam secukupnya</li>
                                    <li className=" my-5">Penyedap rasa secukupnya</li>
                                    <li className=" my-5">800 cc air</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-full my-4 p-4">
                        <div className=" px-16 py-10 ">
                            <div>
                                <h1 className="text-4xl font-bold text-left">Alat Memasak</h1>
                            </div>
                            <div className="mt-3">
                                <ul className="list-disc px-4 " style={{ columnCount: 1 }}>
                                    <li className=" my-5">panci</li>
                                    <li className=" my-5">kkompor</li>
                                    <li className=" my-5">Pisau</li>
                                    <li className=" my-5">Talenan</li>
                                    <li className=" my-5">Sendok Sayur</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-full my-4 p-4">
                        <div className=" px-16 py-10 ">
                            <div>
                                <h1 className="text-4xl font-bold text-left">Cara Memasak</h1>
                            </div>
                            <div className="mt-3">
                                <ul className=" list-decimal px-4 " style={{ columnCount: 1 }}>
                                    <li className=" my-5">Petik bayam dan potong jagung sesuai selera. Kemudia cuci bersih. </li>
                                    <li className=" my-5">Panaskan panci berisi air sebanyak 800 cc. </li>
                                    <li className=" my-5">Lalu masukkan jagung, irisan bawang putih, dan bawang merah. Tunggu hingga air mendidih.</li>
                                    <li className=" my-5">Setelah air mendidih, masukkan daun bayam lalu beri garam dan penyedap rasa secukupnya. Tunggu hingga bayam layu dan berubah warma.</li>
                                    <li className=" my-5">Koreksi rasa sayur. Jika sudah matang, sayur siap dihidangkan.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-8xl my-40 mx-14">
                <h1 className="text-2xl font-bold text-left">Resep yang mungkin kamu suka</h1>
            </div>
        </div>
    );
};

export default GridCards;