import { roomLists } from "@/data/roomLists";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(roomLists);
  } else {
    res.status(404).end();
  }
}
