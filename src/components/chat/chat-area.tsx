import useSWR from "swr";
import { useState, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Send } from "lucide-react";
import { sendMessage } from "@/actions/messaging";
import chatbg from "@/assets/chatbg.png";
import Image from "next/image";
import { Messages } from "@prisma/client";

const fetcher = (url: string, userId: string) =>
  fetch(url, {
    headers: {
      "user-id": userId,
    },
  }).then((res) => res.json());

interface ChatAreaProps {
  isMobile: boolean;
  selectedChatId: string | null;
  setSelectedChatId: (id: string | null) => void;
  userId: string;
  chat: Messages | null;
  setChat: (chat: Messages) => void;
}

export function ChatArea({
  isMobile,
  selectedChatId,
  setSelectedChatId,
  userId,
}: ChatAreaProps) {
  const [newMessage, setNewMessage] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const { data: chat, mutate } = useSWR(
    selectedChatId ? [`/api/chat/${selectedChatId}`, userId] : null,
    ([url, userId]) => fetcher(url, userId),
    {
      refreshInterval: 10000,
    },
  );

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [chat?.messages]);

  const handleSendMessage = async () => {
    if (!selectedChatId || !chat) return;
    if (newMessage.trim()) {
      await sendMessage({
        chatId: selectedChatId,
        message: newMessage,
        senderId: userId,
        receiverId: chat.senderId === userId ? chat.receiverId : chat.senderId,
      });
      setNewMessage("");
      mutate();
    }
  };

  if (!selectedChatId) {
    return (
      <div className="hidden flex-grow items-center justify-center bg-background md:flex">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-bold text-muted-foreground">
            Welcome to LegalX
          </h2>
          <p className="text-muted-foreground">
            Select a Lawyer to start messaging
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-background ${isMobile && !selectedChatId ? "hidden" : "flex-grow"} flex flex-col`}
    >
      <div className="flex items-center justify-between border-b bg-primary p-4 text-primary-foreground shadow-md">
        <div className="flex items-center">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick={() => setSelectedChatId(null)}
            >
              <ArrowLeft size={20} />
            </Button>
          )}
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={
                chat?.senderId === userId ? chat?.receiverPic : chat?.senderPic
              }
            />
            <AvatarFallback>
              {chat?.senderId === userId
                ? chat?.receiverName
                : chat?.senderName}
            </AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <h2 className="text-lg font-bold tracking-tight md:text-2xl">
              {chat?.senderId === userId
                ? chat?.receiverName
                : chat?.senderName}
            </h2>
          </div>
        </div>
      </div>
      <div className="relative h-full overflow-x-hidden">
        <Image
          src={chatbg}
          alt="bg"
          className="fixed z-0 w-full opacity-10 invert dark:invert-0"
        />
        <ScrollArea
          className="flex-grow space-y-6 p-2 sm:p-6"
          ref={scrollAreaRef}
        >
          {/* @ts-ignore */}
          {chat?.messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.senderId === userId ? "justify-end" : "justify-start"} animate-slideIn items-end space-x-1 py-1 md:space-x-2`}
            >
              {message.senderId !== userId && (
                <Avatar className="size-8">
                  <AvatarImage
                    src={
                      chat?.senderId === userId
                        ? chat?.receiverPic
                        : chat?.senderPic
                    }
                  />
                  <AvatarFallback>
                    {chat?.senderId === userId
                      ? chat?.receiverName
                      : chat?.senderName}
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[75%] rounded-t-2xl p-3 ${
                  message.senderId === userId
                    ? "rounded-bl-2xl rounded-br-sm bg-primary text-primary-foreground"
                    : "rounded-bl-sm rounded-br-2xl bg-secondary"
                } font-medium shadow-md transition-all duration-200 hover:shadow-lg`}
              >
                <p>{message.message}</p>
                <div className="mt-1 flex items-center justify-end space-x-1">
                  <p className="text-xs text-muted-foreground">
                    {new Date(message.createdAt).toTimeString().slice(0, 5)}
                  </p>
                  <span className="text-xs tracking-[-0.2em] text-rose-500">
                    {"✓✓"}
                  </span>
                </div>
              </div>
              {message.senderId === userId && (
                <Avatar className="size-8">
                  <AvatarImage
                    src={
                      chat?.senderId !== userId
                        ? chat?.receiverPic
                        : chat?.senderPic
                    }
                  />
                  <AvatarFallback>
                    {chat?.senderId !== userId
                      ? chat?.receiverName
                      : chat?.senderName}
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </ScrollArea>
      </div>
      <div className="relative z-10 flex items-center space-x-2 bg-card p-4">
        <Textarea
          placeholder="Type a message"
          className="flex-grow resize-none bg-input transition-colors duration-200"
          rows={1}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        {newMessage ? (
          <Button
            size="icon"
            className="rounded-full bg-yellow-600 text-white transition-colors duration-200 hover:bg-yellow-700"
            onClick={handleSendMessage}
          >
            <Send size={20} />
          </Button>
        ) : null}
      </div>
    </div>
  );
}
