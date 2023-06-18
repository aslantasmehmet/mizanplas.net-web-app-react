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
      <div>
        <form className="px-6 py-8">
          {" "}
          <div className="flex flex-col ml-2">
            <div className="flex flex-row">
              <div className="my-4 text-md font-display2 text-left font-semibold text-green-900 ml-2 border-bg-stone-100">
                Kullanıcı Adı
              </div>
              <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
            </div>
            <input className="border focus:border-green-900 shadow rounded-full focus:none w-auto md:w-96 h-12 md:mr-0 mr-16" />
          </div>
          <div className="flex flex-col ml-2">
            <div className="flex flex-row">
              <div className="my-4 text-md font-display2 text-left font-semibold text-green-900 ml-2">
                İsim Soyisim
              </div>
              <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
            </div>
            <input className="border focus:border-green-900 shadow rounded-full focus:none w-auto md:w-96 h-12 md:mr-0 mr-16" />
          </div>
          <div className="flex flex-col ml-2">
            <div className="flex flex-row">
              <div className="my-4 text-md font-display2 text-left font-semibold text-green-900 ml-2">
                E-posta
              </div>
              <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
            </div>
            <input className="border focus:border-green-900 shadow rounded-full focus:none w-auto md:w-96 h-12 md:mr-0 mr-16" />
          </div>
          <div className="flex flex-col ml-2">
            <div className="flex flex-row">
              <div className="my-4 text-md font-display2 text-left font-semibold text-green-900 ml-2">
                Parola
              </div>
              <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
            </div>
            <input
              className="border focus:border-green-900 shadow rounded-full focus:none w-auto md:w-96 h-12 md:mr-0 mr-16"
              type="password"
            />
          </div>
          <div className="flex flex-row mt-6">
            <input className="mr-3 -translate-y-2.5 checkbox" type="checkbox" required />

            <div className="text-left">
              <a
                href="/kullanıcı-sozlesmesi"
                className="font-bold font-display2"
              >
                Kullanıcı Sözleşmesini
              </a>{" "}
              ve{" "}
              <a href="/aydınltma-metni" className="font-bold font-display2">
                Üyelik Formu Aydınlatma
              </a>
              <br />{" "}
              <a href="/aydınltma-metni" className="font-bold font-display2">
                Metnini
              </a>{" "}
              okudum, kabul ediyorum.
            </div>
          </div>
          <button className="mt-8 border w-80 h-16 bg-green-900 hover:bg-black text-white px-3 py-2 shadow rounded-full font-display2   duration-500 ">
            Üye Ol
          </button>
        </form>
      </div>
    </div>
  );
}
