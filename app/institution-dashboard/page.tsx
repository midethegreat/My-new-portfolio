"use client"

export default function InstitutionDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Institution Dashboard</h1>
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              ← Back to Portfolio
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Institution Dashboard</h1>
          <p className="text-xl text-gray-600 mb-6">
            Comprehensive educational management platform for institutions to manage programs, track applications, and
            analyze performance metrics.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Admin Dashboard
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Program Management
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Analytics</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              Student Applications
            </span>
          </div>
        </div>
      </section>

      {/* Design Showcase */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Design Showcase</h2>

          <div className="grid gap-12">
            {/* Admin Dashboard Overview */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Admin Dashboard Overview</h3>
                <p className="text-gray-600">
                  Comprehensive analytics dashboard showing key metrics including active programs, daily users, new
                  applications, and conversion rates. Features interactive charts and real-time data visualization.
                </p>
              </div>
              <div className="p-6">
                <img
                  src="/institution-dashboard/admin-dashboard.png"
                  alt="Institution Dashboard - Admin Overview"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Program Management */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Program Management System</h3>
                <p className="text-gray-600">
                  Complete program management interface allowing institutions to view, edit, and manage all academic
                  programs. Includes status tracking, program details, and bulk operations.
                </p>
              </div>
              <div className="p-6">
                <img
                  src="/institution-dashboard/manage-programs.png"
                  alt="Institution Dashboard - Program Management"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Advanced Search & Filtering</h3>
                <p className="text-gray-600">
                  Powerful search functionality with real-time filtering capabilities. Administrators can quickly find
                  specific programs using keywords and apply various filters for efficient program management.
                </p>
              </div>
              <div className="p-6">
                <img
                  src="/institution-dashboard/program-search.png"
                  alt="Institution Dashboard - Program Search"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Program Management with Actions */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Program Actions & Controls</h3>
                <p className="text-gray-600">
                  Comprehensive program management with action buttons for adding new programs, archiving old ones, and
                  managing program lifecycle. Includes sorting and pagination for large datasets.
                </p>
              </div>
              <div className="p-6">
                <img
                  src="/institution-dashboard/manage-programs-2.png"
                  alt="Institution Dashboard - Program Actions"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Filter and Sort Interface */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Enhanced Filtering Interface</h3>
                <p className="text-gray-600">
                  Advanced filtering and sorting capabilities with intuitive UI controls. Administrators can organize
                  programs by status, level, duration, and other criteria for better data management.
                </p>
              </div>
              <div className="p-6">
                <img
                  src="/institution-dashboard/manage-programs-filter.png"
                  alt="Institution Dashboard - Filter Interface"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Key Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Program Management</h4>
                <p className="text-gray-600 text-sm">
                  Complete CRUD operations for academic programs with status tracking and bulk actions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Analytics Dashboard</h4>
                <p className="text-gray-600 text-sm">
                  Real-time metrics and data visualization for institutional performance tracking.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Application Processing</h4>
                <p className="text-gray-600 text-sm">
                  Streamlined student application review and approval workflow system.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Search & Filter</h4>
                <p className="text-gray-600 text-sm">
                  Advanced search capabilities with multiple filter options for efficient data management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">User Management</h4>
                <p className="text-gray-600 text-sm">
                  Role-based access control for different administrative levels and permissions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Reporting Tools</h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive reporting and export functionality for institutional data analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
