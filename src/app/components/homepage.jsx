"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin,Instagram,Github, icons } from "lucide-react";
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGraphql,
  SiMui,
} from "react-icons/si";

function Homepage() {
  const experiences = [
    {
      role: "Retainer Full Stack Developer",
      company: "MNS Credit Management Group",
      duration: "June 2025 - August 2025",
      location: "Delhi, India",
      points: [
        "Reviewed and debugged code to fix issues and improve application stability.",
        "Developed backend systems including databases, servers, and APIs.",
        "Integrated third-party APIs to enhance functionality and user experience.",
        "Collaborated with developers to design scalable APIs and backend architecture.",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "MNS Credit Management Group",
      duration: "December 2024 - June 2025",
      location: "Delhi, India",
      points: [
        "Built web applications using React, HTML, and Python.",
        "Organized and optimized unstructured data in MySQL databases.",
        "Developed a dashboard to analyze marketing data using MongoDB.",
        "Deployed a live production website for the organization.",
      ],
    },
  ];
  const services = [
    {
      title: "Clean & Maintainable Code",
      description:
        "I write well-structured, readable, and scalable code following best practices, making it easy to maintain and extend in the future.",
    },
    {
      title: "High Performance Applications",
      description:
        "I focus on optimizing performance by reducing load time, improving efficiency, and ensuring smooth user experiences across all devices.",
    },
    {
      title: "SEO & Optimization",
      description:
        "I build websites with proper SEO practices, including meta tags, structured data, and fast loading speed to improve search engine visibility.",
    },
    {
      title: "Responsive & Modern UI",
      description:
        "I design and develop responsive, user-friendly interfaces that work seamlessly across mobile, tablet, and desktop devices.",
    },
  ];
  const projects = [
    {
      title: "Techno Nepal",
      image: "/project/project1.png",
      tech: "Next.js, Node.js, Tailwindcss",
      github: "#",
      live: "https://controlapex.vercel.app/",
    },
    {
      title: "Doctor Appointment System",
      image: "/project/project2.png",
      tech: "Flutter, Node.js, MongoDB",
      github: "https://github.com/kul349/doctorappointmenapp",
      live: "#",
    },
    {
      title: "PhysioTest LMS",
      image: "/project/project3.png",
      tech: "React, Express, MongoDB",
      github: "https://github.com/kul349/physioassessment",
      live: "https://physioassessment.vercel.app/",
    },
    {
      title: "VendorHub E-commerce",
      image: "/project/project4.png",
      tech: "Node.js, MySQL, EJS",
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      image: "/project/project5.png",
      tech: "Next.js, Tailwind CSS",
      github: "#",
      live: "#",
    },
    {
      title: "Backend Server",
      image: "/project/backend.jpg",
      tech: "Node js, Express,Mongodb",
      github: "https://github.com/kul349/BackendServer",
      live: "https://backendserver-jivo.onrender.com",
    },
  ];
  const skills = [
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-green-500",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-600",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "text-blue-600",
    },
    {
      name: "React",
      icon: FaReact,
      color: "text-blue-500",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-black",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-sky-400",
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      color: "text-purple-600",
    },
    {
      name: "HTML",
      icon: FaHtml5,
      color: "text-orange-500",
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      color: "text-blue-400",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-400",
    },

    {
      name: "GraphQL",
      icon: SiGraphql,
      color: "text-pink-500",
    },
    {
      name: "MUI",
      icon: SiMui,
      color: "text-blue-600",
    },
  ];

    const socialMedia = [
      {
        id: 1,
        url: "www.linkedin.com/in/kul-karki-2998b3282",
        name: "Linkdin",
        icon: <Linkedin/>,
      },
      {
        id: 2,
        url: "https://github.com/kul349",
        name: "github",
        icon: <Github/>,
      },
      {
        id: 3,
        url: "https://www.instagram.com/prakashkarki28/",
        name: "Instagram",
        icon: <Instagram/>,
      },
    ];
    const contacts = [
      {
        label: "Email",
        value: "karkikulbahadur344@gmail.com",
        link: "mailto:karkikulbahadur344@gmail.com",
      },
      {
        label: "Phone",
        value: "+977 9824715648",
        link: "tel:+9779824715648",
      },
      {
        label: "Location",
        value: "Kathmandu, Nepal",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/kul-karki-2998b3282",
        link: "https://www.linkedin.com/in/kul-karki-2998b3282",
      },
      {
        label: "Portfolio",
        value: "portfolio-kul-bahadur-karki.vercel.app",
        link: "https://portfolio-kul-bahadur-karki.vercel.app",
      },
    ];
  return (
    <main>
      {/* Header */}
      <header className="flex flex-col bg-yellow-500">
        <div className="flex justify-between items-center p-4">
          <span className="font-bold uppercase text-white">
            Kul Bahadur Karki
          </span>
          <nav className="flex sm:gap-2 space-x-2 px-2 text-white uppercase tracking-wider sm:text-xs md:text-base">
            <Link href="/">Home</Link>
            <Link href="/aboutme">About Me</Link>
            <Link href="/project">Project</Link>
            <Link href="/skill">Skills</Link>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section id="home" className="min-h-screen  max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-around px-4">
        {/* Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Hi, I&apos;m Kul Bahadur Karki
          </h1>
          <p className="mt-4 text-xl md:text-4xl font-bold text-yellow-500 ">
            I design and develop elegant, minimal websites for modern and
            functional products.
          </p>
          <p className="pt-4">
            I design and develop unique websites that are elegant, fast, and
            easy to use. Each project focuses on combining beautiful design with
            smooth performance. I create modern, minimal, and functional
            websites that users love. My goal is to deliver seamless experiences
            that stand out and impress
          </p>
          <div className="flex flex-row gap-4  items-center  mt-8 ">
            <p className="font-bold text-yellow-600 text-xl">Follow Me:</p>
            {socialMedia.map((media) => (
              <div key={media.id} className="flex   text-2xl">
                <Link
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 hover:bg-white transition-transform transform hover:scale-110 bg-yellow-500 rounded-md border-2 border-white-300 text-white p-2"
                >
                  {media.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative h-50 w-40 md:h-80 md:w-70 rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-xl"
          whileHover={{ scale: 1.05, rotate: 2 }}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }} // floating animation
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
        >
          <Image
            src="/portfolio-image.jpeg"
            alt="portfolio image"
            fill
            className="object-cover scale-110"
          />
        </motion.div>
      </section>
      <section  id="aboutme" className="flex flex-col items-center px-4 md:px-0 py-12">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-1 w-20 bg-yellow-600" />

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold"
          >
            About Me
          </motion.h1>

          <div className="h-1 w-20 bg-yellow-600" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full items-center gap-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-64 md:h-[480px] rounded-2xl overflow-hidden border border-yellow-400 shadow-xl"
          >
            <Image
              src="/portfolio-image.jpeg"
              alt="portfolio image"
              fill
              className="object-cover scale-110 hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 tracking-wide text-gray-700 text-sm md:text-base leading-relaxed"
          >
            <p>
              I am a passionate Full Stack Web Developer with expertise in
              React.js, Next.js, Node.js, MySQL, and MongoDB. I enjoy building
              scalable, efficient, and user-friendly web applications that solve
              real-world problems and improve digital experiences. My approach
              combines clean code, performance optimization, and responsive
              design to ensure seamless functionality across devices.
            </p>

            <p>
              I have hands-on experience working with both frontend and backend
              technologies, including developing APIs, integrating third-party
              services, and designing databases for robust systems. During my
              time at MNS Credit Management Group, I contributed to backend
              development, API design, and live production deployments, gaining
              valuable real-world exposure to professional web development
              practices.
            </p>

            <p>
              In my personal projects, I have built applications like PhysioTest
              LMS and Doctor Appointment Management systems, focusing on
              scalable architectures, efficient data handling, and smooth user
              interfaces. I am committed to continuously learning, improving my
              skills, and delivering high-quality web solutions that make an
              impact.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="flex flex-col max-w-7xl w-full mx-auto items-center justify-center px-4 md:px-6 py-12 space-y-8 bg-gray-50 rounded-2xl dark:bg-gray-900">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-1 w-20 bg-yellow-600" />
          <motion.h1 className="text-2xl md:text-3xl font-semibold">
            Skills
          </motion.h1>
          <div className="h-1 w-20 bg-yellow-600" />
        </div>

        <p className="mb-8 text-gray-700 text-center">
          I am a passionate full-stack developer with hands-on experience in
          building scalable web applications. My expertise lies in Node.js,
          Next.js, and React.js, where I design clean and maintainable code. I
          enjoy working with databases like MongoDB and MySQL and crafting
          responsive frontend interfaces using Tailwind CSS, Bootstrap, HTML,
          CSS, and JavaScript.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 p-2 rounded-xl shadow"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: index * 0.1,
                }}
              >
                <Icon className={`text-7xl md:text-8xl ${skill.color}`} />
                <p className="text-sm font-medium">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
      <section id="project" className="w-full max-w-7xl mx-auto px-4 py-16 space-y-10">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-1 w-20 bg-yellow-600" />
          <h1 className="text-2xl md:text-3xl font-semibold">Projects</h1>
          <div className="h-1 w-20 bg-yellow-600" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-3">
                <h3 className="font-semibold text-lg">{project.title}</h3>

                <p className="text-sm text-gray-500">{project.tech}</p>

                {/* Buttons */}
                <div className="flex gap-3 mt-2">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-sm px-3 py-1 border border-yellow-500 text-yellow-600 rounded-md hover:bg-yellow-500 hover:text-white transition"
                  >
                    GitHub
                  </Link>

                  <Link
                    href={project.live}
                    target="_blank"
                    className="text-sm px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                  >
                    Live
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto px-4 py-16 space-y-12">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-1 w-20 bg-yellow-600" />
          <h1 className="text-2xl md:text-3xl font-semibold">What I Can Do</h1>
          <div className="h-1 w-20 bg-yellow-600" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold text-yellow-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>{" "}
      <section id className="w-full max-w-7xl mx-auto px-4 py-16 space-y-12">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-1 w-20 bg-yellow-600" />
          <h1 className="text-2xl md:text-3xl font-semibold">Experience</h1>
          <div className="h-1 w-20 bg-yellow-600" />
        </div>

        {/* Timeline */}
        <motion.div
          className="relative border-l-2 border-yellow-400 pl-6 space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Dot */}
              <div className="absolute -left-[10px] top-2 w-4 h-4 bg-yellow-500 rounded-full"></div>

              {/* Card */}
              <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl hover:-translate-y-2 transition">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-yellow-600 font-medium">{exp.company}</p>

                <p className="text-sm text-gray-500">
                  {exp.duration} • {exp.location}
                </p>

                <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section id="contact" className="w-full max-w-7xl mx-auto px-4 py-16 space-y-12">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-1 w-20 bg-yellow-600" />
          <h1 className="text-2xl md:text-3xl font-semibold">Contact</h1>
          <div className="h-1 w-20 bg-yellow-600" />
        </div>

        {/* Content */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {contacts.map((item, index) => (
            <motion.div
              key={index}
              className="p-5 rounded-xl bg-white shadow-md hover:shadow-xl transition hover:-translate-y-2"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-sm text-gray-500">{item.label}</p>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 font-medium break-all hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-medium">{item.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

export default Homepage;
