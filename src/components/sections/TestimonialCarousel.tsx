"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  title?: string;
}

export default function TestimonialCarousel({
  testimonials,
  title = "What educators are saying",
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="bg-neutral-50 px-6 py-20 md:py-28">
      <Container width="narrow">
        <AnimateOnScroll>
          <h2 className="mb-12 text-center text-3xl font-bold text-navy md:text-4xl">
            {title}
          </h2>
        </AnimateOnScroll>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <Quote className="mx-auto mb-6 h-8 w-8 text-brand-blue opacity-30" />
              <blockquote className="mb-6 text-lg leading-relaxed text-neutral-700 md:text-xl">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div className="font-semibold text-navy">
                {testimonials[current].name}
              </div>
              <div className="text-sm text-neutral-500">
                {testimonials[current].role},{" "}
                {testimonials[current].institution}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-neutral-200 p-2 text-neutral-400 transition hover:bg-white hover:text-navy"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-6 bg-brand-blue"
                      : "w-2 bg-neutral-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-full border border-neutral-200 p-2 text-neutral-400 transition hover:bg-white hover:text-navy"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
