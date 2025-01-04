import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ chatId: string }> },
) {
  const userId = req.headers.get("user-id");
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const chat = await db.messages.findUnique({
      where: {
        chatId: (await params).chatId,
      },
    });

    if (!chat) {
      return new NextResponse("Chat not found", { status: 404 });
    }

    // Verify user is part of the chat
    if (chat.senderId !== userId && chat.receiverId !== userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    return NextResponse.json(chat);
  } catch (error) {
    console.error("[CHAT_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
