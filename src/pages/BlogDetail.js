import React from "react";
import Navbar from "../component/Navbar";
import Search from "../component/Search";
import blogData from "../api/blog";
import TopFlavors from "../component/TopFlavors";
import { useParams } from "react-router";

export default function BlogDetail() {
  const { title } = useParams();

  const blog = blogData.find((r) => r.title === title);

  // eğer tarif yoksa hata mesajı döndür
  if (!blog) {
    return <div>Maalesef, haber bulunamadı.</div>;
  }

  // Check if longDescription is an array
  const longDescription = Array.isArray(blog.longDescription)
    ? blog.longDescription
    : [blog.longDescription];

  return (
    <div className="flex flex-col">
      <Navbar />
      <Search />
      <div className="flex flex-col lg:flex-row">
        <div className="flex-none lg:w-64 h-full"></div>
        <div className="flex-grow h-full lg:w-1/2 xl:w-2/3">
          <div className="flex flex-col mt-6 ">
            <div className="text-left text-5xl text-green-900 font-display2 mb-8 ml-6">
              {blog.title}
            </div>
            <div className="text-left text-xl text-stone-700 font-display2 mb-8 ml-6">
              {blog.header}
            </div>
            <div className="md:ml-6 md:mx-0 mx-10">
              <img className="shadow " src={blog.img} alt={blog.title} />
            </div>
            <div className="mt-8">
              {longDescription.map((long, index) => (
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
        <div className="flex-none lg:w-72 h-full"></div>
      </div>
      <div className=" mb-8 mx-16">
        <TopFlavors />
      </div>
    </div>
  );
}
