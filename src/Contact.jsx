import { useEffect, useRef, useState } from "react";
import { personal } from "./mock";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Send, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email & message.");
      return;
    }

    setSubmitting(true);

    try {
      await emailjs.send(
        "service_k23yql8",     // EmailJS service id
        "template_pqxsilp",    // EmailJS template id
       {
    name: `${form.name} (${form.email})`, // Name + Email together
    title: `${form.subject} (${form.message})`,                    // Subject in title field
  },
        "PKHU7RtqOExf7gie0"      // EmailJS public key
      );

      toast.success("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message.");
    }

    setSubmitting(false);
  };

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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 px-6 md:px-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="section-label reveal mb-6">
              <span className="font-mono">Contact</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight text-[#ececea] reveal mb-6">
              Let’s create scalable products{" "}
              <span className="italic text-[#d4ff3a]">together.</span>
            </h2>
            <p className="text-[#9c9c98] text-lg leading-relaxed mb-10 reveal" style={{ transitionDelay: "100ms" }}>
              If you have a role to discuss, a project opportunity, or would like to connect, feel free to reach out. I typically respond within 24 hours
            </p>

            <div className="space-y-4 reveal" style={{ transitionDelay: "180ms" }}>
              <a href={`mailto:${personal.email}`} className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-[#d4ff3a]/40 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
                <span className="w-10 h-10 rounded-md bg-[#d4ff3a]/10 border border-[#d4ff3a]/30 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#d4ff3a]" />
                </span>
                <div className="flex-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#6b6b68]">Email</p>
                  <p className="text-[#ececea] text-sm">{personal.email}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6b6b68] group-hover:text-[#d4ff3a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="w-10 h-10 rounded-md bg-white/[0.03] border border-white/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#9c9c98]" />
                </span>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#6b6b68]">Phone</p>
                  <p className="text-[#ececea] text-sm">{personal.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <span className="w-10 h-10 rounded-md bg-white/[0.03] border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#9c9c98]" />
                </span>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#6b6b68]">Location</p>
                  <p className="text-[#ececea] text-sm">{personal.location}</p>
                </div>
              </div>
            </div>

            {/* <div className="mt-8 flex items-center gap-3 reveal" style={{ transitionDelay: "260ms" }}>
              {[
                { icon: AiFillGithub, href: personal.socials.github, label: "GitHub" },
                { icon: FaLinkedin, href: personal.socials.linkedin, label: "LinkedIn" },
                { icon: FaTwitter, href: personal.socials.twitter, label: "Twitter" },
              ]
                .filter(({ href }) => href)
                .map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center text-[#9c9c98] hover:text-[#d4ff3a] hover:border-[#d4ff3a]/40 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
            </div> */}
          </div>

          {/* Right - Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 reveal rounded-2xl border border-white/10 bg-[#121214]/60 p-6 md:p-8 space-y-5"
            style={{ transitionDelay: "120ms" }}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your.email@example.com" />
            </div>
            <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Job opportunity / Hiring inquiry" />
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6b6b68] mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Share the role details, company name, and requirements..."
                className="w-full px-4 py-3 rounded-lg bg-[#0a0a0b] border border-white/10 text-[#ececea] placeholder:text-[#5a5a57] focus:outline-none focus:border-[#d4ff3a]/50 focus:ring-2 focus:ring-[#d4ff3a]/15 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#d4ff3a] text-[#0a0a0b] font-medium hover:bg-[#c3ee28] disabled:opacity-60 transition-all group"
            >
              {submitting ? "Sending..." : "Send message"}
              {!submitting && (
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, name, type = "text", value, onChange, placeholder }) => (
  <div>
    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#6b6b68] mb-2">
      {label}
    </label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg bg-[#0a0a0b] border border-white/10 text-[#ececea] placeholder:text-[#5a5a57] focus:outline-none focus:border-[#d4ff3a]/50 focus:ring-2 focus:ring-[#d4ff3a]/15 transition-all"
    />
  </div>
);

export default Contact;
