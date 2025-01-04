"use client";
import { Button } from "./ui/button";
import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { generateRandomId } from "@/lib/utils";
import { existingChat, startChat } from "@/actions/messaging";
import { lawyerDetails } from "@prisma/client";

type SimplifiedUser = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  emailAddress: string;
  imageUrl?: string;
};

const StartChatBtn = ({
  user,
  lawyer,
}: {
  user: SimplifiedUser;
  lawyer: lawyerDetails;
}) => {
  const router = useRouter();
  const initChat = async (lawyer: lawyerDetails) => {
    try {
      if (!user) {
        return router.push("/sign-in");
      }

      const chatId = generateRandomId();
      const existChat = await existingChat({
        userId: user.id,
        lawyerId: lawyer.userId,
      });

      if (existChat) {
        return router.push(`/chat`);
      }

      const init = await startChat({
        chatId,
        userId: user.id,
        userName:
          user.firstName && user.lastName
            ? `${user.firstName} ${user.lastName}`
            : user.emailAddress,
        userPic: user.imageUrl || "",
        lawyerId: lawyer.userId,
        lawyerName: lawyer.name,
        lawyerPic: lawyer.image || "",
      });

      if (init.success) {
        router.push(`/chat`);
      } else {
        console.error("Failed to start chat:", init.error);
      }
    } catch (error) {
      console.error("Chat initialization error:", error);
    }
  };

  return (
    <Button onClick={() => initChat(lawyer)}>
      <MessageSquare className="mr-2 size-4" />
      Chat Now
    </Button>
  );
};

export default StartChatBtn;
