"use client";
import {
  Rocket,
  Shield,
  Zap,
  Users,
  Globe,
  BarChart,
} from "lucide-react";
import { motion } from "framer-motion";
import { APP_NAME } from "@/config/config";
import LandingSectionTitle from "./LandingSectionTitle";

const features = [
  {
    icon: Rocket,
    title: "Lightning Fast",
    description:
      "Optimized for speed with sub-millisecond response times. Your data processes instantly.",
  },
  {
    icon: Shield,
    title: "Secure By Design",
    description:
      "Enterprise-grade encryption, SOC 2 compliant, with regular security audits.",
  },
  {
    icon: Zap,
    title: "AI-Powered",
    description:
      "Intelligent automation that learns your workflow and optimizes automatically.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Real-time collaboration with comments, mentions, and shared workspaces.",
  },
  {
    icon: Globe,
    title: "Global Support",
    description:
      "24/7 support in multiple languages. Help is always just a message away.",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description:
      "Comprehensive insights with actionable recommendations to grow your business.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: typeof Rocket;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
      whileHover={{ y: -4 }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-transform group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}

export default function LandingFeatures() {
  return (
    <section className="w-full py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <LandingSectionTitle
          title={`Why ${APP_NAME}?`}
          description="Built for teams who want to move fast. Every feature designed to boost your productivity."
        />

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}