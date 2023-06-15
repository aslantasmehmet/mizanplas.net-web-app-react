import React, { useState } from "react";
import { register } from "../firebase";
import { Toaster } from "react-hot-toast";
import { async } from "@firebase/util";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
  };
  return (
    <div>
      <div className="">
        <div className=" md:w-[550px] w-auto h-auto md:h-[450px] flex flex-col  ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row ">
              <div className="my-4 text-md font-display2 text-left font-semibold translate-x-10 ">
                E-posta
              </div>
              <div className="text-red-500 ml-1 translate-y-2 text-xl translate-x-10">*</div>
            </div>
            <input
              className="border-2 shadow rounded focus:none md:w-80 w-auto h-12 -translate-x-20"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex flex-row">
              <div className="my-4 text-md font-display2 text-left font-semibold translate-x-10">
                Parola
              </div>
              <div className="text-red-500 ml-1 translate-y-2 text-xl translate-x-10">*</div>
            </div>
            <input
              className="border-2 shadow rounded focus:none md:w-80 w-auto h-12 -translate-x-20"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-left mt-4  text-gray-600 font-display2">
              Kişisel verileriniz, bu web sitesindeki deneyiminizi desteklemek,
              hesabınıza erişimi yönetmek ve gizlilik ilkesi açıklanan diğer
              amaçlar için kullanılacaktır.
            </div>
            <div className="flex flex-row mt-6">
              <button
                type="submit"
                className="border w-32 h-12 mb-4 bg-green-900 hover:bg-black text-white px-3 py-2 shadow rounded font-display2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 "
              >
                Üye Ol
              </button>
              <Toaster />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
