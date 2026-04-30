"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "Start with full access to all Pro features for 14 days — no credit card required. At the end of your trial, choose the plan that fits your team or stay on our generous Free tier. We'll never charge you without your consent.",
  },
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your account settings. Upgrades take effect immediately. Downgrades take effect at the end of your current billing cycle.",
  },
  {
    question: "What integrations are supported?",
    answer:
      "FlowSync integrates with 200+ tools including Slack, GitHub, GitLab, Jira, Linear, Salesforce, HubSpot, Intercom, Zendesk, Stripe, and many more. We also offer a REST API and webhooks for custom integrations.",
  },
  {
    question: "How is my data protected?",
    answer:
      "We take security seriously. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We're SOC 2 Type II certified, GDPR compliant, and undergo regular third-party security audits. Your data is never sold or used for training AI models.",
  },
  {
    question: "Do you offer discounts for startups or non-profits?",
    answer:
      "Yes! We offer a 50% discount for eligible early-stage startups (under 2 years old, under $1M in funding) and non-profit organizations. Contact our sales team with proof of eligibility to apply.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Free plan users get access to our community forums and documentation. Pro users receive priority email support with a 4-hour response SLA. Enterprise customers get a dedicated customer success manager and 24/7 phone and chat support.",
  },
  {
    question: "Can I self-host FlowSync?",
    answer:
      "Self-hosting is available on our Enterprise plan. We provide Docker images and a Kubernetes helm chart, along with comprehensive deployment documentation and dedicated onboarding support from our engineering team.",
  },
  {
    question: "How do I migrate from another platform?",
    answer:
      "We offer free migration assistance for all Pro and Enterprise customers. Our team will help you import your data, recreate your workflows, and ensure a smooth transition with zero downtime. Most migrations complete within 24-48 hours.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 text-xs text-indigo-400 mb-4">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Frequently asked
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="text-white/50 text-lg">
            Everything you need to know about FlowSync. Can&apos;t find the answer
            you&apos;re looking for?{" "}
            <a href="#" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4">
              Chat with our team
            </a>
            .
          </p>
        </div>

        {/* Accordion */}
        <Accordion multiple={false} className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={index}
              className="bg-[#111111] border border-[#1f1f1f] rounded-xl px-6 hover:border-indigo-500/20 transition-colors duration-200 data-[panel-open]:border-indigo-500/30"
            >
              <AccordionTrigger className="text-white/80 hover:text-white text-sm font-medium py-5 hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/50 text-sm leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
