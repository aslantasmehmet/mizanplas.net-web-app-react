import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Search from "../component/Search";
import Register from "../component/Register";
import LoginUser from "../component/LoginUser";

export default function Login() {
  return (
    <div>
      <Navbar />
      <Search />
      <div className="w-full h-0.5 divider bg-gray-600 -translate-y-5 " />
      <div className="text-5xl font-display2 my-10">Hesabım</div>
      <div className="grid gap-12 md:grid-cols-2 grid-cols-1  mb-16 md:ml-16 container">
        {/* ÜYELİK GİRİŞ */}
        <LoginUser />

        {/* ÜYELİK KAYIT */}
        <Register />
      </div>
      <Footer />
    </div>
  );
}
