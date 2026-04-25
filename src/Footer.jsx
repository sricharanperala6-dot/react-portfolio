import React from "react";
import { personal } from "./mock"
import { ArrowUp, Heart} from "lucide-react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 px-6 md:px-10 pt-14 pb-8 overflow-hidden">
      {/* Big name watermark */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 pb-10 border-b border-white/5">
        <div>
          <h3 className="font-display text-2xl text-[#ececea] mb-2">
            {personal.name}
          </h3>
          <p className="text-sm text-[#9c9c98] max-w-sm">
            Frontend developer crafting interfaces where design and engineering
            meet.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-mono uppercase tracking-wider text-[#6b6b68] mb-4">
            Navigate
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-[#cfcfcb]">
            {["home", "about", "skills", "projects", "experience","why-hire-me","contact"].map(
              (id) => (
                <li key={id}>
                  <button
                    onClick={() =>
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-[#d4ff3a] transition-colors capitalize"
                  >
                      {id === "why-hire-me" ? "Hire Me" : id}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-mono uppercase tracking-wider text-[#6b6b68] mb-4">
            Elsewhere
          </p>
          <div className="flex items-center gap-3">
            <a
              href={personal.socials.github}
              aria-label="GitHub"
              className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-[#9c9c98] hover:text-[#d4ff3a] hover:border-[#d4ff3a]/40 transition-all"
            >
              <AiFillGithub className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.linkedin}
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-[#9c9c98] hover:text-[#d4ff3a] hover:border-[#d4ff3a]/40 transition-all"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.twitter}
              aria-label="Twitter"
              className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-[#9c9c98] hover:text-[#d4ff3a] hover:border-[#d4ff3a]/40 transition-all"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>
          <a
            href={`mailto:${personal.email}`}
            className="mt-4 inline-block text-sm text-[#ececea] hover:text-[#d4ff3a] transition-colors"
          >
            {personal.email}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-[#6b6b68] flex items-center gap-1.5">
          © {new Date().getFullYear()} {personal.name}. Crafted with
          <Heart className="w-3 h-3 text-[#d4ff3a] fill-[#d4ff3a]" />
          and lots of coffee.
        </p>
        <button
          onClick={scrollTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 text-xs font-mono uppercase tracking-wider text-[#9c9c98] hover:text-[#d4ff3a] hover:border-[#d4ff3a]/40 transition-all"
        >
          Back to top
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
