import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]">
      <Image src="/logo.png" alt="logo" width={50} height={50} />
      <div className=" hidden md:flex gap-5">
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          <Link href="/" passHref>
            <h2>Home</h2>
          </Link>
        </h2>
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          History
        </h2>
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          Contact Us
        </h2>
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          <Link href="/admin" passHref>
            <h2 className="text-red-500">Go To Admin Panel</h2>
          </Link>
        </h2>
      </div>
      <UserButton />
    </div>
  );
}
