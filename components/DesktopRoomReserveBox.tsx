import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export const DesktopRoomReserveBox: React.FC<{ dailyPrice: number }> = ({
  dailyPrice,
}) => {
  return (
    <div className="sticky top-[80px] flex flex-col rounded-xl border-2 border-gray-200 shadow-md p-4">
      <h1 className="text-md">
        <span className="text-bold text-xl">${dailyPrice}</span> night
      </h1>
      <div className="mt-4 rounded-md border-2 border-gray-300">
        <div className="flex flex-row">
          <div className="flex-1 flex flex-col p-2 cursor-pointer border-r-2 border-gray-300">
            <div className="text-xs">CHECK-IN</div>
            <div className="text-gray-500 text-xs">Add Date</div>
          </div>
          <div className="flex-1 flex flex-col p-2 cursor-pointer">
            <div className="text-xs">CHECKOUT</div>
            <div className="text-gray-500 text-xs">Add Date</div>
          </div>
        </div>
        <div className="flex flex-row items-center border-t-2 border-gray-300">
          <div className="flex-1 p-2">
            <h1 className="text-xs">Guests</h1>
            <p className="text-xs">1 guest</p>
          </div>
          <span className="p-2 text-xl">
            <IoIosArrowDown />
          </span>
        </div>
      </div>
      <button className="mt-2 bg-red-500 text-white py-3 rounded-md">
        Check Availability
      </button>
    </div>
  );
};
