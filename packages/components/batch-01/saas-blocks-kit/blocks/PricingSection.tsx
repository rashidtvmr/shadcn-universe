"use client";

import { useState } from "react";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 3 projects",
      "5 team members",
      "10GB storage",
      "Basic analytics",
      "Community support",
      "API access",
    ],
    cta: "Get started free",
    popular: false,
    cardClass: "border-[#1f1f1f]",
    ctaClass:
      "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white",
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    annualPrice: 23,
    description: "For growing teams that need more power",
    features: [
      "Unlimited projects",
      "Unlimited team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom workflows",
      "AI features",
    ],
    cta: "Start free trial",
    popular: true,
    cardClass: "border-indigo-500/50",
    ctaClass:
      "bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white shadow-lg shadow-indigo-500/25",
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    annualPrice: 79,
    description: "For large teams with advanced needs",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "SSO / SAML",
      "Advanced security",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
      "White-labeling",
    ],
    cta: "Contact sales",
    popular: false,
    cardClass: "border-[#1f1f1f]",
    ctaClass:
      "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white",
  },
];

export function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 text-xs text-indigo-400 mb-4">
            Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Simple, transparent
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg mb-8">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-[#111111] border border-[#1f1f1f] rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                !annual
                  ? "bg-indigo-500/20 text-indigo-400"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                annual
                  ? "bg-indigo-500/20 text-indigo-400"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              Annual
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-[#111111] border ${plan.cardClass} rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "hover:shadow-indigo-500/10 scale-[1.02]"
                  : "hover:border-indigo-500/20"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Glow for popular */}
              {plan.popular && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
              )}

              <div className="relative z-10">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {plan.name}
                </h3>
                <p className="text-white/40 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-white">
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {(annual ? plan.annualPrice : plan.monthlyPrice) > 0 && (
                      <span className="text-white/40 text-sm mb-1.5">/mo</span>
                    )}
                  </div>
                  {annual &&
                    plan.monthlyPrice > 0 && (
                      <p className="text-white/30 text-xs mt-1">
                        Billed annually (${plan.annualPrice * 12}/yr)
                      </p>
                    )}
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 mb-8 ${plan.ctaClass}`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-indigo-400" />
                      </div>
                      <span className="text-white/60 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/30 text-sm mt-10">
          All plans include a 14-day free trial. No credit card required to get
          started.
        </p>
      </div>
    </section>
  );
}
