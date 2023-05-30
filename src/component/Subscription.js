import React from "react";

export default function Subscription() {
  return (
    <div>
      <div className="container mx-auto mb-8 mt-10 border md:w-[1180px] w-[420px] h-full shadow rounded hidden md:block">
        <div className="flex md:flex-row flex-col my-6 ">
          <div className="flex flex-col md:translate-x-20 translate-x-4 md:-translate-y-3 ">
            <div className="font-display2 text-left text-4xl text-black mb-4 mt-4">
              ABONE OL
            </div>
            <div className="font-display text-gray-600 text-xl  ">
              Yeni İçeriklerimizden İlk Siz Haberdar Olun
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:-translate-x-20  ">
            <input
              placeholder="E-Posta"
              className="border w-96 h-14 focus:outline-none md:translate-x-64 translate-x-4 translate-y-7 border-gray-400  placeholder:text-xl placeholder:font-display2"
            ></input>
            <button className="md:translate-x-64 translate-x-1.5 ml-2 md:translate-y-3 border w-32 h-14 bg-green-900 hover:bg-black text-white px-3 py-2 mb-4 md:mt-4 mt-12 shadow rounded font-display2  duration-500">
              Abone Ol
            </button>
          </div>
        </div>
      </div>

      <div>
        <img src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1682161932/mizanplas.net_1_vsb47x.jpg" />
        <img src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1681939472/Paragraf_metniniz_dya9dt.jpg" />
      </div>
    </div>
  );
}
