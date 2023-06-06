import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";
import recipeData from "../api/recipes";
import { Link } from "react-router-dom";

export default function MenuDay() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(recipeData);
  }, []);
  const lastFourRecipes = recipes.slice(-4);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: (
      <button className="slick-prev">
        <GrPrevious className="mr-2 -translate-y-20" color="black" size={20} />
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        <GrNext className="-translate-y-20" color="#000" size={20} />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container mx-auto  md:mb-16 menu-day md:-translate-y-0 -translate-y-20">
        <div className="text-green-900 text-semibold text-4xl font-display2 mb-6">
          Günün Menüsü
        </div>
        <div>
          <Slider {...settings}>
            {lastFourRecipes.map((recipe) => (
              <div className="grid grid-rows-4 grid-flow-col gap-4">
                <div>
                  <img src={recipe.img} alt={recipe.title} />
                </div>
                <div className="grid grid-rows-4 grid-flow-col">
                  <div className="text-center mt-4 font-display2 font-semibold text-2xl">
                    {recipe.title}
                  </div>
                  <div className="text-center font-display2 font-semibold">
                    {recipe.explanation}
                  </div>
                  <div>
                    <Link to={`/tarif/${recipe.title}`}>
                      <button className="border w-32 h-10 bg-green-900 hover:bg-black text-white px-3 py-2 md:mb-4 mt-4 shadow rounded font-display2 duration-500">
                        Detaylı Tarif
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
