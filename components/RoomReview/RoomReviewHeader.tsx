import React from "react";

export const RoomReviewHeader: React.FC<{
  averageRating: number;
  reviewCount: number;
}> = ({ averageRating, reviewCount }) => {
  return (
    <div className="flex flex-row py-8 justify-center md:justify-start ">
      <h1 className="text-2xl text-bold">
        ★ {averageRating} · {reviewCount} reviews
      </h1>
    </div>
  );
};
