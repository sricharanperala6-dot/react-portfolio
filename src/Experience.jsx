import { useEffect, useRef } from "react";
import { experience } from "./mock";
import { Briefcase, MapPin } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-28 px-6 md:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="section-label reveal mb-6">
            <span className="font-mono">Experience</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight text-[#ececea] reveal">
            Career <span className="italic text-[#d4ff3a]">Timeline.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-white/15 via-white/10 to-transparent" />

          <ol className="space-y-12">
            {experience.map((exp, i) => (
              <li
                key={exp.id}
                className="reveal relative pl-10 md:pl-16"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[23px] md:h-[23px] rounded-full border border-[#d4ff3a]/50 bg-[#0a0a0b] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#d4ff3a]" />
                </div>

                <div className="group rounded-xl border border-white/10 bg-[#121214]/60 p-6 md:p-7 hover:border-white/25 hover:bg-[#121214] transition-all duration-500">
                  {/* Top row */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-mono text-[11px] uppercase tracking-wider bg-[#d4ff3a]/10 text-[#d4ff3a] border border-[#d4ff3a]/30">
                      <Briefcase className="w-3 h-3" />
                      {exp.type}
                    </span>
                    <span className="font-mono text-[11px] text-[#6b6b68] uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#6b6b68]">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-[#ececea]">
                    {exp.role}
                    <span className="text-[#9c9c98] font-normal"> · </span>
                    <span className="text-[#d4ff3a] font-medium">{exp.company}</span>
                  </h3>

                  <ul className="mt-4 space-y-2.5">
                    {exp.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex gap-3 text-[#cfcfcb] text-[15px] leading-relaxed"
                      >
                        <span className="text-[#d4ff3a] mt-2 w-1 h-1 rounded-full bg-[#d4ff3a] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <li
                        key={s}
                        className="px-2 py-0.5 text-[11px] font-mono text-[#9c9c98] border border-white/10 rounded"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
