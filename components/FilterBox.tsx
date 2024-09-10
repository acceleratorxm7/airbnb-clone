import { RoomCategories } from "@/data/roomCategories";
import React from "react";

export const FilterBox: React.FC = () => {
  return (
    <div className="sticky top-[60px] md:top-[80px] px-4 md:px-10 lg:px-20 z-10 bg-white">
      <div className="mt-3 flex flex-row border-t-[1px] border-gray-300 pt-3 gap-[45px] overflow-x-auto no-scrollbar">
        {RoomCategories.map((content, index) => {
          return (
            <div
              key={`filter${index}`}
              className="flex-shrink-0 flex flex-col p-2 items-center"
            >
              <div className="text-xl">{content.icon}</div>
              <span className="text-xs tracking-tighter text-gray-500 mt-2">
                {content.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
