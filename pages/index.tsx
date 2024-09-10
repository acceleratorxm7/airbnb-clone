import { FilterBox } from "@/components/FilterBox";
import { RoomListBox } from "@/components/Room/RoomListBox";

export default function Home() {
  return (
    <>
      <FilterBox />
      <main className="px-4 md:px-10 lg:px-20">
        <ul className="py-8 grid place-items-center gap-x-5 gap-y-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <RoomListBox />
        </ul>
      </main>
    </>
  );
}
