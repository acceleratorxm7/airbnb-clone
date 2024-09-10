import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export const RoomDetailDescriptionContent: React.FC<{
  description: string;
}> = ({ description }) => {
  return (
    <div id="descriptionContent" className="py-6 border-t-2 border-gray-300">
      <p className="line-clamp-6 text-ellipsis">{description}</p>
      <button className="mt-2 flex flex-row items-center">
        <span className="underline">Show more</span>
        <IoIosArrowForward />
      </button>
    </div>
  );
};
