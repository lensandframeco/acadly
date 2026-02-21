"use client";

import { motion } from "framer-motion";
import {
  Shield, BarChart3, Smartphone, Clock, Lock, LayoutGrid,
  MessageCircle, Hand, FileText, Users, Download, Bell,
  MapPin, Wifi, QrCode, Fingerprint, HelpCircle, PenTool,
  Share2, Monitor, RefreshCw, Upload, ArrowRightLeft, FileCheck,
  ClipboardCheck, Zap, Plug,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import type { Feature } from "@/data/features";

const iconMap: Record<string, React.ElementType> = {
  Shield, BarChart3, Smartphone, Clock, Lock, LayoutGrid,
  MessageCircle, Hand, FileText, Users, Download, Bell,
  MapPin, Wifi, QrCode, Fingerprint, HelpCircle, PenTool,
  Share2, Monitor, RefreshCw, Upload, ArrowRightLeft, FileCheck,
  ClipboardCheck, Zap, Plug,
};

interface FeatureGridProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

export default function FeatureGrid({
  title,
  subtitle,
  features,
}: FeatureGridProps) {
  return (
    <section className="px-6 py-20 md:py-28">
      <Container>
        <AnimateOnScroll>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
              {title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              {subtitle}
            </p>
          </div>
        </AnimateOnScroll>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Shield;
            return (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card hover>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-navy">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
