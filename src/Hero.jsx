import React, { useEffect, useRef, useState } from "react";
import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { personal } from "./mock";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const ROTATING_WORDS = ["interfaces", "experiences", "systems", "products"];

const Hero = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const rafRef = useRef(null);

  // Simple typewriter
  useEffect(() => {
    const current = ROTATING_WORDS[wordIdx];
    const speed = deleting ? 55 : 95;
    rafRef.current = setTimeout(() => {
      if (!deleting && typed === current) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && typed === "") {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % ROTATING_WORDS.length);
      } else {
        setTyped(
          deleting
            ? current.substring(0, typed.length - 1)
            : current.substring(0, typed.length + 1)
        );
      }
    }, speed);
    return () => clearTimeout(rafRef.current);
  }, [typed, deleting, wordIdx]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-20 px-6 md:px-10 overflow-hidden"
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Soft accent glow */}
      <div className="absolute -top-40 -right-32 w-[560px] h-[560px] rounded-full opacity-[0.08] pointer-events-none"
           style={{ background: "radial-gradient(circle, #d4ff3a 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-8">
          {/* Status pill */}
          <div
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-[#9c9c98] font-mono mb-8"
            style={{ animation: "fadeUp .8s ease both" }}
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#d4ff3a] opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#d4ff3a]" />
            </span>
            {personal.availability}
          </div>

          <h1
            className="font-display text-[13vw] md:text-[104px] leading-[0.92] tracking-tight text-[#ececea] mb-4"
            style={{ animation: "fadeUp 1s ease .1s both" }}
          >
            {personal.firstName}
            <br />
            <span className="italic text-[#d4ff3a]">{personal.lastName}.</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-[#ececea]/90 max-w-2xl mb-3"
            style={{ animation: "fadeUp 1s ease .25s both" }}
          >
            Building delightful{" "}
            <span className="text-[#d4ff3a] font-medium cursor-blink">{typed}</span>
          </p>
          <p
            className="text-base md:text-lg text-[#9c9c98] max-w-xl mb-10"
            style={{ animation: "fadeUp 1s ease .35s both" }}
          >
            {personal.tagline}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-4 mb-12"
            style={{ animation: "fadeUp 1s ease .45s both" }}
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#d4ff3a] text-[#0a0a0b] font-medium hover:bg-[#c3ee28] transition-colors"
            >
              View my work
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
            <a
              href={personal.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/15 text-[#ececea] hover:border-white/40 hover:bg-white/[0.03] transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Meta row */}
          <div
            className="flex flex-wrap items-center gap-6 text-sm text-[#9c9c98]"
            style={{ animation: "fadeUp 1s ease .6s both" }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {personal.location}
            </div>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <div className="flex items-center gap-3">
              <a href={personal.socials.github} className="hover:text-[#d4ff3a] transition-colors" aria-label="GitHub">
                <AiFillGithub className="w-5 h-5" />
              </a>
              <a href={personal.socials.linkedin} className="hover:text-[#d4ff3a] transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href={personal.socials.twitter} className="hover:text-[#d4ff3a] transition-colors" aria-label="Twitter">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right side — code card */}
        <div
          className="md:col-span-4 hidden md:block"
          style={{ animation: "fadeUp 1s ease .55s both" }}
        >
          <div className="rounded-xl border border-white/10 bg-[#121214]/80 backdrop-blur overflow-hidden shadow-2xl">
            {/* <div className="flex items-center gap-2 px-4 h-9 border-b border-white/5 bg-white/[0.02]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] text-[#6b6b68]">sricharan.tsx</span>
            </div> */}
            {/* <pre className="p-5 font-mono text-[12.5px] leading-relaxed text-[#cfcfcb] whitespace-pre-wrap"> */}
{/* {`const developer =
{
  "status": 200,
  "developer": "Sricharan",
  "skills": ["React", "Next", "TypeScript"],
  "hireable": true
}

export default developer;`} */}
            {/* </pre> */}
            <div className="rounded-xl border border-white/10 bg-[#121214]/80 backdrop-blur overflow-hidden shadow-2xl">
  <div className="flex items-center gap-2 px-4 h-9 border-b border-white/5 bg-white/[0.02]">
    {/* <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" /> */}
    <span className="ml-3 font-mono text-[11px] text-[#6b6b68]">FrontEnd.jsx</span>
  </div>

  <pre className="p-5 font-mono text-[12.5px] leading-relaxed text-[#cfcfcb] whitespace-pre-wrap">
{`const [developer] = useState({
  name: "Sricharan",
  role: "Frontend Developer",
  skills: ["React", "Next.js", "TypeScript"],
  hireable: true
});

<DeveloperProfile
  name={developer.name}
  role={developer.role}
  skills={developer.skills}
  available={developer.hireable}
/>`}
  </pre>
</div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6b6b68] text-xs font-mono tracking-widest hidden md:flex items-center gap-2"
        style={{ animation: "fadeIn 1s ease 1s both" }}
      >
        <span>SCROLL</span>
        <span className="w-10 h-px bg-[#6b6b68]" />
      </div>
    </section>
  );
};

export default Hero;
