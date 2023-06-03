import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import newsData from "../api/news";
import { Link } from "react-router-dom";

export default function Blog() {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      setNews(newsData);
    }, []);
  
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };
  
    return (
      <div className="grid gap-4 grid-cols-2 blog container mx-auto">
        <div>
            <div className="text-3xl text-left font-bold text-green-900 mb-4 font-display2 ml-2">Güncel Haberler</div>
          <Slider {...settings}>
            {news.map((haber) => (
              <div key={haber.id}>
                <Link to={`/haber/${haber.title}`}>
                  <div className="relative">
                    <img className="shadow" src={haber.img} alt={haber.title} />
                    <div className="flex flex-col absolute bottom-0 left-0 w-[500px] h-40 bg-black bg-opacity-70 p-2 pl-4">
                      <div className="text-white font-bold text-left font-display2 text-2xl">
                        {haber.title}
                      </div>
                      <div className="mt-4 font-display text-white text-lg text-left">
                        {haber.explanation}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        <div>
        <div className="text-3xl text-left font-bold text-green-900 mb-4 font-display2 ">İşinize Yarayacak Bilgiler </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border w-64 h-56"></div>
            <div className="border w-64 h-56"></div>
          </div>
        </div>
      </div>
    );
  }
  