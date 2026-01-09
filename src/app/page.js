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
              {projects.map((p,i)=>(
                <div key={i} className={`p-8 rounded-[2.5rem] border transition-all duration-500 group hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-1 ${p.color}`}>

                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
