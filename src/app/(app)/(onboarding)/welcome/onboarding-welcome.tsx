"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CustomButton } from "@/components/CustomButton";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { api } from "@/trpc/react";

interface OnboardingWelcomeProps {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
  };
}

const STEPS = [
  {
    id: 1,
    title: "Welcome",
    description: "Let's get you set up for success",
  },
  {
    id: 2,
    title: "Your Goals",
    description: "What are you building?",
  },
  {
    id: 3,
    title: "Ready to Go",
    description: "You're all set!",
  },
];

export function OnboardingWelcome({ user }: OnboardingWelcomeProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const completeOnboarding = api.user.completeOnboarding.useMutation();

  const handleComplete = async () => {
    setIsLoading(true);
    try {
      await completeOnboarding.mutateAsync({ userId: user.id });
      window.location.href = "/home";
    } catch {
      toast.error("Failed to complete onboarding");
    } finally {
      setIsLoading(false);
    }
  };

  const userName = user.name ?? user.email?.split("@")[0] ?? "there";

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-primary)] p-4">
      <Card className="w-full max-w-lg border-none bg-white shadow-xl dark:bg-[var(--bg-secondary)]">
        <CardContent className="p-8">
          <div className="mb-8 flex items-center justify-center">
            <div className="flex gap-2">
              {STEPS.map((step) => (
                <div
                  key={step.id}
                  className={cn(
                    "h-2 w-16 rounded-full transition-colors",
                    step.id <= currentStep
                      ? "bg-[var(--primary)]"
                      : "bg-[var(--muted)]",
                  )}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center"
              >
                <h1 className="mb-2 text-3xl font-bold text-[var(--foreground)]">
                  Welcome, {userName}!
                </h1>
                <p className="mb-8 text-[var(--text-muted)]">
                  Welcome to Cédric. Let&apos;s get you set up in just a few steps.
                </p>
                <CustomButton
                  onClick={() => setCurrentStep(2)}
                  className="w-full"
                >
                  Get Started
                </CustomButton>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center"
              >
                <h1 className="mb-2 text-3xl font-bold text-[var(--foreground)]">
                  What are you building?
                </h1>
                <p className="mb-8 text-[var(--text-muted)]">
                  Select your primary goal to customize your experience.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "SaaS Product", icon: "🚀" },
                    { label: "Content Platform", icon: "📝" },
                    { label: "E-commerce", icon: "🛒" },
                    { label: "Internal Tool", icon: "🔧" },
                  ].map((goal) => (
                    <button
                      key={goal.label}
                      className="flex flex-col items-center rounded-lg border border-[var(--border)] p-4 transition-all hover:border-[var(--primary)] hover:bg-[var(--accent)]"
                      onClick={() => setCurrentStep(3)}
                    >
                      <span className="mb-2 text-2xl">{goal.icon}</span>
                      <span className="text-sm font-medium text-[var(--foreground)]">
                        {goal.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center"
              >
                <h1 className="mb-2 text-3xl font-bold text-[var(--foreground)]">
                  You&apos;re all set!
                </h1>
                <p className="mb-8 text-[var(--text-muted)]">
                  Start building your product with Cédric.
                </p>
                <CustomButton
                  onClick={handleComplete}
                  loading={isLoading}
                  className="w-full"
                >
                  Go to Dashboard
                </CustomButton>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}