export const RoomDetailDescriptionHeader: React.FC<{
  name: string;
  extendedName: string;
  roomSize: string;
}> = ({ name, extendedName, roomSize }) => {
  return (
    <div id="description-header">
      <h1 className="block md:hidden text-3xl mb-2">{name}</h1>
      <h3 className="text-sm md:text-2xl mb-1">{extendedName}</h3>
      <p className="text-gray-500 text-sm md:text-base">{roomSize}</p>
    </div>
  );
};
