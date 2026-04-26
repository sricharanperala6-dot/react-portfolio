import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "skills", label: "Skills", num: "03" },
  { id: "projects", label: "Projects", num: "04" },
  { id: "experience", label: "Experience", num: "05" },
  { id: "why-hire-me", label: "Hire Me", num: "06" },
  { id: "contact", label: "Contact", num: "07" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll + active section observer
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();

    const sections = NAV_ITEMS.map((i) => document.getElementById(i.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0a0a0b]/75 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="group flex items-center gap-2.5 text-[#ececea] transition-opacity hover:opacity-80"
          aria-label="Home"
        >
          <span className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center bg-white/[0.02] transition-colors group-hover:border-[#d4ff3a]/50">
            <Code2 className="w-4 h-4 text-[#d4ff3a]" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-medium tracking-tight">Sricharan Perala</span>
            <span className="text-[10px] font-mono text-[#9c9c98] uppercase tracking-wider">
              Frontend Developer
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 link-underline ${
                  active === item.id
                    ? "text-[#d4ff3a] active"
                    : "text-[#ececea]/80 hover:text-[#ececea]"
                }`}
              >
                {/* <span className="font-mono text-[10px] text-[#6b6b68] mr-1.5">
                  {item.num}.
                </span> */}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2.5 text-sm font-medium rounded-md bg-[#d4ff3a] text-[#0a0a0b] hover:bg-[#c3ee28] transition-colors duration-300"
          >
            Let's talk
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-[#ececea]"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0b]/95 backdrop-blur-xl border-t border-white/5 animate-[slideDown_.3s_ease]">
          <ul className="flex flex-col py-4 px-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left py-3.5 text-base font-medium flex items-baseline gap-3 border-b border-white/5 ${
                    active === item.id ? "text-[#d4ff3a]" : "text-[#ececea]"
                  }`}
                >
                  <span className="font-mono text-xs text-[#6b6b68]">{item.num}</span>
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-5">
              <button
                onClick={() => scrollTo("contact")}
                className="w-full py-3 text-sm font-medium rounded-md bg-[#d4ff3a] text-[#0a0a0b]"
              >
                Let's talk
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
