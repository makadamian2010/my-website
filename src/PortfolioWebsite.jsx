import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight, Bot, BrainCircuit, BriefcaseBusiness, Code2, Cpu,
  ExternalLink, Github, Globe2, Linkedin, Mail, Menu, Network,
  Rocket, ShieldCheck, Sparkles, TerminalSquare, X, Zap
} from "lucide-react";

const projects = [
  {
    title: "Project Abyss",
    type: "3D Web Hackathon",
    text: "Immersive interactive web experience combining 3D visuals, storytelling, and a mission-driven technology concept.",
    tags: ["3D Web", "Frontend", "Interactive Design", "Hackathon"],
    icon: Globe2
  },
  {
    title: "Skyward Bound",
    type: "FTC Robotics",
    text: "Competition robotics work spanning autonomous routines, tele-op systems, mechanisms, sensors, and iterative engineering.",
    tags: ["Robotics", "Autonomous", "Sensors", "Engineering"],
    icon: Bot
  },
  {
    title: "Trustworthy AI for Seizure Detection",
    type: "AI + Cybersecurity Research",
    text: "Research on noisy physiological inputs, false AI predictions, and multi-sensor confidence-aware systems for epilepsy wearables.",
    tags: ["AI", "Wearables", "Cybersecurity", "Research"],
    icon: BrainCircuit
  },
  {
    title: "RoboShine 0.8",
    type: "Line-Following Robot",
    text: "Sensor-driven robot using left, center, and right readings to follow a path and test control logic and calibration.",
    tags: ["Robotics", "Embedded", "Control", "Sensors"],
    icon: Cpu
  },
  {
    title: "SoccerHub",
    type: "Live Sports Platform",
    text: "Responsive sports platform for scores, schedules, standings, and team statistics in one clean experience.",
    tags: ["React", "API", "Responsive UI"],
    icon: Code2,
    link: "https://soccerhub.shop/"
  },
  {
    title: "Shia Prayer Time App",
    type: "Utility Web App",
    text: "Mobile-friendly prayer-time experience with daily timing, duas, and calendar features.",
    tags: ["Web App", "API", "Mobile"],
    icon: TerminalSquare,
    link: "https://timeforprayer.space/"
  }
];

const experiences = [
  {
    title: "MediSec Fellowship",
    role: "AI + Cybersecurity Research",
    date: "2026",
    text: "Researched trustworthy AI in seizure-detection wearables, contributed to work on data integrity and cybersecurity risks, and presented the research online."
  },
  {
    title: "MTC Internship",
    role: "Research + Capstone",
    date: "Summer 2026",
    text: "Completed structured program sessions and independent capstone research focused on technical research, synthesis, and presentation."
  },
  {
    title: "Beaver Works CRE[AT]E Challenge",
    role: "Team CFC",
    date: "2026",
    text: "Worked with a team and mentor on engineering design, prototyping, collaboration, and technical problem solving."
  },
  {
    title: "ElevatCH Python",
    role: "Python Instructor",
    date: "2025–2026",
    text: "Prepared beginner-friendly Python lessons and taught multiple in-person classes, combining coding fundamentals with technical communication."
  }
];

const tracks = [
  ["Artificial Intelligence", "ML • Computer Vision • Trustworthy AI", BrainCircuit],
  ["Robotics", "Autonomy • Sensors • FTC • Prototyping", Bot],
  ["Cybersecurity", "Secure Systems • Risk • Resilience", ShieldCheck],
  ["Software", "Python • C++ • JavaScript • Algorithms", Code2],
  ["Web", "React • APIs • Responsive Interfaces", Globe2],
  ["Engineering", "CAD • Hardware • Systems Thinking", Cpu]
];

const skills = [
  "Python","C++","JavaScript","React","HTML/CSS","APIs","Machine Learning",
  "Computer Vision","Robotics","Arduino","CAD","3D Printing","Git/GitHub",
  "Responsive Design","Algorithms","Technical Research"
];

const fade = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: .55 } }
};

function TechCore() {
  return (
    <div className="tech-core" aria-hidden="true">
      <div className="grid-floor" />
      <div className="orbit orbit-a" />
      <div className="orbit orbit-b" />
      <div className="orbit orbit-c" />
      <div className="core-center"><Cpu size={42}/><span>build()</span></div>
      <div className="chip chip-ai"><BrainCircuit size={16}/> AI</div>
      <div className="chip chip-robot"><Bot size={16}/> Robotics</div>
      <div className="chip chip-cyber"><ShieldCheck size={16}/> Cyber</div>
      <div className="chip chip-code"><Code2 size={16}/> Software</div>
    </div>
  );
}

