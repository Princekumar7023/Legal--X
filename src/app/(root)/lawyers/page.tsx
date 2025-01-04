import { getLawyers } from "@/actions/lawyer";
import { FeaturedLawyers } from "@/components/featured-lawyers";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function LawyersPage() {
  const { userId } = await auth();
  const lawyers = await getLawyers();
  const user = await currentUser();

  return (
    <div className="min-h-screen bg-background">
      <FeaturedLawyers
        lawyers={lawyers}
        user={{
          id: userId || "",
          firstName: user?.firstName || "",
          lastName: user?.lastName || "",
          emailAddress: user?.emailAddresses[0].emailAddress || "",
          imageUrl: user?.imageUrl || "",
        }}
      />
    </div>
  );
}
