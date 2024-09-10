import Image from "next/image";
import React from "react";
import { Room } from "./RoomListBox";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export const RoomBox: React.FC<{ room: Room }> = ({ room }) => {
  return (
    <li className="w-full box-border">
      <Link href={`rooms/${room.id}`}>
        <section>
          <figure className="relative aspect-square">
            <Image
              alt="main image"
              src={room.images[0]}
              fill
              className="object-cover rounded-xl"
            />
            <div className="relative flex flex-row top-4 mx-3 w-100 items-center">
              {room.preferred && (
                <span className="rounded-2xl bg-white text-sm fontthin px-2 py-1 shadow-md border-[1px] border-gray-300 ">
                  Guest favorite
                </span>
              )}
              <FaHeart className="text-xl text-black ml-auto" />
            </div>
          </figure>
          <div className="flex mt-3 justify-between">
            <span className="text-sm font-semibold inline text-ellipsis whitespace-nowrap overflow-hidden">
              {room.name}
            </span>
            <span className="text-sm flex-shrink-0 ml-2">
              ★ {room.averageRating}
            </span>
          </div>
          <p className="text-sm text-gray-500">{room.host.name}</p>
          <p className="text-sm text-gray-500">
            {new Date(room.startDate).toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
            })}
            <span> ~ </span>
            {new Date(room.endDate).toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
            })}
          </p>
          <p className="text-sm text-bold mt-1">
            <span className="text-bold">
              ${room.dailyPrice.toLocaleString("en-US")}
            </span>
            <span> night</span>
          </p>
        </section>
      </Link>
    </li>
  );
};
