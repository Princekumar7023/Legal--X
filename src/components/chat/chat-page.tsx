"use client";

import { ChatArea } from "./chat-area";
import ChatList from "./chat-list";
import { useEffect, useState } from "react";
import { UserData } from "@/types";
import { getChat, getMessages } from "@/actions/messaging";
import { Messages } from "@prisma/client";

export default function ChatPage({ user }: { user: UserData }) {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [chats, setChats] = useState<Messages[]>([]);
  const [chat, setChat] = useState<Messages | null>(null);

  useEffect(() => {
    async function getUserChats() {
      const chats = await getMessages({
        userId: user.id,
      });
      setChats(chats);
    }
    getUserChats();
  }, []);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    async function getUserChats() {
      if (!selectedChatId) return;
      const messages = await getChat({ chatId: selectedChatId });
      setChat(messages);
      console.log(messages);
    }
    getUserChats();
  }, [selectedChatId]);

  return (
    <div className="flex h-screen w-full bg-background">
      <div className="z-10 flex w-full overflow-hidden">
        <ChatList
          user={user}
          isMobile={isMobile}
          selectedChatId={selectedChatId}
          setSelectedChatId={setSelectedChatId}
          chats={chats}
        />
        <ChatArea
          isMobile={isMobile}
          selectedChatId={selectedChatId}
          setSelectedChatId={setSelectedChatId}
          userId={user.id}
          chat={chat}
          setChat={setChat}
        />
      </div>
    </div>
  );
}
