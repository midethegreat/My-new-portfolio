"use client";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Phone,
  MapPin,
  Menu,
  X,
  Zap,
  Globe,
  Terminal,
  Layers,
  Code2,
  Cpu,
  Palette,
  Layout,
  MessageSquare,
  ArrowRight,
  Download,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState("design");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen bg-[#000319] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}
    >
      {/* Radial Gradient Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-900/10 blur-[100px]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <nav className="flex items-center justify-between bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
            <h1 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Soremi Ayomide
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute top-24 left-4 right-4 bg-[#000319]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col p-6 gap-4">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-lg font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20">
        {/* Hero Section */}
        <section
          id="hero"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8 animate-fade-in">
            <Zap size={14} />
            <span>DYNAMIC WEB MAGIC WITH NEXT.JS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 animate-slide-up">
            Transforming Concepts into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">
              Seamless User Experiences
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg sm:text-xl mb-12 animate-slide-up delay-100">
            Hi! I'm Soremi Ayomide, a Next.js Developer based in Nigeria. <br />
            I build high-performance SaaS products and digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-4 rounded-xl bg-blue-600 font-semibold text-white overflow-hidden transition-all hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              <div className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-[-20deg] -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                See my work <ArrowRight size={18} />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 font-semibold text-white hover:bg-white/10 transition-all active:scale-95"
            >
              Get in touch
            </button>
          </div>
        </section>

        {/* Bento Grid / About Section */}
        <section
          id="about"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 grid-rows-auto gap-4 lg:gap-6">
            {/* Bento Card 1: Collaboration */}
            <div className="md:col-span-2 lg:col-span-3 lg:row-span-2 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors" />
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  I prioritize client collaboration, fostering open
                  communication
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  I believe that the best products are built through
                  partnership. I work closely with my clients to understand
                  their vision and translate it into a digital reality that
                  exceeds expectations.
                </p>
              </div>
              <div className="mt-8 relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-gray-800">
                <Image
                  src="/images/soremi-profile.jpg"
                  alt="Soremi Ayomide"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Bento Card 2: Timezone */}
            <div className="md:col-span-1 lg:col-span-3 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 flex flex-col justify-center group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold">
                  I'm very flexible with time zone communications
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                Working with clients worldwide, I ensure seamless coordination
                regardless of your location.
              </p>
            </div>

            {/* Bento Card 3: Tech Stack */}
            <div className="md:col-span-1 lg:col-span-3 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 flex flex-col group relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/5 blur-[40px] rounded-full" />
              <h3 className="text-xl font-bold mb-6">My tech stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Tailwind",
                  "PostgreSQL",
                  "Figma",
                  "AWS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-400 group-hover:text-white group-hover:border-white/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 4: Passion */}
            <div className="md:col-span-1 lg:col-span-2 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 flex flex-col group">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold">
                Tech enthusiast with a passion for development
              </h3>
            </div>

            {/* Bento Card 5: Currently Building */}
            <div className="md:col-span-2 lg:col-span-2 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 flex flex-col justify-center text-center group">
              <span className="text-gray-500 text-xs font-medium mb-2 uppercase tracking-widest italic">
                The Inside Scoop
              </span>
              <h3 className="text-xl font-bold">
                Currently building a JS Animation library
              </h3>
            </div>

            {/* Bento Card 6: Contact CTA */}
            <div className="md:col-span-3 lg:col-span-2 rounded-3xl bg-blue-600 border border-blue-500/20 p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-blue-700 transition-colors shadow-[0_0_30px_rgba(37,99,235,0.2)]">
              <h3 className="text-xl font-bold mb-4">
                Do you want to start a project together?
              </h3>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2 rounded-lg bg-white text-blue-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Copy my email <Download size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              A small selection of{" "}
              <span className="text-purple-400">recent projects</span>
            </h2>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex bg-white/5 border border-white/10 rounded-xl p-1">
              {["Design", "UI/UX", "Development"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveProjectTab(tab.toLowerCase())}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeProjectTab === tab.toLowerCase()
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {activeProjectTab === "design" &&
              designProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            {activeProjectTab === "uiux" &&
              uiuxProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            {activeProjectTab === "development" &&
              devProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            My <span className="text-purple-400">work experience</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 flex gap-6 items-start group hover:border-blue-500/50 transition-colors"
              >
                <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-blue-400 text-sm mb-3">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Approach Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            My <span className="text-purple-400">approach</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent"
              >
                <div className="h-full bg-[#000319] rounded-[22px] p-8 flex flex-col items-center text-center">
                  <span className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
                    Phase {index + 1}
                  </span>
                  <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section
          id="contact"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          <h2 className="text-4xl sm:text-6xl font-bold mb-8 relative z-10">
            Ready to take <span className="text-purple-400">your</span> digital{" "}
            <br />
            presence to the next level?
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto relative z-10">
            Reach out to me today and let's discuss how I can help you achieve
            your goals.
          </p>
          <button
            onClick={() =>
              window.open("mailto:shoremiayomide13@gmail.com", "_blank")
            }
            className="relative z-10 px-8 py-4 rounded-xl bg-blue-600 font-bold text-white hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2 mx-auto"
          >
            Contact Me Now <ArrowRight size={18} />
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-gray-500 text-sm">
        <p>Copyright © 2026 Soremi Ayomide</p>
        <div className="flex items-center gap-6">
          <button
            onClick={() =>
              window.open("https://github.com/midethegreat", "_blank")
            }
            className="hover:text-white transition-colors"
          >
            <Github size={20} />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ayomide-soremi-3b00ba264/",
                "_blank",
              )
            }
            className="hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </button>
          <button
            onClick={() => window.open("https://wa.link/qx46wi", "_blank")}
            className="hover:text-white transition-colors"
          >
            <MessageSquare size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}

// --- Helper Components & Data ---

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="group rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500">
      <div className="aspect-video relative overflow-hidden bg-gray-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          {project.liveUrl && (
            <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider">
              Live
            </span>
          )}
        </div>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {project.techIcons?.map((Icon: any, i: number) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-blue-400"
              >
                <Icon size={14} />
              </div>
            )) || (
              <div className="w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-blue-400">
                <Code2 size={14} />
              </div>
            )}
          </div>
          <button
            onClick={() =>
              window.open(project.liveUrl || project.designUrl || "#", "_blank")
            }
            className="flex items-center gap-2 text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors"
          >
            Check {project.liveUrl ? "Live Site" : "Design"}{" "}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

