import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "Axiom Labs",
    avatar: "SC",
    avatarBg: "bg-indigo-500/80",
    stars: 5,
    text: "FlowSync transformed how our engineering team ships features. We went from 2-week cycles to shipping multiple times per day. The automation alone saved us 20 hours per week.",
  },
  {
    name: "Marcus Williams",
    role: "Head of Product",
    company: "Nexus AI",
    avatar: "MW",
    avatarBg: "bg-violet-500/80",
    stars: 5,
    text: "The analytics dashboard is absolutely incredible. I have visibility into every metric that matters, and the AI-powered insights have helped us identify growth opportunities we never would have found manually.",
  },
  {
    name: "Priya Patel",
    role: "Engineering Lead",
    company: "CloudStack",
    avatar: "PP",
    avatarBg: "bg-emerald-500/80",
    stars: 5,
    text: "We evaluated 5 different platforms before choosing FlowSync. The integration ecosystem is unmatched — we had Slack, GitHub, and our CRM connected within an hour. Outstanding product.",
  },
  {
    name: "James O'Brien",
    role: "CEO",
    company: "Tempo Solutions",
    avatar: "JO",
    avatarBg: "bg-orange-500/80",
    stars: 5,
    text: "As a non-technical founder, I was worried about adopting a new platform. FlowSync's onboarding is exceptional. My team was fully up and running in a single afternoon.",
  },
  {
    name: "Aisha Johnson",
    role: "VP Engineering",
    company: "DataPlex",
    avatar: "AJ",
    avatarBg: "bg-rose-500/80",
    stars: 5,
    text: "The security features gave our compliance team complete peace of mind. SOC 2 certified, GDPR compliant, and the audit logs are exactly what our enterprise customers demand.",
  },
  {
    name: "Tom Nakamura",
    role: "Founder",
    company: "BuildFast",
    avatar: "TN",
    avatarBg: "bg-teal-500/80",
    stars: 5,
    text: "I've been building SaaS products for 10 years and FlowSync is genuinely the best tool in my stack. The ROI was clear within the first month. I recommend it to every founder I meet.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 text-xs text-indigo-400 mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Loved by
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              10,000+ teams
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Don&apos;t take our word for it — hear from the teams who ship faster
            with FlowSync every day.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="break-inside-avoid group bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/40 text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
