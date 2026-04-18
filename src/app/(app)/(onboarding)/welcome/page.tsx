import { redirect } from "next/navigation";
import { auth } from "@/server/auth";
import { getUserOnboardingData } from "@/lib/onboarding";
import { OnboardingWelcome } from "./onboarding-welcome";

export default async function OnboardingPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/signin");
  }

  const onboardingData = await getUserOnboardingData(session.user.id);

  if (onboardingData.onboarded) {
    redirect("/home");
  }

  return <OnboardingWelcome user={session.user} />;
}