export default function PortfolioWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = [...document.querySelectorAll("section[id]")];
    const obs = new IntersectionObserver((entries) => {
      const hit = entries.find(e => e.isIntersecting);
      if (hit) setActive(hit.target.id);
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const nav = [["home","Home"],["work","Work"],["experience","Experience"],["skills","Skills"],["contact","Contact"]];

  return (
    <main className="site-shell">
      <div className="orb orb-1"/><div className="orb orb-2"/><div className="orb orb-3"/>

      <nav className="top-nav">
        <button className="brand" onClick={() => go("home")}>
          <span className="brand-mark">SK</span>
          <span><strong>Shabbur Khan</strong><small>engineering portfolio</small></span>
        </button>

        <div className="desktop-nav">
          {nav.map(([id,label]) => (
            <button key={id} className={active===id ? "active":""} onClick={() => go(id)}>{label}</button>
          ))}
        </div>

        <div className="nav-actions">
          <a href="https://github.com/makadamian2010" target="_blank" rel="noreferrer"><Github size={18}/></a>
          <a href="https://www.linkedin.com/in/shabbur-khan-16a792363/" target="_blank" rel="noreferrer"><Linkedin size={18}/></a>
          <button className="menu-btn" onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>

        {menuOpen && <div className="mobile-menu">{nav.map(([id,label]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</div>}
      </nav>

      <section id="home" className="hero wrap">
        <motion.div
          initial={reduceMotion ? false : { opacity:0, y:24 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:.7 }}
          className="hero-copy"
        >
          <div className="status"><span/> Open to tech internships & opportunities</div>
          <p className="kicker">AI • ROBOTICS • CYBERSECURITY • SOFTWARE</p>
          <h1>I build technology that <span>thinks, moves, and solves.</span></h1>
          <p className="hero-sub">
            Student engineer and developer exploring intelligent systems, autonomous robotics,
            secure technology, and interactive software — with a focus on turning ideas into real, usable projects.
          </p>
          <div className="actions">
            <button className="primary" onClick={() => go("work")}>Explore my work <ArrowUpRight size={18}/></button>
            <a className="secondary" href="mailto:kshabbur@gmail.com"><Mail size={18}/> Contact me</a>
          </div>
          <div className="hero-meta">
            <span><Zap size={15}/> AI + Robotics</span>
            <span><Network size={15}/> Systems mindset</span>
            <span><Globe2 size={15}/> Web + software</span>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity:0, scale:.94 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:.8, delay:.08 }}
          className="hero-visual"
        >
          <TechCore/>
        </motion.div>
      </section>

      <section className="stats wrap">
        {[["6","Tech tracks"],["6+","Featured projects"],["4","Programs + experiences"],["100%","Mobile ready"]].map(([n,l]) =>
          <div key={l}><strong>{n}</strong><span>{l}</span></div>
        )}
      </section>

      <section id="work" className="wrap section">
        <motion.div className="section-head" variants={fade} initial="hidden" whileInView="visible" viewport={{once:true}}>
          <div><p>01 / SELECTED WORK</p><h2>Projects across the <span>tech stack.</span></h2></div>
          <p>A mix of research, robotics, interactive web experiences, and software products that show how I think, build, and iterate.</p>
        </motion.div>

        <div className="projects">
          {projects.map((p,i) => {
            const Icon = p.icon;
            return (
              <motion.article key={p.title} variants={fade} initial="hidden" whileInView="visible" viewport={{once:true, amount:.2}} whileHover={{y:-8}} className="project-card">
                <div className="project-top"><div className="project-icon"><Icon size={24}/></div><span>0{i+1}</span></div>
                <p className="eyebrow">{p.type}</p>
                <h3>{p.title}</h3>
                <p className="copy">{p.text}</p>
                <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                {p.link && <a className="project-link" href={p.link} target="_blank" rel="noreferrer">View project <ExternalLink size={15}/></a>}
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="experience" className="wrap section">
        <motion.div className="section-head" variants={fade} initial="hidden" whileInView="visible" viewport={{once:true}}>
          <div><p>02 / EXPERIENCE + PROGRAMS</p><h2>Learning by <span>doing.</span></h2></div>
          <p>Research, engineering challenges, teaching, and internship experience connecting technical skills to real teams and real problems.</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((e) => (
            <motion.article key={e.title} variants={fade} initial="hidden" whileInView="visible" viewport={{once:true, amount:.3}} className="timeline-card">
              <div className="timeline-icon"><BriefcaseBusiness size={20}/></div>
              <div>
                <div className="timeline-row"><div><span>{e.role}</span><h3>{e.title}</h3></div><time>{e.date}</time></div>
                <p>{e.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="wrap section">
        <motion.div className="section-head" variants={fade} initial="hidden" whileInView="visible" viewport={{once:true}}>
          <div><p>03 / TECHNICAL RANGE</p><h2>One portfolio. <span>Multiple disciplines.</span></h2></div>
          <p>I like working where software meets hardware — and where AI, security, product design, and engineering overlap.</p>
        </motion.div>

        <div className="track-grid">
          {tracks.map(([title,detail,Icon]) => (
            <motion.article key={title} variants={fade} initial="hidden" whileInView="visible" viewport={{once:true, amount:.3}} className="track-card">
              <div><Icon size={23}/></div><h3>{title}</h3><p>{detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="skill-cloud">{skills.map(s => <span key={s}>{s}</span>)}</div>
      </section>

      <section className="wrap vision">
        <div className="vision-card">
          <div className="signal"><div/><div/><div/><Sparkles size={36}/></div>
          <div><p className="eyebrow">WHAT I’M BUILDING TOWARD</p><h2>Intelligent systems that feel <span>useful, secure, and human.</span></h2>
          <p>I’m especially interested in AI/ML, robotics, cybersecurity, autonomous systems, full-stack software, computer vision, and engineering projects that connect code to the physical world.</p></div>
        </div>
      </section>

      <section id="contact" className="wrap contact">
        <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{once:true}} className="contact-card">
          <p className="eyebrow">04 / LET’S CONNECT</p>
          <h2>Looking for a builder who’s <span>always learning?</span></h2>
          <p>I’m open to internships, research opportunities, engineering programs, and collaborations across AI, robotics, cybersecurity, software, and web development.</p>
          <div className="actions centered">
            <a className="primary" href="mailto:kshabbur@gmail.com"><Mail size={18}/> Email me</a>
            <a className="secondary" href="https://www.linkedin.com/in/shabbur-khan-16a792363/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
            <a className="secondary" href="https://github.com/makadamian2010" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
          </div>
        </motion.div>
      </section>

      <footer className="wrap footer">
        <div><strong>Shabbur Khan</strong><span>AI • Robotics • Cybersecurity • Software</span></div>
        <span>© {new Date().getFullYear()} Built to keep evolving.</span>
      </footer>
    </main>
  );
}
