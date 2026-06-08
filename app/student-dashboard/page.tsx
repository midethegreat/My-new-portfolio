import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function StudentDashboardDesigns() {
  const designs = [
    {
      title: "Homepage",
      description: "Hero section with course search and discipline categories for international study programs",
      image: "/student-dashboard/home.png",
      category: "Landing Page",
    },
    {
      title: "Programs Listing",
      description: "Search and filter interface showing 1000+ available programs with detailed filtering options",
      image: "/student-dashboard/programs.png",
      category: "Search & Filter",
    },
    {
      title: "Program Details - Overview",
      description: "Detailed program information with tuition fees, duration, campus location, and course modules",
      image: "/student-dashboard/program-detail-1.png",
      category: "Program Details",
    },
    {
      title: "Program Details - Content",
      description: "Program overview with application requirements, fees breakdown, and deadlines",
      image: "/student-dashboard/program-detail-2.png",
      category: "Program Details",
    },
    {
      title: "Program Details - Fees",
      description: "Comprehensive fee structure showing application, accommodation, and tuition costs with deadlines",
      image: "/student-dashboard/program-detail-3.png",
      category: "Program Details",
    },
    {
      title: "Messages Interface",
      description: "Communication hub for connecting with universities including Oxford, NYU, and Stanford",
      image: "/student-dashboard/messages.png",
      category: "Communication",
    },
    {
      title: "Saved Applications",
      description: "Favorites page showing saved university programs with quick application access",
      image: "/student-dashboard/favorites.png",
      category: "User Management",
    },
    {
      title: "Application Tracker",
      description: "Comprehensive application status tracking with payment, review, and acceptance stages",
      image: "/student-dashboard/applications.png",
      category: "Application Management",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg font-semibold">Back to Portfolio</span>
            </Link>
            <h1 className="text-xl font-bold text-white">Student Dashboard Designs</h1>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-500/10 to-red-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-orange-600 text-white">In Progress</Badge>
            <h1 className="text-4xl font-bold mb-4 text-white">Student Dashboard</h1>
            <p className="text-xl text-gray-300 mb-6">
              Comprehensive platform for students to discover, apply, and track applications to international
              universities
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              This educational platform streamlines the study abroad process with intuitive program search, university
              communication tools, application tracking, and personalized dashboards for prospective international
              students.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              Education Platform
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              Study Abroad
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              University Applications
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              Student Portal
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              Responsive Design
            </Badge>
          </div>
        </div>
      </section>

      {/* Designs Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Design Showcase</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {designs.map((design, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader>
                  <div className="w-full h-64 rounded-lg mb-4 overflow-hidden bg-gray-700">
                    <Image
                      src={design.image || "/placeholder.svg"}
                      alt={design.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-orange-600 text-white text-xs">
                      {design.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg">{design.title}</CardTitle>
                  <CardDescription className="text-gray-400">{design.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Project Info */}
          <div className="mt-16 text-center">
            <Card className="bg-gray-800 border-gray-700 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Project Status</h3>
                <p className="text-gray-400 mb-6">
                  This student dashboard project is currently in development. The design system focuses on creating an
                  intuitive experience for international students navigating the complex process of studying abroad,
                  from program discovery to application submission and tracking.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Badge className="bg-orange-600 text-white">In Progress</Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    8 Screens Designed
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2026 Soremi Ayomide. Student Dashboard Design Showcase.</p>
        </div>
      </footer>
    </div>
  )
}
