"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { motion } from "framer-motion";
import { APP_NAME } from "@/config/config";
import LandingSectionTitle from "./LandingSectionTitle";

const avatars = ["sarah", "mark", "jessica"].map((seed) =>
  createAvatar(lorelei, {
    seed,
    backgroundColor: ["e8e4dc", "d4cfc4", "ebe7de"],
  }).toDataUri(),
);

const testimonials = [
  {
    avatar: avatars[0] || "",
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: `${APP_NAME} transformed our workflow. Team productivity up 40% in just 2 months. The ROI has been incredible.`,
    stars: 5,
  },
  {
    avatar: avatars[1] || "",
    name: "Mark Thompson",
    role: "Marketing Director",
    content: `Finally, a tool that actually works. Easy to use but powerful enough for enterprise needs. Best decision we made this year.`,
    stars: 5,
  },
  {
    avatar: avatars[2] || "",
    name: "Jessica Williams",
    role: "Product Designer",
    content: "The support team is exceptional. Every update makes the product better. Absolutely worth the investment.",
    stars: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
    </div>
  );
}

export default function LandingTestimonials() {
  return (
    <section className="w-full py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <LandingSectionTitle
          title="Loved by teams everywhere"
          description={`See what our customers have to say about ${APP_NAME}.`}
        />

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg"
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="mb-4 flex-grow text-sm text-muted-foreground italic">
                "{testimonial.content}"
              </p>

              <StarRating count={testimonial.stars} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}