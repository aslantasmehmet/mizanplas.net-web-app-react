import React, { useEffect, useState } from "react";
import categoriesData from "../api/categories";
import Navbar from "../component/Navbar";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <div>
        <Navbar/>
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 categories">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
          {categories.map((category) => (
            <div className="flex flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <img
                className="w-32 sm:w-48"
                src={category.img}
                alt={category.name}
              />
              <div className="px-4 py-2 text-left -translate-x-8">
                <div className="font-bold text-md font-display2 text-gray-800">
                  {category.name}
                </div>
                <div className="text-xs text-gray-400">
                  {category.numberOfRecipes} Tarif
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
