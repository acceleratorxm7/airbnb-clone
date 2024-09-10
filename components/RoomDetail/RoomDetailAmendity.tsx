import { roomAmendities, RoomAmenditiesKey } from "@/data/roomAmendities";

export const RoomDetailAmendity: React.FC<{
  amendity: RoomAmenditiesKey;
}> = ({ amendity }) => {
  return (
    <div className="flex flex-row gap-1 items-center">
      <span className="text-sm text-gray-500">
        {roomAmendities[amendity].icon}
      </span>
      <span className="text-sm text-gray-500">
        {roomAmendities[amendity].text}
      </span>
    </div>
  );
};
