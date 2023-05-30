import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Navbar() {
  // DROPDOWN HOOK

  const [showShoppingDropdown, setShowShoppingDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const shoppingDropdownRef = useRef(null);
  const accountDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        shoppingDropdownRef.current &&
        !shoppingDropdownRef.current.contains(event.target)
      ) {
        setShowShoppingDropdown(false);
      }
      if (
        accountDropdownRef.current &&
        !accountDropdownRef.current.contains(event.target)
      ) {
        setShowAccountDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [shoppingDropdownRef, accountDropdownRef]);

  const handleShoppingDropdownClick = () => {
    setShowShoppingDropdown(!showShoppingDropdown);
  };

  const handleAccountDropdownClick = () => {
    setShowAccountDropdown(!showAccountDropdown);
  };

  return (
    <div>
      <div className="w-full h-12 bg-stone-100 hidden md:block">
        {/* NAVİGASYON BUTONLAR */}

        <div className="flex flex-row  pt-4 pl-16 font-display text-xs">
          <div className="pt-0.5">
            <a href="/">ANA SAYFA</a>
          </div>
          <div className="px-8 pt-0.5">TARİFLER & BLOGLAR </div>
          <div className="pr-8 pt-0.5">YAZARLAR</div>
          <a
            href="/market"
            className="pr-8 pt-0.5 text-green-900 font-semibold text-base -translate-y-1"
          >
            {" "}
            MİZANPLAS MARKET
          </a>

          {/* ALIŞVERİŞ DROPDOWN */}
          {/* <div
            className="relative flex items-center pr-10 pb-2.5"
            ref={shoppingDropdownRef}
          >
            <div
              className="cursor-pointer flex flex-row"
              onClick={handleShoppingDropdownClick}
            >
              ALIŞVERİŞ{" "}
              {showShoppingDropdown ? (
                <FiChevronUp className="ml-1 -translate-y-0.25" size={15} />
              ) : (
                <FiChevronDown className="ml-1 -translate-y-0.25" size={15} />
              )}
            </div>
            {showShoppingDropdown && (
              <div className="absolute top-8 left-0 bg-white p-4 shadow-md w-40 h-40">
                <div className="flex flex-col text-left">
                  <a
                    href="#"
                    className="hover:text-gray-800 hover:translate-x-2 duration-300  my-3"
                  >
                    ÖNLÜK
                  </a>
                  <a
                    href="#"
                    className="hover:text-gray-800 hover:translate-x-2 duration-300  mb-3"
                  >
                    ŞAPKA
                  </a>
                  <a
                    href="#"
                    className="hover:text-gray-800 hover:translate-x-2 duration-300  mb-3"
                  >
                    KİTAP
                  </a>
                  <a
                    href="#"
                    className="hover:text-gray-800 hover:translate-x-2 duration-300  mb-3"
                  >
                    BARDAK
                  </a>
                </div>
              </div>
            )}
          </div> */}

          {/* HESABIM DROPDOWN */}

          <div
            className="relative flex items-center pr-10 pb-2.5"
            ref={accountDropdownRef}
          >
            <div
              className="cursor-pointer flex flex-row"
              onClick={handleAccountDropdownClick}
            >
              HESABIM{" "}
              {showAccountDropdown ? (
                <FiChevronUp className="ml-1 -translate-y-0.25" size={15} />
              ) : (
                <FiChevronDown className="ml-1 -translate-y-0.25" size={15} />
              )}
            </div>
            {showAccountDropdown && (
              <div className="absolute top-8 left-0 bg-white p-4 shadow-md w-40 h-32">
                <div className="flex flex-col text-left">
                  <a
                    href="#"
                    className="hover:text-gray-800 hover:translate-x-2 duration-300 my-3"
                  >
                    ALIŞVERİŞ SEPETİM
                  </a>
                  <a
                    href="#"
                    className="hover:text-gray-800 hover:translate-x-2 duration-300  mb-3"
                  >
                    SİPARİŞLERİM
                  </a>
                  <a
                    href="#"
                    className="hover:text-gray-800 hover:translate-x-2 duration-300  mb-3"
                  >
                    ADRESLERİM
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="pt-0.5">İLETİŞİM</div>
          {/* SOSYAL İCON */}
          <div className="flex flex-row translate-x-56 ">
            <a href="https://instagram.com">
              <AiFillInstagram
                href=""
                className="mr-4 pb-1 hover:text-orange-300 duration-300"
                size={28}
              />
            </a>
            <a>
              <AiFillTwitterSquare
                className="mr-4 pb-1 hover:text-orange-300 duration-300"
                size={28}
              />
            </a>
            <a>
              <AiFillFacebook
                className="mr-4 pb-1 hover:text-orange-300 duration-300"
                size={28}
              />
            </a>
            <a>
              <BsFillEnvelopeFill
                className="mr-4 hover:text-orange-300 duration-300m mt-0.5"
                size={21}
              />
            </a>
            <a href="/login">
              <div className="border flex flex-row px-2 py-2 -translate-y-3 rounded-full hover:text-orange-500 hover:border-orange-500 duraiton-500">
              <CiUser size={21}/>
              <p className="mt-1">Giriş Yap/ Üye Ol</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="divide-y w-full h-0.5 bg-gray-300" />
    </div>
  );
}
