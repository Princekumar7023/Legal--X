import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Home } from "lucide-react";
import { UserData } from "@/types";
import ThemeTogglebutton from "../ui/ThemeToggle";
import { Messages } from "@prisma/client";
import Link from "next/link";
import useSWR from "swr";

interface ChatListProps {
  user: UserData;
  isMobile: boolean;
  selectedChatId: string | null;
  setSelectedChatId: (id: string) => void;
  chats: Messages[];
}

const fetcher = (url: string, userId: string) =>
  fetch(url, {
    headers: {
      "user-id": userId,
    },
  }).then((res) => res.json());

export default function ChatList({
  user,
  isMobile,
  selectedChatId,
  setSelectedChatId,
}: ChatListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: chats } = useSWR(
    ["/api/chats", user.id],
    ([url, userId]) => fetcher(url, userId),
    {
      refreshInterval: 10000,
    },
  );

  const filteredChats = (chats || []).filter(
    // @ts-ignore
    (chat) =>
      (chat.senderId === user.id || chat.receiverId === user.id) &&
      chat.senderId !== chat.receiverId,
  );

  return (
    <div
      className={`bg-background ${isMobile && selectedChatId ? "hidden" : "w-full md:w-1/3"} flex flex-col border-r border-border`}
    >
      <div className="flex items-center justify-between bg-primary p-4 text-primary-foreground">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home size={20} />
            </Button>
          </Link>
          <Avatar>
            <AvatarImage src={`${user.imageUrl}`} />
            <AvatarFallback>{user.firstName}</AvatarFallback>
          </Avatar>
        </div>
        <ThemeTogglebutton className="border-none bg-transparent" />
      </div>
      <div className="p-2 py-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
          <Input
            placeholder="Search or start new chat"
            className="bg-input pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <ScrollArea className="flex-grow px-4">
        {/* @ts-ignore */}
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            className={`mb-3 flex cursor-pointer items-center rounded-lg p-3 transition-all duration-200 ${
              selectedChatId === chat.id
                ? "bg-primary/50"
                : "hover:bg-secondary"
            }`}
            onClick={() => setSelectedChatId(chat.chatId)}
          >
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={
                  chat.senderId === user.id ? chat.receiverPic : chat.senderPic
                }
              />
              <AvatarFallback>
                {chat.senderId === user.id
                  ? chat.receiverName
                  : chat.senderName}
              </AvatarFallback>
            </Avatar>
            <div className="ml-3 flex-grow">
              <div className="flex items-baseline justify-between">
                <span className="font-semibold">
                  {chat.senderId === user.id
                    ? chat.receiverName
                    : chat.senderName}
                </span>
              </div>
              <p className="truncate text-sm text-muted-foreground">
                {chat.messages.length > 0
                  ? chat.messages[chat.messages.length - 1].message
                  : "Say Hi!"}
              </p>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
