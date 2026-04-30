import { ArrowUpRight, Zap, Globe, Lock } from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 text-xs text-indigo-400 mb-4">
            Product
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Built for scale,
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              designed for humans
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Powerful enough for enterprise, simple enough for everyone on your
            team to actually use it.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large card — spans 2 cols */}
          <div className="md:col-span-2 group bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 text-xs text-indigo-400 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    Live Updates
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Real-time collaboration
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-md">
                    Work together without friction. See changes as they happen,
                    leave comments inline, and always know what your team is
                    working on — no refreshing required.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-indigo-400 transition-colors" />
              </div>

              {/* Mini mockup */}
              <div className="bg-[#0d0d0d] rounded-xl p-4 border border-[#1f1f1f]">
                <div className="flex items-center gap-3 mb-4">
                  {["#6366f1", "#8b5cf6", "#10b981"].map((color, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <div
                        className="w-6 h-6 rounded-full border-2 border-[#0d0d0d] flex items-center justify-center text-[10px] font-bold text-white"
                        style={{ backgroundColor: color }}
                      >
                        {["A", "B", "C"][i]}
                      </div>
                      <span className="text-white/30 text-xs">
                        {["editing...", "viewing", "commented"][i]}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[90, 65, 80].map((w, i) => (
                    <div
                      key={i}
                      className="h-2 bg-[#1f1f1f] rounded-full overflow-hidden"
                    >
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                        style={{ width: `${w}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Small card — speed */}
          <div className="group bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="inline-flex p-2.5 rounded-xl bg-yellow-500/10 w-fit mb-4">
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Lightning fast
              </h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1">
                Sub-100ms response times globally with our edge network spanning
                35+ regions.
              </p>
              <div className="mt-6 flex items-end gap-1">
                {[30, 70, 45, 90, 65, 80, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-yellow-500/40 group-hover:bg-yellow-500/60 transition-colors"
                    style={{ height: `${h * 0.5}px` }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-white/20">
                <span>99ms avg</span>
                <span>p99</span>
              </div>
            </div>
          </div>

          {/* Small card — global */}
          <div className="group bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="inline-flex p-2.5 rounded-xl bg-emerald-500/10 w-fit mb-4">
                <Globe className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Global reach
              </h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1">
                Deployed in 35 regions. Your users always connect to the nearest
                edge node.
              </p>
              <div className="mt-6 grid grid-cols-5 gap-1">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-sm ${
                      [2, 5, 7, 9, 12, 14, 17, 19].includes(i)
                        ? "bg-emerald-500/60"
                        : "bg-[#1f1f1f]"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-2 text-[10px] text-white/20">35 regions active</p>
            </div>
          </div>

          {/* Small card — security */}
          <div className="md:col-span-2 group bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <div className="inline-flex p-2.5 rounded-xl bg-red-500/10 w-fit mb-4">
                  <Lock className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Security you can trust
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  SOC 2 Type II certified, GDPR compliant, end-to-end encryption,
                  and zero-knowledge architecture means your data stays yours.
                </p>
              </div>
              <div className="flex gap-3 sm:flex-col justify-center sm:justify-start">
                {[
                  { label: "SOC 2 Type II", active: true },
                  { label: "GDPR Compliant", active: true },
                  { label: "ISO 27001", active: true },
                  { label: "HIPAA Ready", active: false },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs border ${
                      badge.active
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                        : "bg-white/5 border-white/10 text-white/30"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        badge.active ? "bg-emerald-400" : "bg-white/20"
                      }`}
                    />
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
