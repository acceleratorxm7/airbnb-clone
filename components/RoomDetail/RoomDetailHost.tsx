import Image from "next/image";

export const RoomDetailHost: React.FC<{
  name: string;
  profileImageUrl: string;
  isSuperHost: boolean;
  hostingDuration: string;
}> = ({ name, profileImageUrl, isSuperHost, hostingDuration }) => {
  return (
    <div className="flex flex-row gap-4 items-center py-6 border-t-2 border-gray-300 w-full">
      <figure className="w-10 h-10 relative">
        <Image
          src={profileImageUrl}
          fill
          alt="author image"
          className="object-cover rounded-full"
        />
      </figure>
      <div className="flex flex-col">
        <p className="bold">Hosted by {name}</p>
        <p className="text-sm text-gray-500">
          {isSuperHost ? "Superhost · " : ""}
          {hostingDuration} hosting
        </p>
      </div>
    </div>
  );
};
