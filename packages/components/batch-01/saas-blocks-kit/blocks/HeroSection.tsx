"use client";

import { ArrowRight, Sparkles, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-sm text-indigo-400 mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Trusted by 10,000+ teams worldwide</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          The modern platform
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            for every team
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/50 mb-10 leading-relaxed">
          FlowSync brings together everything your team needs — from real-time
          collaboration and smart automation to powerful analytics. Ship faster,
          work smarter.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02]"
          >
            Start for free
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
          >
            <Play className="w-4 h-4 text-indigo-400" />
            Watch demo
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-white/30">
          <span>No credit card required</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Free plan available</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Cancel anytime</span>
        </div>

        {/* App Preview Mockup */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          {/* Glow behind mockup */}
          <div className="absolute -inset-4 bg-indigo-600/20 rounded-2xl blur-2xl" />

          <div className="relative bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1f1f1f] bg-[#0d0d0d]">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4 h-5 bg-[#1f1f1f] rounded-full text-[11px] text-white/20 flex items-center justify-center">
                app.flowsync.io/dashboard
              </div>
            </div>

            {/* App content area */}
            <div className="h-80 sm:h-96 flex flex-col">
              {/* Sidebar + main */}
              <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-48 bg-[#0d0d0d] border-r border-[#1f1f1f] p-4 flex flex-col gap-2 hidden sm:flex">
                  {["Dashboard", "Analytics", "Workflows", "Team", "Settings"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${
                          i === 0
                            ? "bg-indigo-500/20 text-indigo-400"
                            : "text-white/30 hover:text-white/50"
                        }`}
                      >
                        <div
                          className={`w-3 h-3 rounded-sm ${
                            i === 0 ? "bg-indigo-500/60" : "bg-white/10"
                          }`}
                        />
                        {item}
                      </div>
                    )
                  )}
                </div>

                {/* Main content */}
                <div className="flex-1 p-6">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: "Active Users", val: "12,847", up: "+18%" },
                      { label: "Revenue", val: "$84,291", up: "+24%" },
                      { label: "Tasks Done", val: "3,291", up: "+9%" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-[#1a1a1a] border border-[#1f1f1f] rounded-xl p-4"
                      >
                        <div className="text-white/40 text-xs mb-1">
                          {stat.label}
                        </div>
                        <div className="text-white font-semibold text-lg">
                          {stat.val}
                        </div>
                        <div className="text-emerald-400 text-xs mt-1">
                          {stat.up}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <div className="bg-[#1a1a1a] border border-[#1f1f1f] rounded-xl p-4 h-32 flex items-end gap-2">
                    {[40, 65, 50, 80, 60, 90, 75, 85, 70, 95, 80, 100].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-gradient-to-t from-indigo-600 to-violet-500 opacity-80"
                          style={{ height: `${h}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
