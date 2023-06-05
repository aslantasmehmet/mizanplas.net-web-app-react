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
      <div className="flex ...">
        <div className="flex-none w-64 h-full ..."></div>
        <div className="grow h-full ...">
          <div className="flex flex-col mt-6">
            <div className="text-left text-5xl text-green-900 font-display2 mb-8">
              {blog.title}
            </div>
            <div className="text-left text-xl text-stone-700 font-display2 mb-8">
              {blog.header}
            </div>
            <div>
              <img className="shadow" src={blog.img} alt={blog.title} />
            </div>
            <div className="mt-8">
              {longDescription.map((long, index) => (
                <div
                  key={index}
                  className="text-left font-display2 text-stone-700 text-lg mb-4 "
                >
                  {long}
                </div>
              ))}
            </div>
            <div className="mt-6"></div>
          </div>
        </div>
        <div className="flex-none w-72 h-full "></div>
      </div>
      <div className="container mx-auto mb-8">
        <TopFlavors />
      </div>
    </div>
  );
}
