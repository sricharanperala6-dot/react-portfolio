import React, { useEffect, useRef } from "react";
import { whyHireMe } from "./mock";
import {
  LayoutTemplate,
  Gauge,
  Accessibility,
  Boxes,
  Bug,
  Rocket,
  CheckCircle2,
  ArrowDownRight,
  Sparkles,
} from "lucide-react";

const ICON_MAP = {
  LayoutTemplate,
  Gauge,
  Accessibility,
  Boxes,
  Bug,
  Rocket,
};

const WhyHireMe = () => {
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

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="why-hire-me"
      ref={ref}
      className="relative py-28 px-6 md:px-10 border-t border-white/5"
    >
      <div
        className="absolute -bottom-32 left-1/4 w-[480px] h-[480px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #d4ff3a 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
          <div className="lg:col-span-7">
            <div className="section-label reveal mb-6">
              <span className="font-mono">Why hire me</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight text-[#ececea] reveal">
              Here's what I'll do{" "}
              <span className="italic text-[#d4ff3a]">for you.</span>
            </h2>
          </div>

          <div
            className="lg:col-span-5 reveal"
            style={{ transitionDelay: "100ms" }}
          >
            <p className="text-[#9c9c98] text-base leading-relaxed mb-6">
              When you bring me onto your team or project, here's exactly what
              you can expect me to deliver — from day one to ship day:
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "On-time delivery",
                "Clean code",
                "Clear communication",
                "Bug-free",
                "Future-proof",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.02] text-xs text-[#cfcfcb] font-mono"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#d4ff3a]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyHireMe.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || Sparkles;

            return (
              <div
                key={item.id}
                className="reveal group relative p-7 rounded-xl border border-white/10 bg-[#121214]/60 hover:border-[#d4ff3a]/40 hover:bg-[#121214] transition-all duration-500"
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <span className="absolute top-5 right-5 font-display text-3xl text-[#ececea]/[0.08] group-hover:text-[#d4ff3a]/20 transition-colors">
                  0{item.id}
                </span>

                <div className="w-11 h-11 rounded-md border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-[#d4ff3a]/40 group-hover:bg-[#d4ff3a]/5 transition-colors mb-5">
                  <Icon className="w-5 h-5 text-[#d4ff3a]" />
                </div>

                <h3 className="text-lg font-semibold text-[#ececea] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-[#9c9c98] text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="reveal mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-[#121214] to-[#0e0e10] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ transitionDelay: "200ms" }}
        >
          <div className="max-w-xl">
            <p className="text-[11px] font-mono uppercase tracking-wider text-[#d4ff3a] mb-2">
              Ready to start?
            </p>

            <h3 className="font-display text-3xl md:text-4xl text-[#ececea] leading-tight">
              Let's turn your next idea into a{" "}
              <span className="italic text-[#d4ff3a]">shipped product.</span>
            </h3>
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-md bg-[#d4ff3a] text-[#0a0a0b] font-medium hover:bg-[#c3ee28] transition-colors shrink-0"
          >
            Get in touch
            <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;