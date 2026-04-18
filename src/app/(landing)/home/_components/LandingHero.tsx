"use client";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { APP_NAME } from "@/config/config";

const stats = [
  { value: "10x", label: "Faster workflow" },
  { value: "2,000+", label: "Active users" },
  { value: "99.9%", label: "Uptime SLA" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LandingHero() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Now in public beta
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading mb-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
          >
            Ship products faster with{" "}
            <span className="text-primary">{APP_NAME}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground"
          >
            The all-in-one platform that helps teams automate workflows,
            collaborate in real-time, and deliver better results in less time.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/signup"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 font-medium text-offwhite transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 dark:text-primary-foreground"
            >
              <span>Start free trial</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/demo"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-700"
            >
              <Play className="h-4 w-4 fill-current" />
              <span>Watch demo</span>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-semibold md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-16 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="mx-auto rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                dashboard.app.com
              </div>
            </div>
            <div className="relative aspect-[16/10] bg-gradient-to-br from-muted to-card">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Interactive dashboard preview
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}