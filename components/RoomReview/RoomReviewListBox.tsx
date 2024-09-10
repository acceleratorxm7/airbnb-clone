import { RoomReview } from "../Room/RoomListBox";
import { RoomReviewBox } from "./RoomReviewBox";

export const RoomReviewListBox: React.FC<{ reviews: RoomReview[] }> = ({
  reviews,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8">
      {reviews.map((review, index) => (
        <RoomReviewBox key={`roomReview${index}`} review={review} />
      ))}
    </div>
  );
};
