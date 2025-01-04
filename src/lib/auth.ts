import { db } from "./db";
import { currentUser } from "@clerk/nextjs/server";

export async function getUserAuth() {
  const user = await currentUser();
  if (!user) {
    return { isAuthenticated: false, isLawyer: false, userId: null };
  }

  const lawyer = await db.lawyerDetails.findFirst({
    where: {
      userId: user.id,
    },
  });

  return {
    isAuthenticated: true,
    isLawyer: !!lawyer,
    userId: user.id,
  };
}
