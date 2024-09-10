import { DesktopRoomReserveBox } from "@/components/DesktopRoomReserveBox";
import { ImagePreviewBox } from "@/components/ImagePreviewBox";
import { Room } from "@/components/Room/RoomListBox";
import { RoomDetailDescription } from "@/components/RoomDetail/RoomDetailDescription";
import { RoomDetailHeader } from "@/components/RoomDetail/RoomDetailHeader";
import { RoomReviewHeader } from "@/components/RoomReview/RoomReviewHeader";
import { RoomReviewListBox } from "@/components/RoomReview/RoomReviewListBox";
import axios from "axios";
import { GetServerSideProps } from "next";

export default function RoomDetail({ room }: { room: Room }) {
  return (
    <main className="pt-3 px-0 md:px-10 lg:px-20">
      <RoomDetailHeader name={room.name} description="" />
      <ImagePreviewBox images={room.images} />
      <div className="pt-3 px-4 md:px-0 flex flex-row">
        <div className="md:w-[58.3%] w-full">
          <RoomDetailDescription room={room} />
        </div>
        <div className="relative flex-1 md:block hidden pl-20 pb-6">
          <DesktopRoomReserveBox dailyPrice={room.dailyPrice} />
        </div>
      </div>
      <div className="pb-8 px-4 md:px-0 border-t-2 border-gray-300">
        <RoomReviewHeader
          averageRating={room.averageRating}
          reviewCount={room.reviews.length}
        />
        <RoomReviewListBox reviews={room.reviews} />
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const roomId = params?.id;

  const origin = `${req.headers["x-forwarded-proto"] || "http"}://${
    req.headers.host
  }`;

  const { data } = await axios.get(`${origin}/api/rooms/${roomId}`);

  if (!data) return { notFound: true };

  return { props: { room: data } };
};
