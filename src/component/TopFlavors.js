import React, { useState } from "react";
import recipeData from "../api/recipes";
import { useEffect } from "react";
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function TopFlavors() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(recipeData);
  }, []);
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    prevArrow: (
      <button className="slick-prev">
        <GrPrevious className="mr-2 " color="black" size={20} />
      </button>
    ),
    nextArrow: (
      <button className="slick-next ">
        <GrNext className="text-white" size={20} />
      </button>
    ),
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="container mx-auto mt-8 ">
        <div className="text-green-900 text-3xl font-display2 mb-3 ">En Yeni Lezzetler</div>
      <Slider {...settings}>
        {recipes.map((recipe) => (
          <Link to={`/tarif/${recipe.title}`}>
            <div className="border h-72 shadow">
              <img className="rounded" src={recipe.img} />
              <div className="text-left font-semibold font-display2 text-green-900 text-xl mx-3 my-3 ">
                {recipe.title}
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