const designProjects = [
  {
    title: "Event Flyer Design",
    description:
      "Luxurious golden-themed party flyer for Unboxed Games House event with elegant typography and premium aesthetic.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0054.jpg-WJO8Nw3aEmqgh1sFvd55vGn4RqJgCe.jpeg",
    designUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0054.jpg-WJO8Nw3aEmqgh1sFvd55vGn4RqJgCe.jpeg",
    techIcons: [Palette, Layout],
  },
  {
    title: "Masquerade Party Flyer",
    description:
      "Elegant masquerade party flyer with ornate golden mask design and sophisticated event branding.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0049.jpg-shSZiXFIAKoTIJo7ZfY8e3K3ZK5eSj.jpeg",
    designUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0049.jpg-shSZiXFIAKoTIJo7ZfY8e3K3ZK5eSj.jpeg",
    techIcons: [Palette, Layout],
  },
  {
    title: "Training Program Flyer",
    description:
      "Professional beauty training advertisement featuring traditional African aesthetics and clear pricing structure.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0056.jpg-rc8BdZ14ytNuLT8YDS5UfvDdPEqobV.jpeg",
    designUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0056.jpg-rc8BdZ14ytNuLT8YDS5UfvDdPEqobV.jpeg",
    techIcons: [Palette, Layout],
  },
  {
    title: "Concert Poster Design",
    description:
      "Vibrant concert promotion poster for Elida Almeida with warm color palette and professional event details.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0058.jpg-ku96ZYqruuwGsEJpMOT7zXR9a64zw3.jpeg",
    designUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0058.jpg-ku96ZYqruuwGsEJpMOT7zXR9a64zw3.jpeg",
    techIcons: [Palette, Layout],
  },
];

