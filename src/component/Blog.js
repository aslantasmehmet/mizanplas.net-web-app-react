import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import newsData from "../api/news";
import blogData from "../api/blog";
import { Link } from "react-router-dom";

export default function Blog() {
  const [news, setNews] = useState([]);
  const [blogs, setBlog] = useState([]);
  const [showMoreBlogs, setShowMoreBlogs] = useState(false);

  useEffect(() => {
    setNews(newsData);
    setBlog(blogData);
  }, []);

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  const displayBlogs = showMoreBlogs ? blogs : blogs.slice(0, 2);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 blog container mx-auto">
      <div>
        <div className="text-3xl text-left font-bold text-green-900 mb-4 font-display2 ml-2">
          Güncel Haberler
        </div>
        <Slider {...settings}>
          {news.map((haber) => (
            <div key={haber.id}>
              <Link to={`/haber/${haber.title}`}>
                <div className="relative">
                  <img className="shadow" src={haber.img} alt={haber.title} />
                  <div className="flex flex-col absolute bottom-0 left-0 w-full md:w-[500px] h-40 bg-black bg-opacity-70 p-2 pl-4">
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
      <div className="md:mt-0 mt-9 md:mb-0 mb-8">
        <div className="text-3xl text-left font-bold text-green-900 mb-4 font-display2 ">
          İşinize Yarayacak Bilgiler{" "}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayBlogs.map((blog) => (
            <div className="flex flex-col" key={blog.id}>
              <Link to={`/blog/${blog.title}`}>
                <div className="border w-full md:w-64 h-56">
                  <img
                    className="w-full h-full"
                    src={blog.img}
                    alt={blog.title}
                  />
                </div>
                <div className="text-left mt-4 font-bold text-green-900 font-display2 text-2xl">
                  {blog.title}
                </div>
                <div className="text-left mt-4 font-semibold text-stone-500 font-display2 text-base">
                  {blog.explanation}
                </div>
              </Link>
            </div>
          ))}

          <div className="flex justify-center">
            <button className="text-green-900 font-semibold hover:text-green-700">
              Daha Fazlasını Gör
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
