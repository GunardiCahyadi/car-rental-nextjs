import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">Car Rental</h2>
        <h2 className="text-[20px] text-gray-500 pr-20 mt-5">
          Book the car now
        </h2>
        <button className="p-2 mt-5 bg-blue-500 text-white px-4 rounded-full hover:scale-105 transition-all">
          explore cars
        </button>
      </div>
      <div>
        <Image
          src="/hero.png"
          alt="hero"
          width={400}
          height={500}
          className="w-full object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
}
