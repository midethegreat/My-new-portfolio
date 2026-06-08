"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function HealthcareRecruitmentShowcase() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="gap-2 text-gray-300 hover:text-white hover:bg-gray-800"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
            <h1 className="text-xl font-bold text-white">Healthcare Recruitment Platform</h1>
            <div className="w-20" /> {/* Spacer for centering */}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Healthcare Recruitment Platform</h1>
          <p className="text-xl text-gray-300 mb-6">
            Comprehensive job hunting platform connecting healthcare professionals with leading employers
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              Healthcare
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              Job Platform
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              Recruitment
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              Professional Network
            </Badge>
            <Badge className="bg-orange-600 text-white">In Progress</Badge>
          </div>
        </div>
      </section>

      {/* Design Showcase */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Design Showcase</h2>

          <div className="space-y-16">
            {/* Landing Page */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Homepage Design</CardTitle>
                <CardDescription className="text-gray-400">
                  Main landing page featuring hero section, job search functionality, process flow, benefits showcase,
                  job categories, and client testimonials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/healthcare-recruitment/landing-page.png"
                    alt="Healthcare Recruitment Landing Page"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Services Page */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Services Overview</CardTitle>
                <CardDescription className="text-gray-400">
                  Comprehensive services page showcasing offerings for both healthcare professionals and employers, with
                  clear value propositions and call-to-action sections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/healthcare-recruitment/services.png"
                    alt="Healthcare Recruitment Services Page"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>

            {/* About Page */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">About Us Page</CardTitle>
                <CardDescription className="text-gray-400">
                  Company information page featuring mission, values, detailed service descriptions, and recruitment
                  process overview with professional testimonials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/healthcare-recruitment/about.png"
                    alt="Healthcare Recruitment About Page"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Blog Main Page */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Blog & Resources Hub</CardTitle>
                <CardDescription className="text-gray-400">
                  Content hub featuring industry insights, featured articles, upcoming events, and professional success
                  stories for healthcare recruitment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/healthcare-recruitment/blog-main.png"
                    alt="Healthcare Recruitment Blog Main Page"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Blog Post Page */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Detailed Blog Post</CardTitle>
                <CardDescription className="text-gray-400">
                  In-depth article page with comprehensive content about healthcare resume best practices, including
                  detailed tips and related article recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/healthcare-recruitment/blog-post.png"
                    alt="Healthcare Recruitment Blog Post"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Summary */}
          <div className="mt-16 text-center">
            <Card className="bg-gray-800 border-gray-700 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Project Overview</h3>
                <p className="text-gray-300 mb-6">
                  This healthcare recruitment platform represents a comprehensive solution for connecting medical
                  professionals with leading healthcare employers. The design emphasizes trust, professionalism, and
                  ease of use while providing robust functionality for job searching, application tracking, and career
                  development resources.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    5 Page Designs
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Professional Layout
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Healthcare Focus
                  </Badge>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    Content Strategy
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
