import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";

export default function Subscription() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // E-postayı backend'e kaydet
    axios
      .post("http://localhost:8080/api/email/add", { email })
      .then((response) => {
        // Başarılı kaydetme durumunda bildirim ver
        toast.success("Bültene abone olma işlemi başarılı bir şekilde gerçekleşti.");
      })
      .catch((error) => {
        // Kaydetme hatası durumunda bildirim ver
        toast.error("E-posta kaydedilirken bir hata oluştu.");
      });

    // E-posta alanını temizle
    setEmail("");
  };

  return (
    <div>
      <div className="container mx-auto mt-10 mb-10 border-2 border-green-900 rounded md:w-[1180px] w-[420px] h-full shadow hidden md:block">
        <div className="flex md:flex-row flex-col my-6">
          <div className="flex flex-col md:translate-x-20 translate-x-4 md:-translate-y-3">
            <div className="font-display2 text-left text-4xl text-black mb-4 mt-4">
              ABONE OL
            </div>
            <div className="font-display text-gray-600 text-xl">
              Yeni İçeriklerimizden İlk Siz Haberdar Olun
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:-translate-x-20">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="E-Posta"
                className="border w-96 h-14 focus:outline-none md:translate-x-64 translate-x-4 translate-y-3 border-gray-400  placeholder:text-xl placeholder:font-display2"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                type="submit"
                className="md:translate-x-64 translate-x-1.5 ml-2 md:translate-y-3 border w-32 h-14 bg-green-900 hover:bg-black text-white px-3 py-2 mb-4 md:mt-4 mt-12 shadow rounded font-display2 duration-500"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>
        <div className="w-full h-40 bg-green-900 shadow-xl rounded-t-lg flex flex-col grid justfiy-center">
          <div className="font-bold font-display2 text-4xl mt-4 text-white">Bizi Sosyal Medyadan Takip Etmeyi Unutmayın</div>
          <div className="flex flex-row justify-center mt-4">
          <a href="https://instagram.com/mizanplasnet">
            <AiFillInstagram
              className="mr-4 pb-1 text-white  duration-500 ease-in-out transform hover:scale-110"
              size={60}
            />
          </a>
          <a href="https://facebook.com/mizanplasnet">
            <AiFillTwitterSquare
              className="mr-4 pb-1 text-white duration-500 ease-in-out transform hover:scale-110"
              size={60}
            />
          </a>
          <a href="https://twitter.com/mizanplasnet">
            <AiFillFacebook
              className="mr-4 pb-1 text-white  duration-500 ease-in-out transform hover:scale-110"
              size={60}
            />
          </a>
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
