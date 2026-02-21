"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface Stat {
  value: string;
  label: string;
}

interface StatCounterProps {
  stats: Stat[];
}

export default function StatCounter({ stats }: StatCounterProps) {
  return (
    <section className="border-y border-neutral-100 bg-neutral-50 px-6 py-16">
      <Container>
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-3xl font-bold text-brand-blue md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-neutral-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
