import { currentUser } from "@clerk/nextjs/server";
import { UserData } from "@/types";
import HomePage from "@/components/HomePage";

export default async function Home() {
  const user = await currentUser();
  let userData: UserData = {
    id: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    imageUrl: "",
  };

  if (user) {
    userData = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      emailAddress: user.emailAddresses[0].emailAddress,
      imageUrl: user.imageUrl,
    };
  }

  return <HomePage user={userData} />;
}
