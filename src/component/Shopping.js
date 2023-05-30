import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";
import recipeData from "../api/recipes";

export default function Shopping() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

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
      <div className="container mx-auto  mb-16 shopping">
      <div className="text-green-900 text-semibold text-4xl font-display2 mb-6">Günün Menüsü</div>
        <div>
          <Slider {...settings}>
            {recipes.map((recipe) => (
              <div className="grid grid-rows-4 grid-flow-col gap-4">
                <div>
                  <img src={recipe.img} alt={recipe.title} />
                </div>
                <div className="mt-4 font-display2">{recipe.title}</div>
                <div className="mt-4 font-display2 font-semibold text-xl">
                  {recipe.explanation}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
