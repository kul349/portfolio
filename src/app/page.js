"use client"
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Terminal,
  ChevronRight,
  Download,
 
  CircleSmall
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
      title: "VendorHub",
      desc: "A centralized Vendor Management System (VMS) designed to streamline the lifecycle of supplier relationships. Features include vendor onboarding, profile management, performance tracking, and secure communication channels between businesses and their providers.",
      tags: ["AJAX", "EJS", "MySql"],
      link: "#",
      github: "https://github.com/kul349/vendorHub",
    },
    {
      title: "Physiotherapy Assessment Tests Guide | PhysioTest",
      desc: "Understand physiotherapy assessment tests with patient-friendly guides, videos, and step-by-step explanations.",
      tags: ["Google Analytics", "Google search console", "JSON", "Next js"],
      link: "https://physioassessment.vercel.app/",
      github: "https://github.com/kul349/physioassessment",
    },
    {
      title: "Backend Server",
      desc: "A robust and scalable backend server built with [Node.js/Express. This project provides a secure API architecture, handling user authentication, database management, and seamless integration with frontend services.",
      tags: ["MONGODB", "RESTAPI", "Node js"],
      link: "https://backendserver-jivo.onrender.com",
      github: "https://github.com/kul349/BackendServer",
    },
  ];

  const skills = {
    Languages: ["JavaScript", "Python", "MongoDB", "SQL", "Flutter"],
    Frameworks: ["Next.js", "React", "Node.js", "Tailwind"],
    Tools: ["MongoDB", "Git", "GraphQL", "Redis"],
    Engineering: [
      "Database Normalization",
      "Scalable System Design",
      "RESTful API Architecture",
      "Performance Optimization",
    ],
  };

  return (
    <div className="bg-black opacity-90 text-white">
      <div className="min-h-screen font-sans selection:bg-black transition-colors duration-300">
        {/* Navigation */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled
              ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4"
              : "bg-transparent py-6"
          }`}
        >
          <div className=" mx-0 px-6 flex justify-between items-center ">
            <div className="border-gray-700 outline  outline-gray-700 shadow-lg rounded-2xl px-2 py-4  transition-shadow duration-300 flex items-center justify-between">
              <a href="">
                <span className="text-base tracking-wider">
                  karkikulbahadur344@gmail.com
                </span>
              </a>
              <CircleSmall className="size-4 fill-green-500 text-green-500 animate-pulse" />
            </div>
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-6 text-sm font-medium opacity-80">
                <a
                  href="#projects"
                  className="hover:bg-gray-600  rounded transition-colors"
                >
                  <Linkedin className=" size-5" />
                </a>
                <a href="#skills">
                  <Github className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-white text-xs font-bold mb-6">
              <Terminal size={14} />{" "}
              <span className="uppercase text-xl">kul bahadur karki</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Building <span className="text-white italic">scalable</span>{" "}
              solutions for complex problems.
            </h1>
            <p className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Recent Computer Engineering graduate specialized in Full-stack
              Architecture and System Performance. I turn complex requirements
              into clean, maintainable code.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="relative overflow-hidden px-6 py-4 border border-white text-white transition-colors duration-300 group ">
                
                <span className="relative z-10 group-hover:text-black  ">VIEW PROJECTS</span>
                <span className="absolute inset-0 bg-white transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"/>
              </button>
              <button className="relative overflow-hidden px-6 py-4 border border-white text-white transition-colors duration-300 group">
                <span className="relative z-10 group-hover:text-black">
                  DOWNLOAD RESUME
                </span>

                <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">Technical Proficiency</h2>
              <div className="h-1 w-20 bg-blue-500 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
                >
                  <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
                    {category === "Languages" && <Code2 size={18} />}
                    {category === "Frameworks" && <Layers size={18} />}
                    {category === "Tools" && <Terminal size={18} />}
                    {category === "Engineering" && <Cpu size={18} />}
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-slate-900 rounded-md text-sm opacity-80 group-hover:opacity-100 transition-opacity"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
                <div className="h-1 w-20 bg-emerald-500 rounded-full" />
              </div>
              <a
                href="#"
                className="text-sm text-blue-400 hover:underline flex items-center gap-1"
              >
                View all on GitHub <ExternalLink size={14} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col hover:-translate-y-2 transition-transform"
                >
                  <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-8">
                    <div className="w-full h-full border-2 border-dashed border-slate-700 rounded-lg flex items-center justify-center opacity-40">
                      <Layers size={48} className="text-slate-500" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm opacity-60 mb-6 flex-1">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-widest font-bold text-blue-400 bg-blue-500/5 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.link}
                        className="flex-1 text-center py-2 bg-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer className="py-20 border-t border-slate-800 bg-slate-950 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Interested in working together?
            </h2>
            <p className="opacity-60 mb-10">
              I am currently looking for full-time opportunities as a Software
              or Systems Engineer.
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <a
                href="mailto:email@example.com"
                className="p-4 rounded-full bg-slate-900 hover:bg-blue-600 transition-all hover:scale-110 border border-slate-800"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="p-4 rounded-full bg-slate-900 hover:bg-blue-600 transition-all hover:scale-110 border border-slate-800"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="p-4 rounded-full bg-slate-900 hover:bg-blue-600 transition-all hover:scale-110 border border-slate-800"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-xs opacity-40">
              © 2026 Built with Next.js, Tailwind CSS and passion for
              engineering.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
