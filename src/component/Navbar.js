import React from "react";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

export default function Navbar() {
  return (
    <div>
      <div className="w-full h-16 bg-stone-100 hidden md:block">
        <div className="grid gap-4 grid-cols-2">
          <div className="flex flex-row  pt-6 pl-16 font-display text-xs ">
            <div className="pt-0.5">
              <a href="/">ANA SAYFA</a>
            </div>
            <div className="px-8 pt-0.5">
              {" "}
              <a href="/hakkımızda">HAKKIMIZDA</a>{" "}
            </div>
            <div className="pr-8 pt-0.5">
              <a href="/kategoriler">TARİFLER</a>
            </div>
            <div>
              {" "}
              <a
                href="/market"
                className="pr-8  text-green-900 font-semibold text-base "
              >
                {" "}
                MİZANPLAS MARKET
              </a>
            </div>
            <div className="pt-0.5 ">
              <a href="/iletisim">İLETİŞİM</a>
            </div>
          </div>
          <div className="flex flex-row  justify-end pt-5 pr-16">
            <a href="https://instagram.com/mizanplasnet">
              <AiFillInstagram
                className="mr-4 pb-1 hover:text-green-900 duration-300"
                size={30}
              />
            </a>
            <a href="https://twitter.com/mizanplasnet">
              <AiFillTwitterSquare
                className="mr-4 pb-1 hover:text-green-900 duration-300"
                size={30}
              />
            </a>
            <a  href="https://facebook.com/mizanplasnet">
              <AiFillFacebook
                className="mr-4 pb-1 hover:text-green-900 duration-300"
                size={30}
              />
            </a>
            <a href="/iletisim">
              <BsFillEnvelopeFill
                className="mr-4 hover:text-green-900 duration-300m mt-0.5"
                size={23}
              />
            </a>
            <a href="/login">
              <div className="px-4 border bg-green-900 font-normal font-display2 text-white flex flex-row px-2 py-2 -translate-y-3 rounded hover:text-black duraiton-300">
                <CiUser size={25} className=" mr-3" />
                <p >Üye Girişi</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
