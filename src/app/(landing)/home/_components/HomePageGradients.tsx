"use client";
import { useId } from "react";
import { motion } from "framer-motion";

interface GradientProps {
  className?: string;
  colorClass: string;
}

export function Gradient({ className, colorClass }: GradientProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.4, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`absolute rounded-full bg-gradient-to-br ${colorClass} blur-3xl ${className || ""}`}
    />
  );
}

export default function HomePageGradients() {
  const id = useId();

  const gradients = [
    { className: "top-20 left-[10%] h-64 w-64", colorClass: "from-stone-300 to-stone-400" },
    { className: "top-[30rem] right-[5%] h-80 w-80", colorClass: "from-stone-200 to-amber-200" },
    { className: "top-[60rem] left-[20%] h-64 w-64", colorClass: "from-stone-200 to-stone-300" },
    { className: "top-[90rem] right-[15%] h-56 w-56", colorClass: "from-amber-100 to-stone-200" },
    { className: "top-[120rem] left-[10%] h-72 w-72", colorClass: "from-stone-200 to-stone-300" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {gradients.map((props, index) => (
        <Gradient key={`${id}-${index}`} {...props} />
      ))}
    </div>
  );
}