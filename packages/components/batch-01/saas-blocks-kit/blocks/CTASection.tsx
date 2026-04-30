"use client";

import { useState } from "react";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

export function CTASection() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#111111] border border-[#1f1f1f] rounded-3xl overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-violet-600/15 rounded-full blur-[80px]" />
          </div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 text-center py-20 px-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-sm text-indigo-400 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Free to get started
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ready to ship
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                10x faster?
              </span>
            </h2>

            <p className="max-w-xl mx-auto text-white/50 text-lg mb-10">
              Join over 10,000 teams already using FlowSync to automate their
              workflows, collaborate seamlessly, and build better products.
            </p>

            {/* Email form */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-10">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="w-full sm:flex-1 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-indigo-500/50 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-colors duration-200"
              />
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 whitespace-nowrap">
                Get started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/30">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400/60" />
                <span>SOC 2 certified</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400/60" />
                <span>14-day free trial</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-400/60" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
