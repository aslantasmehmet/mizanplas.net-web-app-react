import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Search from "../component/Search";
import { useParams } from "react-router";
import newsData from "../api/news";
import TopFlavors from "../component/TopFlavors";

export default function NewsDetail() {
  const { title } = useParams();

  const news = newsData.find((r) => r.title === title);

  // eğer tarif yoksa hata mesajı döndür
  if (!news) {
    return <div>Maalesef, haber bulunamadı.</div>;
  }

  return (
    <div className="flex flex-col">
      <Navbar />
      <Search />

      <div className="flex flex-col md:flex-row">
        <div className="flex-none w-full md:w-64 h-full"></div>
        <div className="flex-grow h-full">
          <div className="flex flex-col mt-6">
            <div className="text-left text-5xl text-green-900 font-display2 mb-8 ml-6">
              {news.title}
            </div>
            <div className="text-left text-xl text-stone-700 font-display2 mb-8 ml-6">
              {news.header}
            </div>
            <div className="md:ml-6 md:mx-0 mx-10">
              <img className="shadow" src={news.img} />
            </div>
            <div className="mt-8">
              {news.longDescription.map((long, index) => (
                <div
                  key={index}
                  className="text-left font-display2 text-stone-700 text-lg mb-4 ml-6"
                >
                  {long}
                </div>
              ))}
            </div>
            <div className="mt-6"></div>
          </div>
        </div>
        <div className="flex-none w-full md:w-72 h-full"></div>
      </div>
      <div className="mx-16 mb-8">
        <TopFlavors />
      </div>
    </div>
  );
}
