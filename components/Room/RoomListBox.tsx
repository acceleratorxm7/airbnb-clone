import axios from "axios";
import React, { useEffect, useState } from "react";
import { RoomBox } from "./RoomBox";
import { RoomListSkeleton } from "./RoomListSkeleton";
import { RoomAmenditiesKey } from "@/data/roomAmendities";

export interface RoomReview {
  author: {
    name: string;
    imageUrl: string;
    description: string;
  };
  rating: number;
  comment: string;
  writtenAt: Date;
}

export interface Room {
  id: number;
  name: string;
  extendedName: string;
  description: string;
  host: {
    name: string;
    imageUrl: string;
    isSuperHost: boolean;
    duration: string;
  };
  amendities: Array<RoomAmenditiesKey>;
  roomSize: string;
  images: string[]; // to-do: images
  preferred: boolean;
  startDate: Date;
  endDate: Date;
  dailyPrice: number;
  averageRating: number;
  reviews: RoomReview[];
}

export const RoomListBox: React.FC = () => {
  const [roomList, setRoomList] = useState<Room[] | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data } = await axios.get<Room[]>(
        "http://localhost:3000/api/rooms"
      );

      setRoomList(data);
    };

    fetchRooms();
  }, []);

  if (!roomList) return <RoomListSkeleton />;

  return roomList.map((room, index) => (
    <RoomBox room={room} key={`room${index}`} />
  ));
};
