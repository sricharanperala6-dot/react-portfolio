import React, { useEffect, useRef, useState } from "react";
import { projects } from "./mock";
import { ArrowUpRight, Star  } from "lucide-react";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  const ref = useRef(null);
  const [filter, setFilter] = useState("all");

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
  }, [filter]);

  const filtered =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-28 px-6 md:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="section-label reveal mb-6">
              <span className="font-mono">Projects</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight text-[#ececea] reveal">
              Recent <span className="italic text-[#d4ff3a]">work.</span>
            </h2>
          </div>

          {/* Filter */}
          <div className="inline-flex items-center p-1 rounded-lg border border-white/10 bg-white/[0.02] reveal">
            {["all", "featured"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-all duration-300 ${
                  filter === f
                    ? "bg-[#d4ff3a] text-[#0a0a0b]"
                    : "text-[#9c9c98] hover:text-[#ececea]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.id}
              className="reveal group relative overflow-hidden rounded-xl border border-white/10 bg-[#121214] hover:border-white/25 transition-all duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1d]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/20 to-transparent opacity-90" />
                {p.featured && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#d4ff3a]/95 text-[#0a0a0b] text-[10px] font-mono uppercase tracking-wider">
                    <Star className="w-3 h-3" /> Featured
                  </span>
                )}
                <span className="absolute top-4 right-4 font-mono text-[10px] text-[#ececea]/70 px-2 py-1 rounded-md bg-black/40 backdrop-blur">
                  {p.year}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#ececea] group-hover:text-[#d4ff3a] transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={p.github}
                      className="w-8 h-8 rounded-md border border-white/10 flex items-center justify-center text-[#9c9c98] hover:text-[#ececea] hover:border-white/30 transition-colors"
                      aria-label="GitHub"
                    >
                      <AiFillGithub className="w-4 h-4" />
                    </a>
                    <a
                      href={p.live}
                      className="w-8 h-8 rounded-md border border-white/10 flex items-center justify-center text-[#9c9c98] hover:text-[#d4ff3a] hover:border-[#d4ff3a]/40 transition-colors"
                      aria-label="Live site"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-[#9c9c98] text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono text-[#cfcfcb] border border-white/10 rounded bg-white/[0.02]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
