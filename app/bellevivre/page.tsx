export default function BellevivreShowcase() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Bellevivre Ltd - Real Estate Platform</h1>
            <a href="/" className="text-gray-300 hover:text-white transition-colors">
              ← Back to Portfolio
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-6 text-white">Bellevivre Ltd Real Estate Platform</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A comprehensive real estate platform designed for global property rentals and management. Features property
            search, detailed listings, booking systems, and document management for seamless rental experiences.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <span className="bg-orange-600 text-white px-3 py-1 rounded-full">In Progress</span>
            <span>Property Management Platform</span>
            <span>Global Rentals</span>
          </div>
        </div>
      </section>

      {/* Design Gallery */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Design Showcase</h2>

          <div className="grid gap-12">
            {/* Homepage */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Homepage & Property Search</h3>
              <p className="text-gray-400 mb-6">
                Welcome page featuring hero section with property search functionality, popular properties showcase, and
                sections for different user types (tenants, landlords, agents).
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <img src="/bellevivre/homepage.png" alt="Bellevivre Homepage" className="w-full h-auto" />
              </div>
            </div>

            {/* Property Listings */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Property Listings</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive property search results with filtering options, property cards showing key details, and
                pagination for easy browsing through available properties.
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <img src="/bellevivre/property-listings.png" alt="Property Listings Page" className="w-full h-auto" />
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Property Detail Pages</h3>
              <p className="text-gray-400 mb-6">
                Detailed property information including image galleries, property specifications, facilities, landlord
                contact details, booking calendar, and location mapping.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <img
                    src="/bellevivre/property-detail-1.png"
                    alt="Property Detail - Main View"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <img
                    src="/bellevivre/property-detail-2.png"
                    alt="Property Detail - Booking Form"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Room Selection & Booking */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Room Selection & Booking</h3>
              <p className="text-gray-400 mb-6">
                Interactive room selection interface showing availability status with color-coded indicators and
                streamlined booking flow for selected accommodations.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <img src="/bellevivre/room-selection.png" alt="Room Selection Interface" className="w-full h-auto" />
                </div>
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <img
                    src="/bellevivre/property-detail-3.png"
                    alt="Property Detail - Additional View"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Payment & Documentation */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Payment & Document Management</h3>
              <p className="text-gray-400 mb-6">
                Secure payment processing with detailed booking summaries and comprehensive document upload system for
                identity verification and rental agreements.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <img src="/bellevivre/payment-page.png" alt="Payment Processing Page" className="w-full h-auto" />
                </div>
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <img
                    src="/bellevivre/document-upload.png"
                    alt="Document Upload Interface"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Project Overview</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Global property search and filtering</li>
                  <li>• Interactive property detail pages</li>
                  <li>• Room availability and booking system</li>
                  <li>• Secure payment processing</li>
                  <li>• Document upload and verification</li>
                  <li>• Landlord and tenant communication</li>
                  <li>• Location mapping integration</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Design Approach</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Clean, professional interface design</li>
                  <li>• Intuitive navigation and user flow</li>
                  <li>• Responsive design for all devices</li>
                  <li>• Trust-building elements for security</li>
                  <li>• Streamlined booking process</li>
                  <li>• Clear information hierarchy</li>
                  <li>• Accessible color scheme and typography</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">Bellevivre Ltd Real Estate Platform Design - Soremi Ayomide Portfolio</p>
        </div>
      </footer>
    </div>
  )
}
