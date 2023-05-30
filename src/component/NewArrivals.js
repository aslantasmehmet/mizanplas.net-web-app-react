import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import recipeData from "../api/recipes";

export default function NewArrivals() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 640, // screens smaller than 640px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full container mx-auto new-arrivals">
      <div className="text-green-900 text-semibold text-4xl font-display2 mb-6">En Yeni Tarifler</div>
      <Slider {...settings} className="slick-slider">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="slick-slide">
            <div className="border w-full h-full rounded shadow-lg">
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
                  <button className="border w-32 h-10 bg-green-900 hover:bg-black text-white px-3 py-2 mb-4 mt-4 shadow rounded font-display2 duration-500">
                    Detaylı Tarif
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
