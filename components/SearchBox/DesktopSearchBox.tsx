import { FiSearch } from "react-icons/fi";
import { SearchBoxButton } from "../SearchBoxButton";

export const DesktopSearchBox: React.FC<{ open: boolean }> = ({
  open = false,
}) => {
  return (
    <div className="h-[80px] flex items-center">
      <div
        className={`flex flex-row align-middle w-full
      ${
        open ? "w-full h-[80px]" : "max-w-[350px] h-[50px] justify-center"
      } justify-between rounded-l-full rounded-r-full shadow-md border-[1px] border-gray-300`}
      >
        <SearchBoxButton
          open={open}
          title="Where"
          placeholder="Search destinations"
          closedTitle="Anywhere"
          className={open ? "min-w-[200px]" : "min-w-[90px]"}
        />
        <SearchBoxButton
          open={open}
          title="Check in"
          placeholder="Add dates"
          closedTitle="Any week"
          className={open ? "min-w-[170px]" : "min-w-[90px]"}
        />
        <SearchBoxButton
          open={open}
          title="Check out"
          placeholder="Add dates"
          className={open ? "min-w-[170px]" : ""}
        />
        <SearchBoxButton
          open={open}
          title="Who"
          placeholder="Add guests"
          closedTitle="Any guests"
          className={open ? "min-w-[130px]" : "min-w-[90px]"}
        />
        <div
          className={`self-center bg-red-400 rounded-full mr-2 cursor-pointer ${
            open ? "p-4" : "p-2"
          }`}
        >
          <FiSearch className="text-white" />
        </div>
      </div>
    </div>
  );
};
