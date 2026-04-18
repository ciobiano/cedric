"use client";
import { motion } from "framer-motion";

interface LandingSectionTitleProps {
  title: string;
  description: string;
  className?: string;
}

export default function LandingSectionTitle({
  title,
  description,
  className = "",
}: LandingSectionTitleProps) {
  return (
    <motion.div
      className={`mb-12 text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="font-heading mb-3 text-2xl font-semibold md:text-3xl">{title}</h2>
      <p className="mx-auto max-w-xl text-muted-foreground">{description}</p>
    </motion.div>
  );
}
