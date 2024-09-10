import { FiSearch } from "react-icons/fi";

export const MobileSearchBox: React.FC = () => {
  return (
    <button className="flex flex-row items-center shadow-md border-[1px] border-gray-300 rounded-3xl p-1 grow">
      <div className="p-4">
        <FiSearch className="text-black text-xl" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-sm">Where to?</span>
        <div className="flex flex-row gap-1 text-gray-500 text-sm">
          <span>Anywhere</span>
          <span>•</span>
          <span>Any week</span>
          <span>•</span>
          <span>Any guests</span>
        </div>
      </div>
    </button>
  );
};