const uiuxProjects = [
  {
    title: "Agate Web Design",
    description:
      "Modern e-commerce platform design with dark theme and responsive layout for smart card ordering system.",
    image: "/agate-desktop.jpg",
    designUrl: "/agate-designs",
    liveUrl: "https://www.agateapp.pro/",
    techIcons: [Palette, Layout, Globe],
  },
  {
    title: "Music App",
    description:
      "Modern music streaming application with personalized recommendations and immersive player experience.",
    image: "/music-store/homepage.png",
    designUrl: "/music-store",
    techIcons: [Palette, Layout, Cpu],
  },
  {
    title: "Student Dashboard",
    description:
      "Comprehensive educational platform for international students to discover programs and manage applications.",
    image: "/student-dashboard/home.png",
    designUrl: "/student-dashboard",
    techIcons: [Palette, Layout, Layers],
  },
];

const devProjects = [
  {
    title: "Remote Task Manager",
    description:
      "A robust task management solution designed for remote teams with real-time collaboration features.",
    image: "/purple-gradient-task-manager.png",
    liveUrl: "https://remote-task-lovat.vercel.app/",
    githubUrl: "https://github.com/midethegreat/Remote-task.git",
    techIcons: [NextjsIcon, TailwindIcon, Code2],
  },
  {
    title: "Tesla Investment",
    description:
      "A sophisticated financial investment dashboard featuring multiple growth plans and earnings analysis.",
    image: "/modern-ecommerce-website.png",
    liveUrl: "https://tesla-green-nu.vercel.app/",
    githubUrl: "https://github.com/midethegreat/TESLA-frontend.git",
    techIcons: [ReactIcon, TailwindIcon, Cpu],
  },
  {
    title: "Somnia Platform",
    description:
      "High-performance decentralized trading platform on Somnia Testnet with multi-wallet integration.",
    image: "/placeholder.jpg",
    liveUrl: "https://somnia-tawny.vercel.app/",
    githubUrl: "https://github.com/midethegreat/somnia.git",
    techIcons: [NextjsIcon, TypeScriptIcon, Globe],
  },
];

const experiences = [
  {
    title: "Lead Frontend Developer",
    company: "JKoncept",
    description:
      "Leading the development of modern web applications and design systems for various clients.",
    icon: <Code2 size={32} />,
  },
  {
    title: "Software Engineer & Product Designer",
    company: "Freelance",
    description:
      "5 years of experience building high-impact SaaS products and digital solutions.",
    icon: <Cpu size={32} />,
  },
  {
    title: "Product Designer",
    company: "Agate",
    description:
      "Designing the user interface and experience for a smart card ordering system.",
    icon: <Palette size={32} />,
  },
  {
    title: "Full Stack Developer",
    company: "Various Projects",
    description:
      "Specialized in full-stack development, user-centric design, and scalable product architecture.",
    icon: <Layers size={32} />,
  },
];

const phases = [
  {
    title: "Discovery & Planning",
    description:
      "We'll work together to define your goals, target audience, and key functional requirements.",
  },
  {
    title: "Development & Progress Update",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. I keep you updated every step of the way.",
  },
  {
    title: "Deployment & Launch",
    description:
      "This is where the magic happens! Based on the approved design, I'll translate everything into functional code.",
  },
];

function NextjsIcon() {
  return <span className="text-[10px] font-bold">N</span>;
}
function ReactIcon() {
  return <span className="text-[10px] font-bold">R</span>;
}
function TailwindIcon() {
  return <span className="text-[10px] font-bold">T</span>;
}
function TypeScriptIcon() {
  return <span className="text-[10px] font-bold">TS</span>;
}
