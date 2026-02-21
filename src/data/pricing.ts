export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individual instructors getting started",
    features: [
      "Up to 3 classes",
      "50 students per class",
      "Basic attendance tracking",
      "Basic analytics",
      "Email support",
    ],
    cta: "Get Started",
    ctaHref: "/sign-up",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For departments and power users",
    features: [
      "Unlimited classes",
      "Unlimited students",
      "Advanced analytics & exports",
      "LMS integrations",
      "Acadly Engage features",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaHref: "/sign-up?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For institutions with campus-wide needs",
    features: [
      "Everything in Pro",
      "SSO / SAML authentication",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
    ctaHref: "/demo",
    highlighted: false,
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const pricingFAQs: FAQ[] = [
  {
    question: "Is there a free trial for the Pro plan?",
    answer:
      "Yes! You can try the Pro plan free for 30 days with no credit card required. At the end of your trial, you can choose to subscribe or downgrade to the Free plan.",
  },
  {
    question: "Can I switch plans at any time?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. If you upgrade, you'll be prorated for the remainder of your billing cycle. Downgrades take effect at the next billing cycle.",
  },
  {
    question: "Do you offer education discounts?",
    answer:
      "Yes, we offer special pricing for educational institutions purchasing campus-wide licenses. Contact our sales team for a custom quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, Amex) and can arrange invoicing for Enterprise plans. We also support purchase orders for institutional buyers.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. Acadly is FERPA-compliant and uses end-to-end encryption. Your data is stored in SOC 2 Type II certified data centers, and we never share student data with third parties.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period, and your data will be available for export for 30 days after cancellation.",
  },
];
