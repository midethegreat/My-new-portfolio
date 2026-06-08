"use client";

import {
  ArrowLeft,
  Github,
  Globe,
  ExternalLink,
  Code2,
  Cpu,
  Palette,
  Layout,
  Layers,
  MapPin,
  Cloud,
  CheckCircle2,
  Languages,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AllProjects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#000319] text-white font-sans selection:bg-blue-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <header className="mb-20">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Explore <span className="text-purple-400">All Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive list of my work, including web applications, design systems, and specialized tools built over the years.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjectsList.map((project, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.status && (
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                      project.status === "Live" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"
                    }`}>
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.techIcons?.map((Icon: any, i: number) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-blue-400">
                        <Icon size={14} />
                      </div>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="flex items-center gap-2 text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const allProjectsList = [
  {
    title: "Campus Ride",
    description: "Ride-hailing platform for campus commutes with real-time tracking and secure wallet integration.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N6q0iVpXzG3T1hJ6yS7bV4uL2m.png",
    link: "https://github.com/midethegreat/Camous-Ride.git",
    status: "Live",
    techIcons: [MapPin, Code2, Globe]
  },
  {
    title: "Multilingual Translator",
    description: "Advanced translation app supporting 12 languages with text-to-speech, copy functionality, and translation history.",
    image: "/placeholder.jpg",
    link: "/translator",
    status: "Live",
    techIcons: [Languages, Code2, Globe]
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather application with real-time data, forecasts, and interactive maps using OpenWeather API.",
    image: "/weather-dashboard.png",
    link: "/weather",
    status: "Live",
    techIcons: [Cloud, Code2, Layers]
  },
  {
    title: "Task Management",
    description: "Comprehensive task management application with drag-and-drop functionality and team collaboration.",
    image: "/purple-gradient-task-manager.png",
    link: "/tasks",
    status: "Live",
    techIcons: [CheckCircle2, Code2, Layout]
  },
  {
    title: "Campus Ride",
    description: "Ride-hailing platform for campus commutes with real-time tracking and secure wallet integration.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N6q0iVpXzG3T1hJ6yS7bV4uL2m.png",
    link: "https://github.com/midethegreat/Camous-Ride.git",
    status: "Live",
    techIcons: [MapPin, Code2, Globe]
  },
  {
    title: "Agate App",
    description: "Modern e-commerce platform for smart card ordering system with immersive dark theme.",
    image: "/agate-desktop.jpg",
    link: "/agate-designs",
    status: "Live",
    techIcons: [Palette, Layout, Globe]
  },
  {
    title: "Somnia Platform",
    description: "Decentralized trading platform on Somnia Testnet with multi-wallet integration.",
    image: "/placeholder.jpg",
    link: "https://somnia-tawny.vercel.app/",
    status: "Live",
    techIcons: [Cpu, Layers, Globe]
  },
  {
    title: "Tesla Investment",
    description: "Financial investment dashboard with multiple growth plans and earnings analysis.",
    image: "/modern-ecommerce-website.png",
    link: "https://tesla-green-nu.vercel.app/",
    status: "Live",
    techIcons: [Cpu, Layout, Globe]
  },
  {
    title: "Student Dashboard",
    description: "Educational platform for international students to manage programs and applications.",
    image: "/student-dashboard/home.png",
    link: "/student-dashboard",
    status: "In Progress",
    techIcons: [Palette, Layout, Layers]
  }
];
