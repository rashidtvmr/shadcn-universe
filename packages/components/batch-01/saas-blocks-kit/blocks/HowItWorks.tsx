import { UserPlus, Settings2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create your workspace",
    description:
      "Sign up in seconds and set up your team workspace. Invite teammates, configure your first project, and connect your existing tools with one-click integrations.",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    numberColor: "text-indigo-500/30",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Configure your workflows",
    description:
      "Use our visual workflow builder to automate your processes. Set up triggers, conditions, and actions without writing a single line of code.",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    numberColor: "text-violet-500/30",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch and scale",
    description:
      "Go live with confidence. Monitor performance in real-time, iterate quickly with instant feedback, and scale to millions of users without changing your stack.",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    numberColor: "text-purple-500/30",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 text-xs text-indigo-400 mb-4">
            How it works
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Up and running
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              in minutes
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Getting started is simple. Three steps and you&apos;re shipping faster
            than ever before.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-12 left-[16.67%] right-[16.67%] h-px hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, #6366f140 20%, #8b5cf640 50%, #a855f740 80%, transparent)",
            }}
          >
            {/* Dots along the line */}
            <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-500/40 -translate-x-1/2" />
            <div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-500/40 -translate-x-1/2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative group">
                  {/* Vertical connector for mobile */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-24 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 to-transparent lg:hidden" />
                  )}

                  <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/5 relative">
                    {/* Number badge */}
                    <div className={`text-6xl font-black ${step.numberColor} absolute top-4 right-6 select-none`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`inline-flex p-3 rounded-xl ${step.iconBg} mb-6 relative z-10`}
                    >
                      <Icon className={`w-6 h-6 ${step.iconColor}`} />
                    </div>

                    <h3 className="text-white text-xl font-bold mb-3 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
