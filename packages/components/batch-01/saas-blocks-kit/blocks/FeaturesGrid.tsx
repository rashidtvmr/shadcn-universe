import {
  BarChart3,
  Zap,
  Users,
  Shield,
  Plug,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Deep insights into every aspect of your business. Real-time dashboards, custom reports, and predictive analytics to drive smarter decisions.",
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Eliminate repetitive work with powerful workflow automation. Set triggers, conditions, and actions to keep your team focused on what matters.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Real-time collaboration tools that bring your team together. Shared workspaces, live editing, and seamless communication built in.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security for your most sensitive data. SSO, RBAC, audit logs, and SOC2 compliance so you can focus on growing your business.",
    gradient: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-400",
    iconBg: "bg-red-500/10",
  },
  {
    icon: Plug,
    title: "Integrations",
    description:
      "Connect with 200+ tools you already use. Slack, GitHub, Salesforce, HubSpot, and more — all with one-click setup and no code required.",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description:
      "Let AI handle the heavy lifting. Smart suggestions, automated summaries, intelligent routing, and natural language queries across all your data.",
    gradient: "from-indigo-500/20 to-violet-500/20",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 text-xs text-indigo-400 mb-4">
            Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Everything you need
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              to move fast
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            A complete platform built for modern teams who need to ship quickly
            without compromising on quality or security.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-2.5 rounded-xl ${feature.iconBg} mb-4`}
                  >
                    <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
