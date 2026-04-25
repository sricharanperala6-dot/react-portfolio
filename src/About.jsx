import React, { useEffect, useRef } from "react";
import { personal, stats, aboutParagraphs } from "./mock";

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    el.querySelectorAll(".reveal").forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);
  return ref;
};

const About = () => {
  const ref = useReveal();
  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 px-6 md:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-label reveal mb-6">
          <span className="font-mono"> About</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          {/* Headline */}
          <div className="md:col-span-5 reveal">
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight text-[#ececea]">
              A developer who{" "}
              <span className="italic text-[#d4ff3a]">sweats the details.</span>
            </h2>
            <div className="mt-10 p-5 rounded-xl border border-white/10 bg-white/[0.02]">
              <p className="text-xs font-mono uppercase tracking-wider text-[#6b6b68] mb-2">
                Currently
              </p>
              <p className="text-[#ececea] leading-relaxed">
                Senior Frontend Developer at{" "}
                <span className="text-[#d4ff3a]">Aperture Labs</span>. Remote from{" "}
                {personal.location}.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="md:col-span-7 reveal" style={{ transitionDelay: "120ms" }}>
            <div className="space-y-6 text-[#cfcfcb] text-lg leading-relaxed">
              {aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="reveal group"
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-display text-[#ececea] group-hover:text-[#d4ff3a] transition-colors">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-mono uppercase tracking-wider text-[#6b6b68]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
