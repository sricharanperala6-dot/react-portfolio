import { useEffect, useRef } from "react";
import { skills } from "./mock";
import {
  Code2,
  Layers,
  Palette,
  Wrench,
  TestTube2,
  Server,
} from "lucide-react";

const ICONS = [Code2, Layers, Palette, Wrench, TestTube2, Server];

const Skills = () => {
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
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28 px-6 md:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="section-label reveal mb-6">
              <span className="font-mono">Skills</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight text-[#ececea] reveal">
              Technology <span className="italic text-[#d4ff3a]">Stack.</span>
            </h2>
          </div>
          <p className="max-w-md text-[#9c9c98] text-base reveal" style={{ transitionDelay: "120ms" }}>
            A practical stack I use across responsive products, enterprise
            dashboards, mobile apps, API integrations, and production UI flows.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((group, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={group.category}
                className="reveal group relative p-6 rounded-xl border border-white/10 bg-[#121214]/60 hover:border-[#d4ff3a]/40 hover:bg-[#121214] transition-all duration-500"
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-md border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-[#d4ff3a]/40 group-hover:bg-[#d4ff3a]/5 transition-colors">
                    <Icon className="w-4 h-4 text-[#d4ff3a]" />
                  </div>
                  <span className="font-mono text-[10px] text-[#6b6b68]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#ececea] mb-4">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.02] text-xs text-[#cfcfcb] font-mono hover:border-white/20 hover:text-[#d4ff3a] transition-colors cursor-default"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
