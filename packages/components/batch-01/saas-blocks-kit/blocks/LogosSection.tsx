export function LogosSection() {
  const logos = [
    { name: "Vercel", style: "font-bold tracking-tight text-white/60" },
    { name: "Linear", style: "font-semibold tracking-wide text-white/60" },
    { name: "Stripe", style: "font-bold italic text-white/60" },
    { name: "Notion", style: "font-semibold text-white/60" },
    { name: "Figma", style: "font-bold text-white/60" },
    { name: "Supabase", style: "font-semibold tracking-tight text-white/60" },
  ];

  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-white/30 uppercase tracking-widest mb-10">
          Trusted by teams at
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex items-center justify-center transition-all duration-200"
            >
              <span
                className={`text-2xl transition-all duration-200 group-hover:text-white/90 ${logo.style}`}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
