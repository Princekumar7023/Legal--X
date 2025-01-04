import MyForm from "@/components/OnboardingForm";
import { getUserAuth } from "@/lib/auth";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const onboarding = async () => {
  const user = await currentUser();
  if (!user) {
    return <div>Loading...</div>;
  }

  const { isAuthenticated, isLawyer } = await getUserAuth();

  if (!isAuthenticated) {
    return <div>Not authenticated</div>;
  }

  return <MyForm userId={user.id} isLawyer={isLawyer} />;
};

export default onboarding;
