import Image from "next/image";
import GuestPreferred from "../../assets/guest-preferred.png";

export const RoomDetailPreferredBanner: React.FC<{
  reviewCount: number;
  averageRating: number;
}> = ({ reviewCount, averageRating }) => {
  return (
    <div className="mt-5 px-4 py-2 border-gray-300 border-[1px] rounded-xl flex flex-row gap-5">
      <div className="flex-1 md:flex-shrink-0 md:flex-grow flex flex-row items-center">
        <Image
          className="w-auto object-cover h-[50px]"
          alt="guest-preferred"
          src={GuestPreferred}
        />
        <span className="text-sm hidden md:block">
          One of the most loved homes on Airbnb, according to guests
        </span>
      </div>
      <div className="flex-1 md:flex-grow-0 md:flex-shrink-0 flex flex-col items-center justify-center">
        <span>{averageRating}</span>
        <span className="text-xs">★★★★★</span>
      </div>
      <div className="flex-1 md:flex-grow-0 md:flex-shrink-0 flex flex-col items-center justify-center">
        <span>{reviewCount}</span>
        <span className="underline text-xs mt-[-2px]">reviews</span>
      </div>
    </div>
  );
};
