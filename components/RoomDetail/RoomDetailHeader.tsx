import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoHeart, IoHeartOutline, IoShareOutline } from "react-icons/io5";

export const RoomDetailHeader: React.FC<{
  name: string;
  description: string;
}> = ({ name, description }) => {
  return (
    <header className="mb-3 px-4 md:px-0">
      <div className="hidden md:flex flex-row justify-between">
        <h1 className="text-[25px]">{name}</h1>
        <div className="flex flex-row gap-6">
          <button className="flex flex-row gap-2 items-center">
            <IoShareOutline />
            <span className="underline">Share</span>
          </button>
          <button className="flex flex-row gap-2 items-center">
            <IoHeartOutline />
            <span className="underline">Save</span>
          </button>
        </div>
      </div>
      <div className="flex md:hidden justify-between">
        <Link href="/">
          <button className="flex flex-row gap-1 text-xl items-center">
            <IoIosArrowBack />
            <span className="text-sm">Homes</span>
          </button>
        </Link>
        <div className="flex flex-row gap-2 items-center">
          <button className="text-xl">
            <IoShareOutline />
          </button>
          <button className="text-xl">
            <IoHeartOutline />
          </button>
        </div>
      </div>
    </header>
  );
};
