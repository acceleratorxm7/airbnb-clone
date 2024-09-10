import { roomLists } from "@/data/roomLists";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const roomId = isNaN(req.query.id as any)
    ? null
    : parseInt(req.query.id as string);

  if (!roomId) return res.status(404).end();

  const room = roomLists.find((room) => room.id == roomId);

  if (!room) return res.status(404).end();

  return res.status(200).json(room);
}
