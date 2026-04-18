"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { APP_NAME } from "@/config/config";
import LandingSectionTitle from "./LandingSectionTitle";

const faqItems = [
  {
    question: "How does the free trial work?",
    answer: `Start with a 14-day free trial with full access to all features. No credit card required. You can explore everything ${APP_NAME} has to offer before deciding.`,
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. Cancel your subscription at any time with no questions asked. No hidden fees or penalties.",
  },
  {
    question: "Is my data secure?",
    answer: `${APP_NAME} uses bank-level 256-bit encryption and is SOC 2 compliant. We perform regular security audits and follow best practices for data protection.`,
  },
  {
    question: "What support do you offer?",
    answer:
      "All plans include access to our comprehensive documentation and community forums. Pro plans get priority email support, and Enterprise plans include dedicated support with SLAs.",
  },
  {
    question: "Do you offer discounts for annual plans?",
    answer:
      "Yes! Annual plans come with a 20% discount. That's effectively 2 months free when you pay yearly.",
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
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function FAQItem({
  question,
  answer,
  isOpen,
  toggleOpen,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="border-b border-border last:border-0"
    >
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={toggleOpen}
      >
        <span className="font-medium">{question}</span>
        <motion.span
          className="ml-4 flex-shrink-0 text-muted-foreground"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-foreground">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function LandingFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-24">
      <div className="container mx-auto px-4">
        <LandingSectionTitle
          title="Frequently Asked Questions"
          description={`Everything you need to know about ${APP_NAME}.`}
        />

        <motion.div
          className="mx-auto max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}