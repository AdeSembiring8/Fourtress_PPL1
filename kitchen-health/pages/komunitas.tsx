import React from "react";

const GridCards: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full mt-40 mx-24">
        <div className="bg-white border border-gray-200 rounded-lg shadow w-full my-4 p-4">
          <div className=" px-16 py-5 ">
            <div className=" flex justify-between items-center">
              <img src="/assets/Team/ade.png" alt="" className="w-20 h-20 rounded-full" />
              <input className="w-full h-14 mx-6 border border-gray-200 p-3 rounded-lg" type="text" placeholder="Apa yang ingin kamu diskusikan ?" />
              <div className="">
                <button className=" bg-green-500 text-white py-2 px-4 rounded ml-3">Posting </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow w-full my-4 p-4">
          <div className=" px-16 py-5 ">
            <div className=" flex justify-start items-center">
              <img src="/assets/Team/muaz.png" alt="" className=" w-16 h-16 rounded-full" />
              <h1 className=" ml-6 font-semibold"> Muaz Abdul Rohim</h1>
            </div>
            <div className=" ml-20 ">
              <p className=" text-sm text-justify">
                Hey guys, jadi aku mau bahas nih tentang diet sehat yang bisa membantu menjaga diri dari GERD. Apa itu GERD? GERD atau Gastroesophageal Reflux Disease adalah kondisi yang terjadi ketika asam lambung naik ke kerongkongan dan menyebabkan iritasi. Nah, biasanya GERD ini bisa terjadi karena makanan atau minuman yang kita konsumsi. Nah, untuk menghindari GERD, kita bisa mulai dengan menjaga pola makan kita. Pertama-tama, kurangi makanan atau minuman yang bisa memicu GERD, seperti makanan pedas, berlemak, asam, kafein, dan minuman beralkohol. Selain itu, kita juga perlu menghindari makanan atau minuman yang bisa membuat kita terlalu kenyang, terutama sebelum tidur.
                Selain itu, kita juga perlu menambahkan makanan yang sehat ke dalam pola makan kita, seperti buah-buahan, sayuran, dan protein yang rendah lemak. Kita juga perlu mengunyah makanan dengan baik dan tidak terburu-buru saat makan. Kita bisa memperhatikan rasa kenyang saat makan, dan jika sudah merasa kenyang, jangan terus memaksa diri untuk makan lebih banyak.
                Terakhir, jangan lupa untuk tetap aktif bergerak dan menjaga berat badan kita. Kita bisa melakukan olahraga ringan seperti berjalan-jalan atau bersepeda, dan menjaga pola tidur yang teratur.
                Jadi, itu dia sedikit tips dari aku tentang diet sehat yang bisa membantu menjaga diri dari GERD. Semoga bermanfaat ya! Ingat, menjaga kesehatan itu penting untuk menjalani hidup dengan lebih bahagia dan produktif :)
              </p>
            </div>
            <div className=" ml-20 text-sm font-medium text-gray-500 mt-5  text-end">
              <h1 > 26 Mei 2023</h1>
            </div>

            <div className=" flex justify-start items-center mt-5 ">
              <img src="/assets/Team/indah.png" alt="" className=" w-16 h-16 rounded-full" />
              <h1 className=" ml-6 font-semibold"> Indah</h1>
            </div>
            <div className=" ml-20 ">
              <p className=" text-sm text-justify">
                Niseeeeee Info!!!!
              </p>
            </div>
            <div className=" ml-20 text-sm font-medium text-gray-500 mt-5 text-end">
              <h1 > 26 Mei 2023</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GridCards;
