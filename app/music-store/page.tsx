"use client"

import { ArrowLeft, Play, Heart, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MusicStoreShowcase() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="container mx-auto max-w-4xl flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.history.back()}
            className="text-gray-300 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Mide Music Store</h1>
            <p className="text-gray-400">Music Streaming Application Design</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl p-6">
        {/* Project Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Mide is a modern music streaming application featuring a sleek dark interface, personalized recommendations,
            and comprehensive music discovery features. The design emphasizes user engagement through intuitive
            navigation, beautiful album artwork displays, and seamless playback controls.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-2">Platform</h3>
              <p className="text-gray-300">Mobile Application</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-2">Category</h3>
              <p className="text-gray-300">Music Streaming</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-2">Design Focus</h3>
              <p className="text-gray-300">User Experience</p>
            </div>
          </div>
        </div>

        {/* Design Screens */}
        <div className="space-y-12">
          {/* Homepage */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Homepage & Discovery</h3>
                <p className="text-gray-300 mb-4">
                  The main interface features personalized content with "Recently Played" albums, "New Release"
                  highlights, and "Your Favorite Artists" sections. The dark theme creates an immersive music experience
                  while maintaining excellent readability.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Personalized music recommendations</li>
                  <li>• Recently played history tracking</li>
                  <li>• New release discovery</li>
                  <li>• Favorite artists quick access</li>
                  <li>• Bottom navigation for easy browsing</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-auto">
                  <Image
                    src="/music-store/homepage.png"
                    alt="Mide Music Store Homepage"
                    width={300}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Artist Detail */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <div className="w-64 h-auto">
                  <Image
                    src="/music-store/artist-detail.png"
                    alt="Artist Detail Page"
                    width={300}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Artist Profile & Popular Songs</h3>
                <p className="text-gray-300 mb-4">
                  Detailed artist pages showcase band photos, monthly listener statistics, and popular tracks with play
                  counts. The design emphasizes visual hierarchy with clear typography and engaging imagery that
                  represents the artist's brand.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• High-quality artist photography</li>
                  <li>• Monthly listener statistics</li>
                  <li>• Popular songs with play counts</li>
                  <li>• Follow functionality for fans</li>
                  <li>• Artist recommendation system</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Music Player */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Music Player Interface</h3>
                <p className="text-gray-300 mb-4">
                  The full-screen music player creates an immersive listening experience with large album artwork,
                  intuitive playback controls, and live lyrics display. The interface prioritizes the music experience
                  while maintaining easy access to essential controls.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Full-screen album artwork display</li>
                  <li>• Intuitive playback controls</li>
                  <li>• Real-time lyrics integration</li>
                  <li>• Progress bar with time indicators</li>
                  <li>• Shuffle and repeat functionality</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-auto">
                  <Image
                    src="/music-store/music-player.png"
                    alt="Music Player Interface"
                    width={300}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-12 bg-gray-800 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Design Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Seamless Playback</h4>
              <p className="text-gray-400 text-sm">Intuitive music controls with smooth transitions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Personal Library</h4>
              <p className="text-gray-400 text-sm">Favorite artists and personalized recommendations</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Music Discovery</h4>
              <p className="text-gray-400 text-sm">Advanced search and recommendation algorithms</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">User Profiles</h4>
              <p className="text-gray-400 text-sm">Personalized music experience and social features</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
