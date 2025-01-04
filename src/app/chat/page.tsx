import ChatPage from "@/components/chat/chat-page";
import { UserData } from "@/types";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ChatIdPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const userData: UserData = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    emailAddress: user.emailAddresses[0].emailAddress,
    imageUrl: user.imageUrl,
  };

  return <ChatPage user={userData} />;
}
