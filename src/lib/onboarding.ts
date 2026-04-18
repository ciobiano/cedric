import { db } from "@/server/db";

export interface OnboardingData {
  onboarded: boolean;
  name: string | null;
  email: string;
}

export async function getUserOnboardingData(
  userId: string,
): Promise<OnboardingData> {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: {
      onboarded: true,
      name: true,
      email: true,
    },
  });

  if (!user) {
    return {
      onboarded: false,
      name: null,
      email: "",
    };
  }

  return {
    onboarded: user.onboarded,
    name: user.name,
    email: user.email,
  };
}

export async function markUserAsOnboarded(userId: string) {
  return db.user.update({
    where: { id: userId },
    data: { onboarded: true },
  });
}