"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Droplets, Eye, Search } from "lucide-react"

interface WeatherData {
  location: string
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
  visibility: number
  feelsLike: number
  uvIndex: number
}

export default function WeatherPage() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)

  // Mock weather data for demonstration
  const mockWeatherData: WeatherData = {
    location: "Lagos, Nigeria",
    temperature: 28,
    condition: "Partly Cloudy",
    humidity: 75,
    windSpeed: 12,
    visibility: 10,
    feelsLike: 32,
    uvIndex: 6,
  }

  useEffect(() => {
    // Load default weather for Lagos
    setWeather(mockWeatherData)
  }, [])

  const handleSearch = async () => {
    if (!city.trim()) return

    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setWeather({
        ...mockWeatherData,
        location: city,
        temperature: Math.floor(Math.random() * 20) + 20,
        humidity: Math.floor(Math.random() * 40) + 40,
        windSpeed: Math.floor(Math.random() * 15) + 5,
      })
      setLoading(false)
    }, 1000)
  }

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return <Sun className="w-16 h-16 text-yellow-400" />
      case "cloudy":
      case "partly cloudy":
        return <Cloud className="w-16 h-16 text-gray-400" />
      case "rainy":
        return <CloudRain className="w-16 h-16 text-blue-400" />
      case "snowy":
        return <CloudSnow className="w-16 h-16 text-blue-200" />
      default:
        return <Sun className="w-16 h-16 text-yellow-400" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold">Weather Dashboard</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Search Section */}
        <Card className="mb-8 bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Search Weather</CardTitle>
            <CardDescription className="text-gray-200">
              Enter a city name to get current weather information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Button onClick={handleSearch} disabled={loading} className="bg-blue-600 hover:bg-blue-700">
                <Search className="w-4 h-4 mr-2" />
                {loading ? "Searching..." : "Search"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {weather && (
          <>
            {/* Main Weather Card */}
            <Card className="mb-8 bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{weather.location}</h2>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    {getWeatherIcon(weather.condition)}
                    <div>
                      <div className="text-6xl font-bold text-white">{weather.temperature}°C</div>
                      <div className="text-xl text-gray-200">{weather.condition}</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    Feels like {weather.feelsLike}°C
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Weather Details Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Droplets className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{weather.humidity}%</div>
                  <div className="text-sm text-gray-200">Humidity</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Wind className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{weather.windSpeed} km/h</div>
                  <div className="text-sm text-gray-200">Wind Speed</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Eye className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{weather.visibility} km</div>
                  <div className="text-sm text-gray-200">Visibility</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Sun className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{weather.uvIndex}</div>
                  <div className="text-sm text-gray-200">UV Index</div>
                </CardContent>
              </Card>
            </div>

            {/* 5-Day Forecast */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">5-Day Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-4">
                  {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, index) => (
                    <div key={day} className="text-center">
                      <div className="text-sm text-gray-200 mb-2">{day}</div>
                      <Sun className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-white">
                        {weather.temperature + Math.floor(Math.random() * 6) - 3}°
                      </div>
                      <div className="text-xs text-gray-300">
                        {weather.temperature - 5 + Math.floor(Math.random() * 4)}°
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 bg-black/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">Weather Dashboard by Soremi Ayomide • Built with Next.js</p>
        </div>
      </footer>
    </div>
  )
}
