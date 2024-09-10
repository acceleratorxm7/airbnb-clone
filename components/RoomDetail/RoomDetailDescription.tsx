import { RoomDetailAmendity } from "./RoomDetailAmendity";
import { RoomDetailHost } from "./RoomDetailHost";
import { RoomDetailPreferredBanner } from "./RoomDetailPreferredBanner";
import { RoomDetailDescriptionHeader } from "./RoomDetailDescriptionHeader";
import { RoomDetailDescriptionContent } from "./RoomDetailDescriptionContent";
import { Room } from "../Room/RoomListBox";

export const RoomDetailDescription: React.FC<{ room: Room }> = ({ room }) => {
  const {
    name,
    extendedName,
    description,
    preferred = false,
    roomSize,
    host,
    amendities,
    averageRating,
    reviews,
  } = room;

  return (
    <>
      <RoomDetailDescriptionHeader
        name={name}
        extendedName={extendedName}
        roomSize={roomSize}
      />
      {preferred && (
        <RoomDetailPreferredBanner
          averageRating={averageRating}
          reviewCount={reviews.length}
        />
      )}
      <div
        id="roomAmendities"
        className="mt-4 py-4 border-t-2 border-gray-300 grid grid-cols-2 gap-y-2"
      >
        {amendities.map((amendity, index) => (
          <RoomDetailAmendity
            key={`roomAmendity${index}`}
            amendity={amendity}
          />
        ))}
      </div>
      <RoomDetailHost
        name={host.name}
        profileImageUrl={
          host.imageUrl ??
          "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
        }
        isSuperHost={host.isSuperHost ?? true}
        hostingDuration={host.duration}
      />
      <RoomDetailDescriptionContent description={description} />
    </>
  );
};
