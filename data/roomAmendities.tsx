import { ReactNode } from "react";
import { BiDoorOpen } from "react-icons/bi";
import { BsThermometer, BsTreeFill } from "react-icons/bs";
import { FaHotTub, FaParking, FaSwimmingPool, FaTshirt } from "react-icons/fa";
import {
  FaDumbbell,
  FaFan,
  FaKitchenSet,
  FaMugHot,
  FaPaw,
  FaWifi,
} from "react-icons/fa6";
import { GiClothes, GiFireplace } from "react-icons/gi";
import { PiTelevision } from "react-icons/pi";

export enum RoomAmenditiesKey {
  SELF_CHECKIN = "SELF_CHECKIN",
  HAS_TV = "HAS_TV",
  HAS_KITCHEN = "HAS_KITCHEN",
  HAS_HEATER = "HAS_HEATER",
  IS_TROPICS = "IS_TROPICS",
  HAS_WIFI = "HAS_WIFI",
  FREE_PARKING = "FREE_PARKING",
  PET_FRIENDLY = "PET_FRIENDLY",
  POOL = "POOL",
  AIR_CONDITIONING = "AIR_CONDITIONING",
  FIREPLACE = "FIREPLACE",
  WASHER = "WASHER",
  DRYER = "DRYER",
  COFFEE_MAKER = "COFFEE_MAKER",
  HOT_TUB = "HOT_TUB",
  GYM = "GYM",
}

export const roomAmendities: {
  [key in RoomAmenditiesKey]: { icon: ReactNode; text: string };
} = {
  SELF_CHECKIN: { icon: <BiDoorOpen />, text: "Self Check-in" },
  HAS_TV: { icon: <PiTelevision />, text: "Television" },
  HAS_KITCHEN: { icon: <FaKitchenSet />, text: "Kitchen" },
  HAS_HEATER: { icon: <BsThermometer />, text: "Heater" },
  IS_TROPICS: { icon: <BsTreeFill />, text: "Tropical Location" },
  HAS_WIFI: { icon: <FaWifi />, text: "Wi-Fi" },
  FREE_PARKING: { icon: <FaParking />, text: "Free Parking" },
  PET_FRIENDLY: { icon: <FaPaw />, text: "Pet Friendly" },
  POOL: { icon: <FaSwimmingPool />, text: "Swimming Pool" },
  AIR_CONDITIONING: { icon: <FaFan />, text: "Air Conditioning" },
  FIREPLACE: { icon: <GiFireplace />, text: "Fireplace" },
  WASHER: { icon: <FaTshirt />, text: "Washer" },
  DRYER: { icon: <GiClothes />, text: "Dryer" },
  COFFEE_MAKER: { icon: <FaMugHot />, text: "Coffee Maker" },
  HOT_TUB: { icon: <FaHotTub />, text: "Hot Tub" },
  GYM: { icon: <FaDumbbell />, text: "Gym" },
};
