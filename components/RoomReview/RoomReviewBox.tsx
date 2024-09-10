import Image from "next/image";
import { RoomReview } from "../Room/RoomListBox";

export const RoomReviewBox: React.FC<{ review: RoomReview }> = ({ review }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-4">
        <figure className="w-14 h-14 relative">
          <Image
            src={review.author.imageUrl}
            fill
            alt="author image"
            className="object-cover rounded-full"
          />
        </figure>
        <div className="flex flex-col justify-center">
          <p className="text-sm">{review.author.name}</p>
          <p className="text-sm text-gray-500">{review.author.description}</p>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-2">
        <p className="text-xs">
          {"★".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
        </p>
        <p className="text-xs text-bold">
          {new Date(review.writtenAt).toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
          })}
        </p>
      </div>
      <p className="mt-2 text-sm line-clamp-3 text-ellipsis">
        {review.comment}
      </p>
      <button className="mt-2 flex flex-row items-center underline">
        Show more
      </button>
    </div>
  );
};
