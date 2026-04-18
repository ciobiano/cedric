"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/config/config";
import LandingSectionTitle from "./LandingSectionTitle";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    price: "Free",
    period: "",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Community support",
      "1GB storage",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing teams that need more power",
    price: "$29",
    period: "/month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom integrations",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function PlanCard({
  name,
  description,
  price,
  period,
  features,
  cta,
  popular,
}: typeof plans[0]) {
  return (
    <motion.div
      variants={itemVariants}
      className={`relative overflow-hidden rounded-xl border bg-card p-8 transition-all hover:shadow-lg ${
        popular
          ? "border-primary shadow-primary/10 shadow-lg"
          : "border-border"
      }`}
      whileHover={{ y: -4 }}
    >
      {popular && (
        <div className="absolute left-0 top-0">
          <div className="rounded-br-lg bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
            Most Popular
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-semibold">{price}</span>
        {period && (
          <span className="text-sm text-muted-foreground">{period}</span>
        )}
      </div>

      <Button
        className={`w-full ${popular ? "" : "variant-outline"}`}
        variant={popular ? "default" : "outline"}
      >
        {cta}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <ul className="mt-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm">
            <Check className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function LandingPricing() {
  return (
    <section id="pricing" className="w-full py-24">
      <div className="container mx-auto px-4">
        <LandingSectionTitle
          title="Simple, transparent pricing"
          description={`Start free. Upgrade when you're ready. No hidden fees.`}
        />

        <motion.div
          className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}