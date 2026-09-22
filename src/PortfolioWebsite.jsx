import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Award,
  BookOpen,
  Users,
  Heart,
  Briefcase,
  Code2,
  Cpu,
  Wrench,
  Sparkles,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react";

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PortfolioWebsite() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const moveCursor = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Intersection observer for active nav state
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  /* ─── data ─── */
  const projects = [
    {
      title: "Project Abyss",
      description:
        "Built an immersive 3D web experience for a hackathon, combining interactive design, visual storytelling, and browser-based technology into a polished project.",
      link: "https://abyss-immersion.replit.app",
      tags: ["3D Web", "Hackathon", "Interactive Design", "Replit"],
      image: null,
    },
    {
      title: "AI Cricket Ball Retrieval Robot",
      description:
        "Designed a robotics concept for an automated cricket bowling setup. When the bowling machine runs out of balls, the robot uses a camera and sensors to detect and collect balls, raises them into the refill bin, exits the cricket lane for safety, and detects when another refill cycle is needed.",
      tags: ["Robotics", "AI", "Computer Vision", "Sensors"],
      image: null,
    },
    {
      title: "Ascendra",
      description:
        "Created a startup concept during the SureStart summer bootcamp to help students under 18 discover internships, part-time jobs, programs, and other opportunities. The platform also included an AI-powered resume-building feature.",
      tags: ["Startup", "AI", "Career Tech", "Product Development"],
      image: null,
    },
    {
      title: "North America Cricket League Website",
      description:
        "Created a website for the North America Cricket League to support league information, visibility, and community access to cricket-related updates and resources.",
      tags: ["Web Development", "Sports Tech", "Community", "Responsive Design"],
      image: null,
    },
    {
      title: "Kashish Apparel Website",
      description:
        "Designed and built a modern e-commerce website for a fashion business, including product collections, customer accounts, wishlist and reviews, order management, an owner/admin dashboard, Supabase-backed data, and payment integration work.",
      tags: ["E-Commerce", "Supabase", "Full-Stack", "Responsive Design"],
      image: null,
    },
    {
      title: "RESA Construction Website",
      description:
        "Created a professional service website for RESA Construction to showcase residential construction, remodeling, electrical upgrades, lighting, rewiring, and EV charger installation while making it easy for customers to understand services and get in contact.",
      tags: ["Business Website", "Web Design", "Responsive UI", "Local Services"],
      image: null,
    },
    {
      title: "The Growing Impact of Robotics Across Modern Industries",
      description:
        "Research paper examining how robotics improves efficiency, safety, accuracy, and performance across Zipline medical-delivery drones, Roomba household robots, Waymo autonomous vehicles, and the da Vinci Surgical System, while also addressing regulation, ethics, cybersecurity, cost, and public trust.",
      tags: ["Robotics Research", "Autonomous Systems", "Healthcare Robotics", "Cybersecurity"],
      image: null,
    },
    {
      title: "SoccerHub",
      description:
        "A soccer app that shows live scores, match schedules, standings, and team stats in one centralized platform.",
      link: "https://soccerhub.shop/",
      tags: ["React", "API", "Sports Data"],
      image: "/projects/soccerhub.png",
    },
    {
      title: "Shia Prayer Time App",
      description:
        "A mobile/web app providing accurate Shia prayer times, duas, and Islamic calendar features for daily use.",
      link: "https://timeforprayer.space/",
      tags: ["Mobile", "API", "UI/UX"],
      image: "/projects/prayer-app.png",
    },
    {
      title: "Car Search Engine",
      description:
        "A web-based car search engine that lets users browse, filter, and compare vehicles with a clean and intuitive interface.",
      link: "https://wafflesnzxt.github.io/CarSearchEngine/",
      tags: ["JavaScript", "GitHub Pages", "Search"],
      image: "/projects/car-search.png",
    },
    {
      title: "DJI Drone",
      description:
        "A drone project exploring aerial technology, flight automation, and camera systems using DJI platforms.",
      link: "https://kshabbur.weebly.com/",
      tags: ["Drone", "DJI", "Aerial Tech"],
      image: "/projects/dji-drone.png",
    },
    {
      title: "Money Demo App",
      description:
        "A demo finance application for tracking and managing money with a clean, user-friendly interface.",
      link: "https://makadamian2010.github.io/money-app-demo/",
      tags: ["JavaScript", "Finance", "GitHub Pages"],
      image: "/projects/money-app.png",
    },
  ];

  const skillCategories = [
    {
      title: "Core Top Skills",
      icon: <Cpu size={20} />,
      skills: [
        "Artificial Intelligence (AI)",
        "Robotics",
        "Cybersecurity",
        "Software Development",
        "Web Services",
      ],
    },
    {
      title: "AI & Intelligent Systems",
      icon: <Sparkles size={20} />,
      skills: [
        "Generative AI",
        "Machine Learning",
        "Prompt Engineering",
        "Agentic AI Development",
        "Anthropic Claude",
        "Claude Code",
        "ChatGPT for Web Developers",
      ],
    },
    {
      title: "Software & Application Development",
      icon: <Code2 size={20} />,
      skills: [
        "Application Development",
        "Python",
        "C++",
        "JavaScript",
        "TypeScript",
        "Object-Oriented Programming (OOP)",
        "Object-Oriented Languages",
        "Game Development",
      ],
    },
    {
      title: "Robotics & Engineering",
      icon: <Wrench size={20} />,
      skills: [
        "Robot Programming",
        "Robot Operating System (ROS)",
        "Engineering",
        "AutoCAD",
        "Computer-Aided Design (CAD)",
        "Research and Development (R&D)",
      ],
    },
    {
      title: "Web, Leadership & Community",
      icon: <Users size={20} />,
      skills: [
        "Web Development",
        "Web Design",
        "Digital Marketing",
        "Leadership",
        "Leadership Development",
        "Community Outreach",
        "Sports Coaching",
      ],
    },
  ];

  const workExperience = [
    {
      role: "Event Setup Staff",
      company: "Kennetted Jumps",
      date: "",
      description:
        "Worked at events helping with setup and breakdown of inflatable jump houses and event equipment. Assisted with heavy lifting, loading and unloading vehicles, transporting equipment, site setup, cleanup, and preparing event spaces before and after activities.",
    },
    {
      role: "Part-Time Staff",
      company: "NACL Sports Center",
      date: "",
      description:
        "Supported day-to-day sports center operations and cricket programming while helping with facility setup, event support, and community activities.",
    },
    {
      role: "Certified Umpire",
      company: "North America Cricket League",
      date: "",
      description:
        "Officiated cricket matches as a certified umpire, applying league rules, making in-game decisions, and helping maintain fair and organized competition.",
    },
    {
      role: "Technology Intern",
      company: "10x.in",
      date: "",
      description:
        "Completed an internship centered on practical, industry-aligned technology work and hands-on projects, applying modern AI and software tools while strengthening technical problem solving and professional skills.",
    },
    {
      role: "Vibe Marketer Cohort Intern",
      company: "10x",
      date: "",
      description:
        "Participated in a technology-focused marketing cohort exploring AI-assisted content, digital strategy, modern growth tools, and practical ways to market products and ideas.",
    },
    {
      role: "A.I. Rotation Program",
      company: "Starter School",
      date: "",
      description:
        "Completed a hands-on AI program focused on practical uses of artificial intelligence, modern AI tools, entrepreneurship, and building real projects and business ideas.",
    },
    {
      role: "Co-op Program",
      company: "Starter School",
      date: "",
      description:
        "Completed industry-based co-op projects modeled after real company assignments, using modern software and technology tools while practicing deadlines, requirements, and portfolio-ready delivery.",
    },
    {
      role: "Summer Bootcamp",
      company: "SureStart",
      date: "",
      description:
        "Completed a summer technology and entrepreneurship bootcamp and developed Ascendra, a startup concept helping students under 18 discover internships, jobs, and programs with an AI resume-building feature.",
    },
  ];

  const academicWork = [
    "AI & Robotics Coursework",
    "Computer Science Projects",
    "STEM Research & Reports",
    "Engineering Assignments",
    "Hackathons, Technology Conferences & Summits",
  ];

  const extracurriculars = [
    {
      title: "VEX Robotics",
      role: "Robotics Team Member",
      date: "",
      description:
        "Worked on competitive robotics through building, testing, programming, and iterating on robot systems while collaborating with teammates on engineering challenges.",
    },
    {
      title: "MIT Beaver Works CRE[AT]E Challenge",
      role: "Engineering Challenge Participant",
      date: "",
      description:
        "Participated in the MIT Beaver Works CRE[AT]E Challenge with a team and mentor, applying engineering design, technical problem solving, prototyping, and collaboration.",
    },
    {
      title: "AI Ambassador",
      role: "Applied AI Club Instructor & Community Educator",
      date: "",
      description:
        "Teach applied AI through a school club and outreach sessions in Bay Area communities and libraries, helping students understand practical AI tools, prompting, and real-world applications.",
    },
    {
      title: "Impact Initiative Organization",
      role: "Treasurer & Marketing",
      date: "",
      description:
        "Supported budgeting, financial organization, outreach, and marketing for a student-led impact organization focused on community initiatives.",
    },
    {
      title: "Volunteer & Fundraising Club",
      role: "Treasurer",
      date: "",
      description:
        "Helped manage club funds, resources, and fundraising logistics while supporting service projects and community-focused initiatives.",
    },
    {
      title: "U13 & U15 Cricket Hub",
      role: "Team Captain",
      date: "",
      description:
        "Led youth cricket teams by supporting teammates, helping organize play, communicating strategy, and encouraging teamwork and accountability.",
    },
    {
      title: "Youth Soccer",
      role: "U11 Captain & U14 Captain",
      date: "",
      description:
        "Served as U11 soccer captain for two years and U14 soccer captain for three years, building leadership, communication, and team coordination skills.",
    },
    {
      title: "8th Grade Class Representative",
      role: "Student Representative",
      date: "",
      description:
        "Represented classmates, communicated student concerns and ideas, and supported class and school activities.",
    },
    {
      title: "Hackathons, Conferences & Summits",
      role: "Participant",
      date: "",
      description:
        "Competed in multiple hackathons and attended technology conferences and summits to build projects, learn new tools, and connect with broader technology and entrepreneurship communities.",
    },
  ];

  const volunteering = [
    {
      title: "Shia Association of Bay Area",
      role: "Community Volunteer",
      date: "",
      description:
        "Supported community programs and events, including children’s and youth activities, food preparation and serving, kitchen assistance, event organization, and guest support.",
    },
    {
      title: "RISE Academy",
      role: "Soccer Coach",
      date: "",
      description:
        "Coached youth soccer for three years across U6, U8, U10, and U12 age groups, leading drills, helping players develop skills, supporting teamwork, and assisting with games and equipment.",
    },
    {
      title: "Cricket Pitch & Ground Development",
      role: "Community Sports Infrastructure Volunteer",
      date: "",
      description:
        "Helped create cricket pitches and grounds through hands-on work including laying cement, installing carpet, measuring and cutting grass, and preparing playing areas. Also contacted schools across the Bay Area to identify fields that could support league cricket pitches.",
    },
    {
      title: "Help Aid Africa",
      role: "Volunteer & Fundraising Support",
      date: "",
      description:
        "Supported charitable fundraising and community-service efforts connected to Help Aid Africa, helping organize outreach and service-focused initiatives.",
    },
    {
      title: "Audio & Visual Room / Community Media",
      role: "Technology Volunteer",
      date: "",
      description:
        "Helped install and maintain audio, video, camera, and other technology equipment for community programming. Assisted with camera movement, audio quality, and livestream production so people unable to attend in person could watch online.",
    },
    {
      title: "Hospital Project",
      role: "Community Service Volunteer",
      date: "",
      description:
        "Supported a hospital-focused service project by preparing and organizing materials intended to encourage and support patients and community members receiving care.",
    },
    {
      title: "Sirat Project",
      role: "Prison Outreach Volunteer",
      date: "",
      description:
        "Read letters and notecards from Muslim prisoners and helped respond to requests for advice, prayer mats, Qurans, religious resources, and other forms of support.",
    },
    {
      title: "IT Support & Tech Support",
      role: "Teacher Assistant",
      date: "",
      description:
        "Worked under the guidance of the Director of Technology to assist with classroom and school technology, troubleshoot devices, support users, and help maintain reliable tech systems.",
    },
    {
      title: "Sunday School",
      role: "Teacher & Technology Support",
      date: "",
      description:
        "Helped teach Sunday School students while also maintaining and supporting the technology used for classes, presentations, and community programming.",
    },
    {
      title: "Old Device Drive",
      role: "Technology Access Volunteer",
      date: "",
      description:
        "Helped collect old electronic devices, refurbish usable technology, and prepare devices for donation to underprivileged communities including shelters, foster homes, and orphanages.",
    },
    {
      title: "9th Grade Biology",
      role: "Teacher Assistant",
      date: "",
      description:
        "Supported a 9th grade biology class by helping students, assisting with classroom activities, and supporting the teacher with academic and organizational tasks.",
    },
    {
      title: "Al-Kisa Foundation",
      role: "Volunteer",
      date: "",
      description:
        "Helped organize and prepare Islamic books and educational materials for children and families, including sorting, packing, and event support.",
    },
    {
      title: "RISE Academy",
      role: "Treasurer",
      date: "",
      description:
        "Managed and organized resources for community service initiatives by tracking materials, maintaining records, and helping coordinate volunteer efforts.",
    },
  ];

  const awards = [
    "Academic Achievements",
    "STEM Certificates",
    "Competition Participation",
    "Future Certifications (AI / CS)",
  ];

  const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#academics", label: "Academics" },
    { href: "#activities", label: "Activities" },
    { href: "#contact", label: "Contact" },
  ];

  /* ─── JSX ─── */
  return (
    <div className="min-h-screen bg-[#070b14] text-white font-sans relative overflow-x-hidden">
      {/* Glow Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-44 h-44 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none z-50"
        animate={{ x: cursor.x - 88, y: cursor.y - 88 }}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
      />

      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.12),transparent_40%)] -z-10" />

      {/* ─── Navbar ─── */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#070b14]/70 border-b border-white/5">
        <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
          <h1 className="text-xl font-bold tracking-wide bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Shabbur Khan
          </h1>
          <div className="flex items-center gap-7 text-sm text-slate-400">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`hover:text-white transition-colors duration-200 ${activeSection === l.href.slice(1)
                  ? "text-white font-medium"
                  : ""
                  }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section
        id="hero"
        className="max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-2 gap-16 items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-indigo-400 mb-4 text-sm uppercase tracking-[0.25em] font-medium">
            AI • Robotics • Computer Science
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Shabbur Khan
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
            Aspiring AI & Robotics Engineer building intelligent systems,
            innovative projects, and modern technology solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects">
              <button className="px-8 py-4 text-base bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-xl font-semibold shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:-translate-y-0.5">
                View Projects
              </button>
            </a>
            <a href="mailto:kshabbur@gmail.com">
              <button className="px-8 py-4 text-base bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5">
                Contact Me
              </button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-10 text-slate-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/shabbur-khan-16a792363/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:kshabbur@gmail.com"
              className="hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        {/* Overview Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-2xl rounded-3xl" />
          <div className="relative bg-slate-900/60 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio Overview
            </h2>
            <div className="space-y-4 text-slate-300 text-lg">
              <p className="flex items-center gap-3">
                <Cpu size={18} className="text-indigo-400" /> AI & Machine
                Learning Projects
              </p>
              <p className="flex items-center gap-3">
                <Wrench size={18} className="text-cyan-400" /> Robotics &
                Engineering Builds
              </p>
              <p className="flex items-center gap-3">
                <BookOpen size={18} className="text-violet-400" /> Academic &
                Research Work
              </p>
              <p className="flex items-center gap-3">
                <Users size={18} className="text-emerald-400" /> Leadership &
                Extracurricular Activities
              </p>
              <p className="flex items-center gap-3">
                <Briefcase size={18} className="text-amber-400" /> Work
                Experience & Mentoring
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── Skills Section ─── */}
      <section id="skills" className="max-w-7xl mx-auto px-8 py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-400 mb-14 text-lg max-w-2xl">
            Technologies, tools, and competencies I work with.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skillCategories.map((cat, i) => (
            <motion.div key={i} variants={cardItem}>
              <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-7 hover:border-indigo-400/40 transition-all duration-300 h-full group hover:bg-slate-900/90">
                <div className="flex items-center gap-3 mb-5 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  {cat.icon}
                  <h3 className="font-semibold text-lg text-white">
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {cat.skills.map((skill, j) => (
                    <li
                      key={j}
                      className="text-slate-400 text-sm flex items-center gap-2 group-hover:text-slate-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="flex items-end justify-between gap-4 mb-5">
            <div>
              <h3 className="text-xl font-semibold text-white">All Skills</h3>
              <p className="text-slate-500 text-sm mt-1">
                Full list of technical, engineering, AI, web, and leadership skills.
              </p>
            </div>
            <span className="text-xs text-slate-500">
              {[...new Set(skillCategories.flatMap((category) => category.skills))].length} skills
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {[...new Set(skillCategories.flatMap((category) => category.skills))].map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-sm hover:text-white hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gradient Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>

      {/* ─── Projects Section ─── */}
      <section id="projects" className="max-w-7xl mx-auto px-8 py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 mb-14 text-lg max-w-2xl">
            Featured work and personal builds.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardItem} whileHover={{ y: -6 }}>
              <div className="bg-slate-900/70 border border-white/10 rounded-3xl hover:border-indigo-400/40 transition-all duration-300 backdrop-blur-xl overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-8">
                      <div className="text-center">
                        <Cpu size={42} className="mx-auto text-cyan-300/80 mb-4" />
                        <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/70">
                          {project.tags?.[0] || "Featured Project"}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-white/10 rounded-full text-slate-300 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-all duration-300 text-sm">
                        View Project <ExternalLink size={16} />
                      </button>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl font-medium text-slate-500 text-sm cursor-not-allowed"
                    >
                      Coming Soon <ArrowUpRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gradient Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      {/* ─── Work Experience Section ─── */}
      <section id="experience" className="max-w-7xl mx-auto px-8 py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Briefcase className="text-amber-400" size={32} />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-slate-400 mb-14 text-lg max-w-2xl">
            Professional roles, mentoring, and hands-on work.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {workExperience.map((job, index) => (
            <motion.div key={index} variants={cardItem}>
              <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-8 hover:border-indigo-400/40 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-l-2xl" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-indigo-300 transition-colors">
                      {job.role}
                    </h3>
                    <p className="text-indigo-400 font-medium">{job.company}</p>
                  </div>
                  {job.date && (
                    <span className="flex items-center gap-2 text-sm text-slate-500 shrink-0">
                      <Calendar size={14} /> {job.date}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 leading-relaxed mt-2">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gradient Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>

      {/* ─── Academic Work Section ─── */}
      <section id="academics" className="max-w-7xl mx-auto px-8 py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <BookOpen className="text-violet-400" size={32} />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Academic Work
            </span>
          </h2>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {academicWork.map((item, index) => (
            <motion.div key={index} variants={cardItem}>
              <div className="bg-slate-900/70 border border-white/10 rounded-2xl hover:border-violet-400/40 transition-all duration-300 group">
                <div className="p-6 text-slate-300 font-medium group-hover:text-white transition-colors flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-violet-500/60" />
                  {item}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gradient Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      </div>

      {/* ─── Extracurriculars + Volunteering ─── */}
      <section id="activities" className="max-w-7xl mx-auto px-8 py-28">
        {/* Extracurriculars */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Users className="text-emerald-400" size={32} />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Extracurricular Activities
            </span>
          </h2>
          <p className="text-slate-400 mb-12 text-lg max-w-2xl">
            Clubs, competitions, and leadership beyond the classroom.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-24"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {extracurriculars.map((item, index) => (
            <motion.div key={index} variants={cardItem}>
              <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-7 hover:border-emerald-400/40 transition-all duration-300 group h-full">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  {item.date && (
                    <span className="text-xs text-slate-500 flex items-center gap-1 shrink-0 mt-1">
                      <Calendar size={12} /> {item.date}
                    </span>
                  )}
                </div>
                <p className="text-emerald-400/80 text-sm font-medium mb-3">
                  {item.role}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider between the two sub-sections */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mb-24" />

        {/* Volunteering */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Heart className="text-rose-400" size={32} />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Volunteering
            </span>
          </h2>
          <p className="text-slate-400 mb-12 text-lg max-w-2xl">
            Giving back through community service and mentoring.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {volunteering.map((item, index) => (
            <motion.div key={index} variants={cardItem}>
              <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-7 hover:border-rose-400/40 transition-all duration-300 group h-full">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold group-hover:text-rose-300 transition-colors">
                    {item.title}
                  </h3>
                  {item.date && (
                    <span className="text-xs text-slate-500 flex items-center gap-1 shrink-0 mt-1">
                      <Calendar size={12} /> {item.date}
                    </span>
                  )}
                </div>
                <p className="text-rose-400/80 text-sm font-medium mb-3">
                  {item.role}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gradient Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </div>

      {/* ─── Awards & Certifications ─── */}
      <section className="max-w-7xl mx-auto px-8 py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Award className="text-amber-400" size={32} />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Awards & Certifications
            </span>
          </h2>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {awards.map((item, index) => (
            <motion.div key={index} variants={cardItem}>
              <div className="bg-slate-900/70 border border-white/10 rounded-2xl hover:border-amber-400/40 transition-all duration-300 group">
                <div className="p-6 text-slate-300 font-medium group-hover:text-white transition-colors flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500/60" />
                  {item}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gradient Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>

      {/* ─── Contact Section ─── */}
      <section id="contact" className="max-w-4xl mx-auto px-8 py-28 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Open to AI, Robotics, and Computer Science opportunities.
          </p>

          <div className="flex flex-col items-center gap-5">
            <a href="mailto:kshabbur@gmail.com">
              <button className="flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-base rounded-xl font-semibold shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:-translate-y-0.5">
                <Mail size={18} /> kshabbur@gmail.com
              </button>
            </a>
            <a href="tel:14086625447">
              <button className="flex items-center gap-2 px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-base rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                📞 408-662-5447
              </button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
        <div className="text-center py-10 text-slate-500 text-sm">
          © {new Date().getFullYear()} Shabbur Khan — AI • Robotics • CS
          Portfolio
        </div>
      </footer>
    </div>
  );
}
