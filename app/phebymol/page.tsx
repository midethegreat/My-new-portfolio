import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PhebymolDesigns() {
  const designs = [
    {
      title: "Homepage",
      description: "Hero section with luxurious bedding messaging, category navigation, and customer testimonials",
      image: "/phebymol/homepage.png",
      category: "Landing Page",
    },
    {
      title: "Product Categories",
      description: "Grid layout showcasing different bedding categories with pricing and product images",
      image: "/phebymol/product-categories.png",
      category: "Product Listing",
    },
    {
      title: "Product Detail - Main",
      description: "Detailed product view with image gallery, pricing, and add to cart functionality",
      image: "/phebymol/product-detail.png",
      category: "Product Page",
    },
    {
      title: "Product Detail - Size Chart",
      description: "Product page with detailed size chart for bedsheets showing dimensions",
      image: "/phebymol/product-detail-size-chart.png",
      category: "Product Page",
    },
    {
      title: "Product Detail - Description",
      description: "Product page with detailed description and material care information",
      image: "/phebymol/product-detail-description.png",
      category: "Product Page",
    },
    {
      title: "Shopping Cart",
      description: "Cart page with item management, quantity controls, and checkout options",
      image: "/phebymol/shopping-cart.png",
      category: "E-commerce",
    },
    {
      title: "Checkout Form",
      description: "Customer information form with shipping and payment options",
      image: "/phebymol/checkout-form.png",
      category: "Checkout",
    },
    {
      title: "Checkout - Filled",
      description: "Completed checkout form with customer details and payment selection",
      image: "/phebymol/checkout-filled.png",
      category: "Checkout",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2 text-gray-300 hover:text-white hover:bg-gray-800">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
            <div className="h-6 w-px bg-gray-700" />
            <h1 className="text-xl font-bold text-white">Phebymol - Bedding E-commerce Design</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="outline" className="border-orange-600 text-orange-400">
              In Progress
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              Mobile Design
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              E-commerce
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-white">Phebymol Bedding Store</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive mobile e-commerce design for luxury bedding products. Features elegant product showcases,
            intuitive navigation, and seamless checkout experience optimized for mobile shopping.
          </p>
        </div>
      </section>

      {/* Design Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Design Screens</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.map((design, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader>
                  <div className="w-full h-96 rounded-lg mb-4 overflow-hidden bg-gray-700">
                    <Image
                      src={design.image || "/placeholder.svg"}
                      alt={design.title}
                      width={400}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white text-lg">{design.title}</CardTitle>
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                      {design.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-400">{design.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Design Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Mobile-first responsive design</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Elegant product showcase layouts</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Intuitive shopping cart experience</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Streamlined checkout process</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Premium brand aesthetic</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span>Platform:</span>
                  <span>Mobile E-commerce</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Design Tool:</span>
                  <span>Figma</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Screen Count:</span>
                  <span>8 Screens</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Status:</span>
                  <span className="text-orange-400">In Progress</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Industry:</span>
                  <span>E-commerce / Retail</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
