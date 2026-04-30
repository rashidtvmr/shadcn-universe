import { Zap, GitBranch, AtSign, Globe, Rss } from "lucide-react";

const links = {
  Product: [
    "Features",
    "Integrations",
    "Pricing",
    "Changelog",
    "Roadmap",
    "Security",
  ],
  Company: ["About", "Blog", "Careers", "Press", "Partners", "Contact"],
  Resources: [
    "Documentation",
    "API Reference",
    "Status",
    "Community",
    "Templates",
    "Tutorials",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "DPA",
    "Licenses",
  ],
};

const socials = [
  { icon: AtSign, label: "Twitter / X" },
  { icon: GitBranch, label: "GitHub" },
  { icon: Globe, label: "LinkedIn" },
  { icon: Rss, label: "Blog" },
];

export function FooterSection() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">FlowSync</span>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              The modern platform for teams who want to ship faster, automate
              smarter, and collaborate better.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-200 group"
                  >
                    <Icon className="w-3.5 h-3.5 text-white/40 group-hover:text-white/70 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white/70 text-sm transition-colors duration-150"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1f1f1f] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} FlowSync, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/30 text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
