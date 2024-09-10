import { ReactNode } from "react";
import { FaChalkboardTeacher, FaHome, FaSkiingNordic } from "react-icons/fa";
import {
  FaCity,
  FaCouch,
  FaSailboat,
  FaTractor,
  FaTree,
  FaUmbrellaBeach,
} from "react-icons/fa6";
import {
  GiAncientRuins,
  GiBarn,
  GiCaveEntrance,
  GiIsland,
  GiWoodCabin,
} from "react-icons/gi";
import { MdLandscape } from "react-icons/md";
import { TbUfo } from "react-icons/tb";

export const RoomCategories: Array<{ icon: ReactNode; title: string }> = [
  { title: "A-frames", icon: <FaHome /> },
  { title: "Beachfront", icon: <FaUmbrellaBeach /> },
  { title: "Amazing views", icon: <MdLandscape /> },
  { title: "Treehouses", icon: <FaTree /> },
  { title: "Cabins", icon: <GiWoodCabin /> },
  { title: "Islands", icon: <GiIsland /> },
  { title: "Countryside", icon: <FaTractor /> },
  { title: "Barns", icon: <GiBarn /> },
  { title: "Caves", icon: <GiCaveEntrance /> },
  { title: "Castles", icon: <FaChalkboardTeacher /> },
  { title: "Ski-in/out", icon: <FaSkiingNordic /> },
  { title: "Tiny homes", icon: <FaCouch /> },
  { title: "OMG!", icon: <TbUfo /> },
  { title: "Historical homes", icon: <GiAncientRuins /> },
  { title: "Iconic cities", icon: <FaCity /> },
  { title: "Boats", icon: <FaSailboat /> },
];
