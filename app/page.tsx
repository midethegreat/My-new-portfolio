"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState("design");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Soremi Ayomide
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                About
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Contact
              </Button>
            </div>

            {/* Mobile Navigation Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </nav>

          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col gap-2 pt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start"
                >
                  About
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection("skills")}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start"
                >
                  Skills
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start"
                >
                  Projects
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 justify-start"
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gray-700">
              <Image
                src="/images/soremi-profile.jpg"
                alt="Soremi Ayomide"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
              Soremi Ayomide
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-2">
              Software Engineer & Product Designer
            </p>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Software Engineer & Product Designer with 5 years of experience
              building amazing SaaS products and digital experiences.
              Specialized in full-stack development, user-centric design, and
              scalable product architecture.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
              onClick={() => window.open("https://wa.link/qx46wi", "_blank")}
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-gray-600 text-gray-400 bg-gray-700 cursor-not-allowed w-full sm:w-auto"
              disabled
            >
              <Github className="w-4 h-4" />
              View GitHub
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Nigeria
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Available for work
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-base sm:text-lg mb-4 text-gray-300">
                I'm a versatile Software Engineer & Product Designer with 5
                years of experience building high-impact SaaS products and
                digital solutions. I bridge the gap between design and
                engineering, creating products that are not only visually
                stunning but also technically robust and scalable.
              </p>
              <p className="text-gray-400 mb-6">
                My expertise lies in full-stack development, user experience
                design, and product strategy. I am passionate about building
                intuitive tools that solve real-world problems, optimizing
                performance, and leading cross-functional teams to deliver
                exceptional software products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/ayomide-soremi-3b00ba264/",
                      "_blank",
                    )
                  }
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-gray-600 text-gray-400 bg-gray-700 cursor-not-allowed"
                  disabled
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </div>
            </div>
            <div>
              <div className="bg-gray-700/50 rounded-lg p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Experience</span>
                    <span className="text-white">5 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">SaaS Products Built</span>
                    <span className="text-white">10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Technologies Mastered</span>
                    <span className="text-white">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Design Systems Created
                    </span>
                    <span className="text-white">5+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
            Skills & Tools
          </h2>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                Product Design & Strategy
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  Figma
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  User Experience (UX)
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  User Interface (UI)
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  Design Systems
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  Prototyping
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  User Research
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  Product Strategy
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  Information Architecture
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  SaaS Design
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  Interaction Design
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  Visual Design
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  A/B Testing
                </Badge>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                Software Engineering
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  React
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  Node.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  PostgreSQL
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  Tailwind CSS
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  GraphQL
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  REST APIs
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  AWS
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  Docker
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  Git
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  CI/CD
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  Unit Testing
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-700 text-gray-200 hover:bg-gray-600"
                >
                  System Architecture
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
            Featured Projects
          </h2>

          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-2 w-full max-w-md sm:max-w-2xl border border-gray-700/50">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <Button
                  variant={activeProjectTab === "design" ? "default" : "ghost"}
                  size="default"
                  onClick={() => setActiveProjectTab("design")}
                  className={`h-12 text-sm font-medium transition-all duration-200 ${
                    activeProjectTab === "design"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-[1.02]"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50 border border-transparent hover:border-gray-600"
                  }`}
                >
                  Design Projects
                </Button>
                <Button
                  variant={activeProjectTab === "uiux" ? "default" : "ghost"}
                  size="default"
                  onClick={() => setActiveProjectTab("uiux")}
                  className={`h-12 text-sm font-medium transition-all duration-200 ${
                    activeProjectTab === "uiux"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-[1.02]"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50 border border-transparent hover:border-gray-600"
                  }`}
                >
                  UI/UX Projects
                </Button>
                <Button
                  variant={
                    activeProjectTab === "development" ? "default" : "ghost"
                  }
                  size="default"
                  onClick={() => setActiveProjectTab("development")}
                  className={`h-12 text-sm font-medium transition-all duration-200 ${
                    activeProjectTab === "development"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-[1.02]"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50 border border-transparent hover:border-gray-600"
                  }`}
                >
                  Web Development
                </Button>
              </div>
            </div>
          </div>

          {/* Design Projects */}
          {activeProjectTab === "design" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Unboxed Games House Event Flyer */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-yellow-600 to-orange-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0054.jpg-WJO8Nw3aEmqgh1sFvd55vGn4RqJgCe.jpeg"
                      alt="Unboxed Games House Event Flyer"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    Event Flyer Design
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Luxurious golden-themed party flyer for Unboxed Games House
                    event with elegant typography and premium aesthetic.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0054.jpg-WJO8Nw3aEmqgh1sFvd55vGn4RqJgCe.jpeg",
                          "_blank",
                        )
                      }
                    >
                      View Design
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Mask On Party Flyer */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-yellow-600 to-amber-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0049.jpg-shSZiXFIAKoTIJo7ZfY8e3K3ZK5eSj.jpeg"
                      alt="Mask On Party Flyer"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    Masquerade Party Flyer
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Elegant masquerade party flyer with ornate golden mask
                    design and sophisticated event branding.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0049.jpg-shSZiXFIAKoTIJo7ZfY8e3K3ZK5eSj.jpeg",
                          "_blank",
                        )
                      }
                    >
                      View Design
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Formation Professional Training */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-orange-600 to-yellow-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0056.jpg-rc8BdZ14ytNuLT8YDS5UfvDdPEqobV.jpeg"
                      alt="Formation Professional Training"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    Training Program Flyer
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Professional beauty training advertisement featuring
                    traditional African aesthetics and clear pricing structure.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0056.jpg-rc8BdZ14ytNuLT8YDS5UfvDdPEqobV.jpeg",
                          "_blank",
                        )
                      }
                    >
                      View Design
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Elida Almeida Concert Poster */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-orange-600 to-red-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0058.jpg-ku96ZYqruuwGsEJpMOT7zXR9a64zw3.jpeg"
                      alt="Elida Almeida Concert Poster"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    Concert Poster Design
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Vibrant concert promotion poster for Elida Almeida with warm
                    color palette and professional event details.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0058.jpg-ku96ZYqruuwGsEJpMOT7zXR9a64zw3.jpeg",
                          "_blank",
                        )
                      }
                    >
                      View Design
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Graduation Congratulations */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0051.jpg-qpcUmHPdTnhpcPh40WC46kcv5kjimt.jpeg"
                      alt="Graduation Congratulations"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    Graduation Design
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Inspirational graduation congratulations design with
                    motivational messaging and celebratory aesthetic.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0051.jpg-qpcUmHPdTnhpcPh40WC46kcv5kjimt.jpeg",
                          "_blank",
                        )
                      }
                    >
                      View Design
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Who Wears The Crown */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-yellow-600 to-amber-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0050.jpg-po1tXhrjPG9pD4sNORM4mxQpnGttmk.jpeg"
                      alt="Who Wears The Crown"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    Pageant Poster
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Elegant pageant poster featuring a diamond crown in mystical
                    forest setting with luxury branding.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0050.jpg-po1tXhrjPG9pD4sNORM4mxQpnGttmk.jpeg",
                          "_blank",
                        )
                      }
                    >
                      View Design
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* JKoncept Design Services */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0057.jpg-CDOH9VVQ7i2GspydOfIhBfj2dj8JRg.jpeg"
                      alt="JKoncept Design Services"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    Service Advertisement
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Vibrant design services advertisement with clear pricing
                    packages and engaging visual presentation.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0057.jpg-CDOH9VVQ7i2GspydOfIhBfj2dj8JRg.jpeg",
                          "_blank",
                        )
                      }
                    >
                      View Design
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* University Campaign Poster */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-green-600 to-emerald-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0052.jpg-lVJZHZ48ddp46Xm3rFiPObYOsmRAsm.jpeg"
                      alt="University Campaign Poster"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    Campaign Poster
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Professional university campaign poster for Social Director
                    position with clean typography and institutional branding.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0052.jpg-lVJZHZ48ddp46Xm3rFiPObYOsmRAsm.jpeg",
                          "_blank",
                        )
                      }
                    >
                      View Design
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Bitcoin Trading Advertisement */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-green-500 to-lime-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0055.jpg-i6ia3aaMfOWteWNphVkP0FKh0fVwTo.jpeg"
                      alt="Bitcoin Trading Advertisement"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    Crypto Trading Ad
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Dynamic cryptocurrency trading advertisement with energetic
                    design and clear call-to-action messaging.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0055.jpg-i6ia3aaMfOWteWNphVkP0FKh0fVwTo.jpeg",
                          "_blank",
                        )
                      }
                    >
                      View Design
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Call of Duty Gaming Poster */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-green-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0053.jpg-yoxdz0l9doEskSdJ4bIbC1zfQ9DTlV.jpeg"
                      alt="Call of Duty Gaming Poster"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    Gaming Poster
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Dark, military-themed gaming poster for Call of Duty: Modern
                    Warfare II with dramatic visual effects.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250827-WA0053.jpg-yoxdz0l9doEskSdJ4bIbC1zfQ9DTlV.jpeg",
                          "_blank",
                        )
                      }
                    >
                      View Design
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-27%20at%2017.38.34_de977305.jpg-xsA0bMgApTgHT1pmnDZW31BGXrJg3Q.jpeg"
                      alt="Fiesta Brilla Karaoke Movie Night"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    University Event Flyer
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Vibrant blue-themed event flyer for Fiesta Brilla karaoke
                    and movie night featuring 3D golden typography and
                    entertainment graphics.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-27%20at%2017.38.34_de977305.jpg-xsA0bMgApTgHT1pmnDZW31BGXrJg3Q.jpeg",
                          "_blank",
                        )
                      }
                    >
                      View Design
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-27%20at%2017.38.33_7d89b0e1.jpg-eHKMbnON42mu6mzrLVB6lxGpgL65L0.jpeg"
                      alt="Fiesta Brilla Event Schedule"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    Event Schedule Design
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Comprehensive weekly event schedule for university hall week
                    featuring detailed programming and trophy graphics.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-27%20at%2017.38.33_7d89b0e1.jpg-eHKMbnON42mu6mzrLVB6lxGpgL65L0.jpeg",
                          "_blank",
                        )
                      }
                    >
                      View Design
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* UI/UX Projects */}
          {activeProjectTab === "uiux" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Agate Web Design */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="/agate-desktop.jpg"
                      alt="Agate Web Design"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-white">
                      Agate Web Design
                    </CardTitle>
                    <Badge className="bg-green-600 text-white">Live</Badge>
                  </div>
                  <CardDescription className="text-gray-400 mb-4">
                    Modern e-commerce platform design with dark theme and
                    responsive layout for smart card ordering system.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() => window.open("/agate-designs", "_blank")}
                    >
                      View Designs
                    </Button>
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() =>
                        window.open("https://www.agateapp.pro/", "_blank")
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Live
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Music App */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-teal-600 to-blue-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="/music-store/homepage.png"
                      alt="Music App"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">Music App</CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Modern music streaming application with personalized
                    recommendations and immersive player experience.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() => window.open("/music-store", "_blank")}
                    >
                      View Designs
                    </Button>
                    <Button
                      size="sm"
                      disabled
                      className="bg-gray-600 text-gray-400 cursor-not-allowed"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Live
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Student Dashboard */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-cyan-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="/student-dashboard/home.png"
                      alt="Student Dashboard"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-white">
                      Student Dashboard
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-600 text-white"
                    >
                      In Progress
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400 mb-4">
                    Comprehensive educational platform for international
                    students to discover programs and manage applications.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open("/student-dashboard", "_blank")
                      }
                    >
                      View Designs
                    </Button>
                    <Button
                      size="sm"
                      disabled
                      className="bg-gray-600 text-gray-400 cursor-not-allowed"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Live
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Phebymol */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-pink-600 to-rose-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="/phebymol/homepage.png"
                      alt="Phebymol Bedding Store"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-white">Phebymol</CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-600 text-white"
                    >
                      In Progress
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400 mb-4">
                    Luxury bedding e-commerce store with mobile-first design and
                    comprehensive shopping experience.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() => window.open("/phebymol", "_blank")}
                    >
                      View Designs
                    </Button>
                    <Button
                      size="sm"
                      disabled
                      className="bg-gray-600 text-gray-400 cursor-not-allowed"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Live
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Real Estate Website */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-green-600 to-emerald-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="/bellevivre/homepage.png"
                      alt="Real Estate Website"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-white">
                      Real Estate Website
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-600 text-white"
                    >
                      In Progress
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400 mb-4">
                    Global property rental platform with comprehensive search,
                    booking, and management features.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() => window.open("/bellevivre", "_blank")}
                    >
                      View Designs
                    </Button>
                    <Button
                      size="sm"
                      disabled
                      className="bg-gray-600 text-gray-400 cursor-not-allowed"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Live
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Institution Dashboard */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-orange-600 to-red-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="/institution-dashboard/admin-dashboard.png"
                      alt="Institution Dashboard"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-white">
                      Institution Dashboard
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-600 text-white"
                    >
                      In Progress
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400 mb-4">
                    Educational management platform for institutions to manage
                    programs, applications, and student data.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open("/institution-dashboard", "_blank")
                      }
                    >
                      View Designs
                    </Button>
                    <Button
                      size="sm"
                      disabled
                      className="bg-gray-600 text-gray-400 cursor-not-allowed"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Live
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Job Hunt Landing Page */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-purple-600 to-indigo-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="/healthcare-recruitment/landing-page.png"
                      alt="Job Hunt Landing Page"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-white">
                      Job Hunt Landing Page
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-600 text-white"
                    >
                      In Progress
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400 mb-4">
                    Healthcare recruitment platform connecting medical
                    professionals with leading employers worldwide.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open("/healthcare-recruitment", "_blank")
                      }
                    >
                      View Designs
                    </Button>
                    <Button
                      size="sm"
                      disabled
                      className="bg-gray-600 text-gray-400 cursor-not-allowed"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Web Development Projects */}
          {activeProjectTab === "development" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Remote Task Management Platform */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-indigo-600 to-blue-700 rounded-t-lg overflow-hidden relative">
                    <Image
                      src="/purple-gradient-task-manager.png"
                      alt="Remote Task"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-md border border-white/20">
                          <svg
                            className="w-8 h-8 text-blue-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">Remote Task</h3>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-white">
                      Remote Task Manager
                    </CardTitle>
                    <Badge className="bg-green-600 text-white">Live</Badge>
                  </div>
                  <CardDescription className="text-gray-400 mb-4">
                    A robust task management solution designed for remote teams.
                    Includes real-time collaboration features, progress
                    tracking, and a highly intuitive user interface for maximum
                    productivity.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="text-xs border-gray-700 text-gray-400"
                    >
                      Next.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-gray-700 text-gray-400"
                    >
                      Tailwind
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-gray-700 text-gray-400"
                    >
                      Productivity
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() =>
                        window.open(
                          "https://remote-task-lovat.vercel.app/",
                          "_blank",
                        )
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://github.com/midethegreat/Remote-task.git",
                          "_blank",
                        )
                      }
                    >
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tesla Investment Growth Platform */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-orange-500 to-yellow-600 rounded-t-lg overflow-hidden relative">
                    <Image
                      src="/modern-ecommerce-website.png"
                      alt="Tesla Investment"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-md border border-white/20">
                          <svg
                            className="w-8 h-8 text-orange-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">Tesla Investment</h3>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-white">
                      Tesla Investment Platform
                    </CardTitle>
                    <Badge className="bg-green-600 text-white">Live</Badge>
                  </div>
                  <CardDescription className="text-gray-400 mb-4">
                    A sophisticated financial investment dashboard featuring
                    multiple growth plans, earnings analysis, and a premium
                    dark-themed UI optimized for user conversion.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="text-xs border-gray-700 text-gray-400"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-gray-700 text-gray-400"
                    >
                      Frontend
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-gray-700 text-gray-400"
                    >
                      UI/UX
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() =>
                        window.open(
                          "https://tesla-green-nu.vercel.app/",
                          "_blank",
                        )
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://github.com/midethegreat/TESLA-frontend.git",
                          "_blank",
                        )
                      }
                    >
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Somnia Web3 Trading Platform */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-600 rounded-t-lg overflow-hidden flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <div className="text-center text-white z-20">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-md">
                        <svg
                          className="w-8 h-8 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Somnia</h3>
                      <p className="text-sm text-green-200">
                        Web3 Trading Platform
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-white">
                      Somnia Platform
                    </CardTitle>
                    <Badge className="bg-green-600 text-white">Live</Badge>
                  </div>
                  <CardDescription className="text-gray-400 mb-4">
                    A high-performance decentralized trading platform on Somnia
                    Testnet. Features real-time price tracking, multi-wallet
                    integration, and gamified trading with a sleek, modern UI.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="text-xs border-gray-700 text-gray-400"
                    >
                      Next.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-gray-700 text-gray-400"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-gray-700 text-gray-400"
                    >
                      Web3
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() =>
                        window.open(
                          "https://somnia-tawny.vercel.app/",
                          "_blank",
                        )
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://github.com/midethegreat/somnia.git",
                          "_blank",
                        )
                      }
                    >
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Multilingual Translator */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 rounded-t-lg overflow-hidden flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold">
                        Multilingual Translator
                      </h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    Multilingual Translator
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Advanced translation app supporting 12 languages with
                    text-to-speech, copy functionality, and translation history.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open("/translator", "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Weather Dashboard */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="/weather-dashboard.png"
                      alt="Weather Dashboard"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    Weather Dashboard
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Beautiful weather application with real-time data,
                    forecasts, and interactive maps.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open("/weather", "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Task Management */}
              <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 rounded-t-lg overflow-hidden">
                    <Image
                      src="/purple-gradient-task-manager.png"
                      alt="Task Management"
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2">
                    Task Management
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4">
                    Comprehensive task management application with drag-and-drop
                    functionality and team collaboration.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open("/tasks", "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
              onClick={() => window.open("https://wa.link/qx46wi", "_blank")}
            >
              View More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto px-4">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
              onClick={() =>
                window.open("mailto:shoremiayomide13@gmail.com", "_blank")
              }
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">
                shoremiayomide13@gmail.com
              </span>
              <span className="sm:hidden">Email</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent w-full sm:w-auto"
              onClick={() => window.open("tel:+2349051435773", "_blank")}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+234 9051435773</span>
              <span className="sm:hidden">Call</span>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-gray-500 cursor-not-allowed"
              disabled
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ayomide-soremi-3b00ba264/",
                  "_blank",
                )
              }
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={() =>
                window.open("mailto:shoremiayomide13@gmail.com", "_blank")
              }
            >
              <Mail className="w-4 h-4" />
              Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2026 Soremi Ayomide. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
