import React from "react";

export default function LoginUser() {
  return (
    <div>
      <div className="mx-4">
        <div className="text-3xl font-display2 text-left mb-8">Giriş Yap</div>
        <div className="border-2 md:w-[550px] w-auto h-96 flex flex-col md:pl-20 pl-12 pt-12 ">
          <div className="flex flex-row">
            <div className="my-4 text-md font-display2 text-left font-semibold ">
              Kullanıcı Adı veya E-posta
            </div>
            <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
          </div>
          <input className="border-2 shadow rounded focus:none w-auto md:w-96 h-12 md:mr-0 mr-16" />

          <div className="flex flex-row">
            <div className="my-4 text-md font-display2 text-left font-semibold " >
              Parola
            </div>
            <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
          </div>
          <input className="border-2 shadow rounded focus:none w-auto md:w-96 h-12 md:mr-0 mr-16" type="password"/>

          <div className="flex flex-row mt-6">
            <button className="border w-32 h-12 bg-green-900 hover:bg-black text-white px-3 py-2 shadow rounded font-display2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 ">
              Giriş Yap
            </button>
            <input type="checkbox" required class="checked:bg-green-900 ml-4" />
            <div className="ml-2 pt-2.5">Beni Hatırla</div>
          </div>
          <div className="text-left mt-2 text-gray-600 font-display2">
            Parolanızı mı unuttunuz?
          </div>
        </div>
      </div>
    </div>
  );
}
