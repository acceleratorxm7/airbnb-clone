import React from "react";

export const RoomListSkeleton: React.FC = () => {
  return Array(10)
    .fill(0)
    .map((room, index) => (
      <li key={`roomSkeleton${index}`} className="w-full box-border">
        <figure className="relative aspect-square animate-pulse bg-gray-200" />
        <div className="flex mt-3 justify-between">
          <span className="bg-gray-200 animate-pulse h-[15px] w-[70%]" />
          <span className="bg-gray-200 animate-pulse h-[15px] flex-shrink-0 ml-2 w-[40px]" />
        </div>
        <p className="bg-gray-200 animate-pulse w-[100px] h-[15px] mt-1" />
        <p className="bg-gray-200 animate-pulse w-[80px] h-[15px] mt-1" />
        <p className="bg-gray-200 animate-pulse w-[60px] h-[15px] mt-1" />
      </li>
    ));
};
