"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AgateDesigns() {
  const designImages = [
    {
      src: "/agate-designs/landing-page-desktop.png",
      alt: "Agate Landing Page - Desktop View",
      title: "Landing Page - Desktop",
      description: "Main hero section with gradient background and smart card showcase",
    },
    {
      src: "/agate-designs/landing-page-laptop.png",
      alt: "Agate Landing Page - Laptop Mockup",
      title: "Landing Page - Laptop Mockup",
      description: "Professional mockup showing the landing page on MacBook Air",
    },
    {
      src: "/agate-designs/product-description-gold.png",
      alt: "Gold Smart Card Product Page",
      title: "Gold Smart Card - Product Page",
      description: "Premium gold smart card product showcase with elegant design",
    },
    {
      src: "/agate-designs/product-description-metal.png",
      alt: "Metal Smart Card Product Page",
      title: "Metal Smart Card - Product Page",
      description: "Sleek metal smart card product page with modern aesthetics",
    },
    {
      src: "/agate-designs/cart-standard.png",
      alt: "Shopping Cart - Standard View",
      title: "Shopping Cart",
      description: "Clean shopping cart interface with product management",
    },
    {
      src: "/agate-designs/cart-1.png",
      alt: "Shopping Cart - With Items",
      title: "Cart with Multiple Items",
      description: "Shopping cart showing quantity controls and available products",
    },
    {
      src: "/agate-designs/cart-2.png",
      alt: "Shopping Cart - Updated Quantity",
      title: "Cart - Updated Quantities",
      description: "Cart interface with updated item quantities",
    },
    {
      src: "/agate-designs/cart-empty.png",
      alt: "Empty Shopping Cart",
      title: "Empty Cart State",
      description: "Empty cart state with product recommendations",
    },
    {
      src: "/agate-designs/customer-details-final.png",
      alt: "Customer Information Form",
      title: "Customer Details Form",
      description: "Comprehensive customer information collection form",
    },
    {
      src: "/agate-designs/customer-details-1.png",
      alt: "Customer Details - Logo Options",
      title: "Customer Form - Logo Options",
      description: "Customer form with logo creation options",
    },
    {
      src: "/agate-designs/customer-details-2.png",
      alt: "Customer Details - Checkbox State",
      title: "Customer Form - Checkbox Selected",
      description: "Customer form showing selected logo creation option",
    },
    {
      src: "/agate-designs/order-summary.png",
      alt: "Order Summary and Checkout",
      title: "Order Summary & Checkout",
      description: "Complete checkout flow with payment integration",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2 text-gray-300 hover:text-white hover:bg-gray-800">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Portfolio
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-white">Agate Web Design</h1>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
              onClick={() => window.open("https://www.agateapp.pro/", "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              View Live Site
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Agate Web Design Showcase</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            A comprehensive look at the Agate platform design - from landing pages to checkout flows. This project
            showcases modern web design principles with a focus on user experience and conversion optimization.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Web Design</span>
            <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">E-commerce</span>
            <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Dark Theme</span>
            <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Responsive</span>
            <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Conversion Focused</span>
          </div>
        </div>
      </section>

      {/* Design Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12">
            {designImages.map((image, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                <div className="p-6 border-b border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
                  <p className="text-gray-400">{image.description}</p>
                </div>
                <div className="p-6">
                  <div className="w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-700">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Interested in Similar Work?</h2>
          <p className="text-lg text-gray-300 mb-8">
            I specialize in creating conversion-focused designs that combine beautiful aesthetics with seamless user
            experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="gap-2 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open("mailto:shoremiayomide13@gmail.com", "_blank")}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
              onClick={() => window.open("https://www.agateapp.pro/", "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              View Live Site
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2026 Soremi Ayomide. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
