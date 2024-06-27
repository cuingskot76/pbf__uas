"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Popup from "../components/Popup";
import hero from "../../public/image/hero.png";
import Image from "next/image";

export default function Page() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <Header />
      <main className="flex items-center justify-center min-h-screen py-4 px-40">
        <section className="flex justify-between items-center w-full">
          <div className="flex flex-col items-start w-2/4">
            <h3 className="font-extrabold text-[34px]">
              <span className="flex items-start">Ayo Belajar</span>
              <span className="flex items-start">Membuat Sebuah Aplikasi</span>
            </h3>
            <div>
              Bersama kami, seorang software developer yang suka untuk sharing
              cara membuat aplikasi dalam banyak bahasa pemrograman dan multi
              platform.
            </div>
            <button
              className="bg-white text-black mt-10 px-4 py-3 rounded-full"
              onClick={togglePopup}
            >
              Daftar Sekarang
            </button>
          </div>
          <div className="flex w-2/3">
            <Image src={hero} alt="Learning Illustration" />
          </div>
        </section>
      </main>
      {isPopupVisible && <Popup onClose={togglePopup} />}
    </>
  );
}
