"use client";
import { Suspense } from "react";
import { BsEnvelopeOpenHeart } from "react-icons/bs";
import Link from "next/link";

import NamaTamu from "@/components/nama-tamu";
export default function Home() {
  return (
    <div className="w-full min-h-[100vh] max-h-max bg-[url('/pw1.jpeg')] bg-cover bg-center bg-no-repeat poppins">
      <div className="absolute top-0 left-0 w-full h-full z-30 bg-black/50 flex flex-col justify-center items-center">
        <div className="w-full h-[480px] flex flex-col justify-between items-center">
          <div>
            <h1 className="text-center text-orange-200 playfair text-[1rem]">
              The Wedding Of
            </h1>
            <p className="text-center text-white playfair text-[2.5rem] mt-2">
              Husni & Indah
            </p>
          </div>
          <div>
            <h1 className="text-center text-white text-[.8rem]">
              Kepada Bapak/Ibu/Saudara/I
            </h1>
            <Suspense fallback={<div className="text-white">Loading...</div>}>
              <NamaTamu />
            </Suspense>
            <Link href="/home">
              <button className="w-[180px] h-max py-2.5 cursor-pointer bg-white text-black  mt-4 rounded-tl-2xl rounded-br-2xl flex items-start justify-center gap-2 hover:bg-orange-900 hover:text-white transition-all duration-300">
                <BsEnvelopeOpenHeart size={17} />
                <p className="text-[.8rem]">Buka Undangan</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
