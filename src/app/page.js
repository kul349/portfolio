"use client"
import React, { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Database,
  Server,
  Cpu,
  ArrowRight,
  Code,
  Layers,
  ShieldCheck,
  Cloud,
  Mail,
  Linkedin,
  Twitter,
  Terminal,
  Activity,
  Workflow,
  Box,
  Globe,
  Zap,
  Lock,
  Layout,
  Smartphone,
  Sparkles,
  MousePointer2,
  Divide,
} from "lucide-react";

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "BackendServer v2",
      description:
        "A modern backend infrastructure utilizing Node.js and MongoDB. Designed for high performance and reliability, featuring RESTful API endpoints, JWT-based authentication, and automated middleware processing",
      tags: ["Express js", "Node js", "MongoDb"],
      icon: <Server className="w-5 h-5 text-blue-500" />,
      stats: "Full-Stack Ops",
      color: "border-indigo-100 bg-indigo-50/30",
    },
    {
      title: "VendorHub Enterprise",
      description:
        "A centralized Vendor Management System (VMS) designed to streamline the lifecycle of supplier relationships. Features include vendor onboarding, profile management, performance tracking, and secure communication channels between businesses and their providers.",
      tags: ["Ajax", "EJS", "Bootstrap"],
      icon: <Smartphone className="w-5 h-5 text-emerald-500" />,
      stats: "98 Lighthouse",
      color: "border-emerald-100 bg-emerald-50/30",
    },
    {
      title: "Physio Test",
      description:
        "Learn the step-by-step stages of standardized physiotherapy assessments. This guide helps students and professionals understand each stage, from initial ...",
      tags: ["Next js", "Tailwindcss", "JSON"],
      icon: <Lock className="w-5 h-5 text-amber-500" />,
      stats: "Low Latency UI",
      color: "border-rose-100 bg-rose-50/30",
    },
    {
      title: "doctorappointmenapp",
      description:
        "This is a web-based application designed to streamline the process of scheduling and managing medical appointments. It serves as a digital bridge between patients and healthcare providers, reducing the need for manual booking and physical queues.",
      tags: ["Dart", "firebase", "Node js"],
      icon: <Activity className="w-5 h-5 text-rose-500" />,
      stats: "Security First",
      color: "border-amber-100 bg-amber-50/30",
    },
  ];

  const fullstackSkills = [
    {
      category: "Frontend",
      tools: ["React", "Next.js", "Tailwind", "Framer Motion", "Three.js"],
      icon: <Layout className="w-4 h-4" />,
    },
    {
      category: "Backend",
      tools: ["Node.js", "Express js", "SQL", "Redis", "GraphQL"],
      icon: <Server className="w-4 h-4" />,
    },
    {
      category: "DevOps",
      tools: ["git",  "Vercel"],
      icon: <Cloud className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#171717] font-sans selection:bg-indigo-600 selection:text-white scroll-smooth">
      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 40s linear infinite;
        }

       .bento-grid{
       display:grid;
       grid-template-columns: repeat(12, 1fr);
       gap:1rem;
      }
      @media (max-width: 1024px) {
        .bento-grid { display: flex; flex-direction: column; }
      }
       `}
      </style>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white-800/50 backdrop-blur-xl border-b border-neutral-200 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              KUL<span className="text-neutral-400">.FULLSTACK</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[12px] font-semibold uppercase tracking-widest text-neutral-500">
            <a href="#project" className="hover:text-black transition-colors">
              Projects
            </a>
            <a href="#stack" className="hover:text-black transition-colors">
              Stack
            </a>
            <a
              href="#contact"
              className="bg-black text-white px-5 py-2 rounded-full hover:bg-neutral-800 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 pt-32 lg:pt-48 pb-24">
        <section className="mb-32">
          <div className="flex items-center gap-2 mb-8">
            <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[12px] font-black tracking-widest uppercase">
              Fullstack Product Engineer
            </span>
            <span className="text-[10px] font-bold text-neutral-400">
              Available for 2026 Q3 Roles
            </span>
          </div>
          <h1 className="text-6xl md:text-[7.5rem] font-black tracking-tighter mb-10 leading-[0.85] uppercase">
            From Pixels <br />
            <span className="text-neutral-400 text-6xl md:text-[6.5rem]">
              to Production.
            </span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl leading-snug">
              I bridge the gap between{" "}
              <span className="text-black font-semibold">
                elegant user interfaces
              </span>
              {""}
              and {""}
              <span className="text-black font-semibold">
                robust system logic
              </span>
              . Building digital products that are fast, accessible, and
              scalable.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="h-16 px-10 bg-black text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-600 transition-all group  "
              >
                Recent Work{" "}
                <MousePointer2 className="w-4 h-4 group-hover:translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
        <div className="bento-grid">
          <div className="col-span-7 bg-white border border-neutral-200 rounded-[2.5rem] p-10 flex-col justify-between hover:border-indigo-400 transition-colors group">
            <div>
              <div className="flex items-center gap-3 mb-8 ">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  Interface & UX
                </span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                User-centric frontend engineering.
              </h2>
              <p className="text-neutral-500 leading-relaxed max-w-md">
                I build immersive experiences using modern frameworks like{" "}
                <span className="text-black font-medium">Next.js</span> and{" "}
                <span className="text-black font-medium">Tailwind</span>. My
                work focuses on performance, smooth animations, and bulletproof
                responsive design.
              </p>
            </div>
            <div className="mt-12 flex gap-12 border-t border-neutral-100 pt-8">
              <div>
                <div className="text-2xl font-black">+98</div>
                <div className="text-[10px] font-bold text-neutral-400 uppercase">
                  Avg Lighthouse Score
                </div>
              </div>
              <div>
                <div className="text-2xl font-black">100%</div>
                <div className="text-[10px] font-bold text-neutral-400 uppercase">
                  A11y Compliance
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 bg-neutral-900 rounded-[2.5rem] p-10  text-white flex flex-col justify-between overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-bold text-neutral-500 tracking-widest uppercase">
                  Logic & Scale
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Robust backend orchestration.
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Expertise in building distributed APIs, real-time database
                synchronization, and secure cloud environments that handle
                millions of requests.
              </p>
            </div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-4 p-4  bg-white/5 rounded-2xl border border-white/10">
                <Database className="w-5 h-5 text-indigo-400" />
                <span className="text-xs font-mono">
                  PostgreSQL / Redis / Prisma
                </span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                <Server className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono">
                  AWS / Docker / Kubernetes
                </span>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Terminal className="w-64 h-64" />
            </div>
          </div>
          {/* Projects Gallery */}

          <div id="projects" className="col-span-12 mt-4">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-bold tracking-tighter px-2 uppercase">
                End-to-End Projects
              </span>
              <div className="h-px flex-1 bg-neutral-200"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-[2.5rem] border transition-all duration-500 group hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-1 ${p.color}`}
                >
                  <div className="flex items-center justify-center mb-8">
                    <div className="p-3 bg-white rounded-2xl shadow-sm border border-neutral-100 group-hover:scale-110 transition-transform ">
                      {p.icon}
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 tracking-tight group-hover:text-indigo-600 transition-colors ">
                    {p.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed mb-8">
                    {p.description}
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-4">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-black text-neutral-400  uppercase tracking-tighter"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center border-t border-neutral-200/50 pt-4 ">
                      <span className="text-[10px] font-black text-neutral-900 uppercase">
                        {p.stats}
                      </span>
                      <div className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-30"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* stack selector */}
          <div
            id="stack"
            className="col-span-12 lg:col-span-8 bg-white border border-neutral-200 rounded-[2.5rem] p-10 hover:border-neutral-400 transition-colors"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-neutral-400" />
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  Fullstack Arsenal
                </span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {fullstackSkills.map((section, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 mb-6 text-indigo-600">
                    {section.icon}
                    <h4 className="font-bold text-sm uppercase tracking-wider">
                      {section.category}
                    </h4>
                  </div>
                  <ul className="space-y-4">
                    {section.tools.map((tool) => (
                      <li
                        key={tool}
                        className="flex items-center gap-3 text-sm font-medium group cursor-default"
                      >
                        <div className="w-1 h-1 bg-neutral-200 rounded-full group-hover:w-4 group-hover:bg-indigo-500 transition-all"></div>
                        <span className="text-neutral-500 group-hover:text-black transition-colors">
                          {tool}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div
            id="contact"
            className="col-span-12 lg:col-span-4 bg-indigo-600 rounded-[2.5rem] p-10 text-white flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h3 className="text-4xl font-black tracking-tighter mb-4 uppercase">
                Let's Build <br /> The Future.
              </h3>
              <p className="text-indigo-100 text-sm leading-relaxed mb-8 opacity-80">
                Whether you need a full-scale platform or a high-performance web
                app, I'm ready to ship.
              </p>
            </div>
            <div className="relative z-10 space-y-3">
              <a
                href="mailto:karkikulbahadur344@gmail.com"
                className="w-full h-14 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Mail className="w-4 h-4" /> Say Hello
              </a>
              <div className="flex gap-3">
                <a
                  href="https://github.com/kul349"
                  className="flex-1 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="www.linkedin.com/in/kul-karki-2998b3282"
                  className="flex-1 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-1000 pointer-events-none">
              <Globe className="w-48 h-48" />
            </div>
          </div>
        </div>
      </main>
      {/* Ribbon */}
      <div className="bg-black py-10 overflow-hidden">
        <div className="animate-marquee items-center gap-20 text-neutral-600 font-black text-2xl uppercase tracking-[0.4em] whitespace-nowrap">
          <span>Next.js 14</span> <span>•</span> <span>React</span>{" "}
          <span>•</span>
          <span>JavaScript</span> <span>•</span> <span>Node.js</span>{" "}
          <span>•</span>
          <span>GraphQL</span> <span>•</span> <span>AWS</span> <span>•</span>
          <span>Tailwind</span> <span>•</span> <span>MySQL</span> <span>•</span>
          <span>Next.js 14</span> <span>•</span> <span>React</span>{" "}
          <span>•</span>
        </div>
      </div>
      <footer className="py-20 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
                <Code className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-sm tracking-tight">
                KUL.FULLSTACK
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              Shipping high-quality code and meaningful user experiences from my
              studio to your users.
            </p>
            <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-neutral-400">
              <a href="#" className="hover:text-indigo-600 transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-neutral-900">
                Expertise
              </h5>
              <div className="flex flex-col gap-2 text-sm text-neutral-500">
                <span>UI/UX Design</span>
                <span>System Architecture</span>
                <span>Product Design</span>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-neutral-900">
                Resources
              </h5>
              <div className="flex flex-col gap-2 text-sm text-neutral-500">
                <span>Tech Stack</span>
                <span>Experience</span>
                <span>Services</span>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-neutral-900">
                Current Status
              </h5>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Open to Projects</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">
          <span>© 2026 KUL.FULLSTACK</span>
          <span>Crafted with passion and precision</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
