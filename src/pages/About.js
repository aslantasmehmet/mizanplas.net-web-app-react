import React from "react";
import Navbar from "../component/Navbar";
import Search from "../component/Search";
import Footer from "../component/Footer";

import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";

export default function About() {
  return (
    <div>
      <Navbar />
      <Search />
      <div className="flex flex-row ">
        <div className="ml-10 mr-10 ">
          <img
            className="rounded shadow "
            src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1681688646/Hakk%C4%B1m%C4%B1zda_amgfvn.jpg"
          />
        </div>
        <div className="font-display text-left container mx-auto text-xl text-green-900 mr-10">
          Mizanplas kelimesi, yemek yapma sürecindeki önemli bir adım olan
          malzemelerin hazırlanması ve düzenlenmesi anlamına gelir. Bu Fransızca
          "mise en place" ifadesinden türetilmiştir. Mizanplas.net web sitesi,
          yemek yapma sürecindeki bu adıma vurgu yaparak, yemek tarifleri,
          alışveriş, bloglar ve kullanıcıların tarif paylaşabileceği bir
          platform sunar. <br /> <br /> Mizanplas.net web sitesi, yemek yapma
          sürecindeki bu adıma vurgu yaparak, yemek tarifleri, alışveriş,
          bloglar ve kullanıcıların tarif paylaşabileceği bir platform sunar. Bu
          platform, yemek yapma sürecini daha kolay ve keyifli hale getirmek
          için tasarlanmıştır. Mizanplas.net'i ziyaret eden herkes, yemek yapma
          sürecindeki ihtiyaç duydukları bilgileri bulabilecekleri gibi
          kullanıcıların da tariflerini paylaşarak topluluk içinde birbirimizle
          bilgi ve deneyimlerimizi paylaşmamıza olanak sağlanmaktadır.Siz de bu
          tutkuya ortak olabilir ve deneyimlerinizi paylaşarak topluluk içinde
          aktif rol alabilirsiniz. Mizanplas.net, yemek yapma tutkunlarını
          aileleri gibi karşılayarak, sıcak bir ortamda buluşmalarına imkan
          sağlar.
          <br /> <br /> Gelin siz de bu sıcak ortama katılın ve Mizanplas.net'in
          sunduğu imkanlardan faydalanarak yemek yapma sürecinde keyifli bir
          deneyim yaşayın.
          <br /> <br />
          Ailemize hoş geldiniz, İyi ki varsınız :)
          <br />
          mizanplas.net
          <br /> <br />
          <div className="flex flex-row ">
            <a href="https://instagram.com">
              <AiFillInstagram
                href=""
                className="mr-4 pb-1 hover:text-orange-300 duration-300"
                size={45}
              />
            </a>
            <a>
              <AiFillTwitterSquare
                className="mr-4 pb-1 hover:text-orange-300 duration-300"
                size={45}
              />
            </a>
            <a>
              <AiFillFacebook
                className="mr-4 pb-1 hover:text-orange-300 duration-300"
                size={45}
              />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
