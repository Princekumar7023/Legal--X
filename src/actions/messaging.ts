"use server";

import { db } from "@/lib/db";

export async function getChat({ chatId }: { chatId: string }) {
  console.log("chatId", chatId);
  const chat = await db.messages.findUnique({
    where: { chatId: chatId },
  });

  return chat;
}

export async function startChat({
  chatId,
  userId,
  userName,
  userPic,
  lawyerId,
  lawyerName,
  lawyerPic,
}: {
  chatId: string;
  userId: string;
  userName: string;
  userPic: string;
  lawyerId: string;
  lawyerName: string;
  lawyerPic: string;
}) {
  try {
    const chat = await db.messages.create({
      data: {
        chatId,
        senderId: userId,
        senderName: userName,
        senderPic: userPic,
        receiverId: lawyerId,
        receiverName: lawyerName,
        receiverPic: lawyerPic,
        messages: [],
      },
    });

    if (!chat) {
      throw new Error("Failed to create chat");
    }

    return { success: true, data: chat };
  } catch (error) {
    console.error("Error starting chat:", error);
    return { success: false, error: "Failed to start chat" };
  }
}

export async function sendMessage({
  chatId,
  message,
  senderId,
  receiverId,
}: {
  chatId: string;
  message: string;
  senderId: string;
  receiverId: string;
}) {
  try {
    const chat = await db.messages.findUnique({
      where: { chatId: chatId },
    });

    const newMessage = await db.messages.update({
      where: { chatId: chatId },
      data: {
        messages: {
          push: {
            message: message,
            senderId: senderId,
            receiverId: receiverId,
          },
        },
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending message:", error);
    return { success: false, error: "Failed to send message" };
  }
}

export async function getMessages({ userId }: { userId: string }) {
  const messages = await db.messages.findMany({
    where: {
      OR: [{ senderId: userId }, { receiverId: userId }],
    },
  });

  return messages;
}

export async function getChatMessages({ chatId }: { chatId: string }) {
  try {
    const messages = await db.messages.findUnique({
      where: { chatId: chatId },
    });

    return { success: true, data: messages };
  } catch (error) {
    console.error("Error getting messages:", error);
    return { success: false, error: "Failed to get messages" };
  }
}

export async function existingChat({
  userId,
  lawyerId,
}: {
  userId: string;
  lawyerId: string;
}) {
  const chat = await db.messages.findFirst({
    where: {
      AND: [
        { senderId: userId, receiverId: lawyerId },
        { senderId: lawyerId, receiverId: userId },
      ],
    },
  });

  return chat;
}
