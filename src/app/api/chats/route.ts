import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const userId = req.headers.get("user-id");
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  try {
    const chats = await db.messages.findMany({
      where: {
        OR: [{ senderId: userId }, { receiverId: userId }],
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(chats);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
