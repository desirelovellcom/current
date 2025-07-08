"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Download, Github, Shield, Heart, Zap, Users, Wifi, WifiOff, ArrowUpDown, Nfc } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [isKindnessMode, setIsKindnessMode] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      <div className="fixed inset-0 bg-gradient-to-tr from-rose-900/10 via-transparent to-purple-900/10" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center justify-center">
            <Zap className="w-4 h-4 text-black" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Current
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/app" className="text-purple-300 hover:text-white transition-colors">
            Demo
          </Link>
          <Link href="/exchange" className="text-purple-300 hover:text-white transition-colors">
            Exchange
          </Link>
          <Link href="/docs" className="text-purple-300 hover:text-white transition-colors">
            Docs
          </Link>
          <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/20 bg-transparent">
            <Github className="w-4 h-4 mr-2" />
            Open Source
          </Button>
        </div>
      </nav>

      {/* NFC Exchange Banner */}
      <section className="relative z-10 px-6 mb-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/40 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Nfc className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-300">NFC Currency Exchange</h3>
                  <p className="text-sm text-gray-400">Tap to exchange • Powered by Plaid</p>
                </div>
              </div>
              <Link href="/exchange">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  Exchange Now
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Bank-grade security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300">Instant transfers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Nfc className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">NFC tap-to-pay</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 text-purple-300">
            🌈 Now Live on App Stores
          </Badge>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Current
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Decentralized messaging that works <span className="text-purple-400">offline</span>.<br />
            No servers. No accounts. No surveillance.
            <br />
            Just pure, <span className="text-pink-400">kind</span> connection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 rounded-full px-8 py-4"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Download for iOS
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 rounded-full px-8 py-4"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Android
            </Button>
          </div>

          <Link href="/app">
            <Button
              variant="outline"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 rounded-full px-6 bg-transparent"
            >
              Try Web Demo →
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Built for Privacy & Connection
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/20 to-transparent border-purple-500/30 p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <WifiOff className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Offline First</h3>
              <p className="text-gray-400">
                Bluetooth mesh networking keeps you connected even without internet. Messages flow through nearby
                devices.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/20 to-transparent border-cyan-500/30 p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">End-to-End Encrypted</h3>
              <p className="text-gray-400">
                Every message is encrypted on your device. No servers, no logs, no surveillance. Your privacy is
                absolute.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-pink-900/20 to-transparent border-pink-500/30 p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pink-300">Kindness Mode</h3>
              <p className="text-gray-400">
                Send Light tokens of gratitude. Gentle animations for positive messages. Building empathy, one chat at a
                time.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/20 to-transparent border-green-500/30 p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-300">Anonymous by Design</h3>
              <p className="text-gray-400">
                No phone numbers, no emails, no accounts. Choose emoji avatars or stay completely anonymous.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-900/20 to-transparent border-yellow-500/30 p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">WiFi Direct Ready</h3>
              <p className="text-gray-400">
                Enhanced long-range connections coming soon. Mesh networks that span neighborhoods.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-transparent border-blue-500/30 p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                <Nfc className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">NFC Exchange</h3>
              <p className="text-gray-400">
                Tap devices to instantly exchange currencies with bank-grade security powered by Plaid integration.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Kindness Mode Demo */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Experience Kindness Mode
          </h2>

          <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-6">
              <label className="flex items-center space-x-3 cursor-pointer">
                <span className="text-pink-300">Kindness Mode</span>
                <div
                  className={`w-12 h-6 rounded-full transition-all duration-300 ${
                    isKindnessMode ? "bg-gradient-to-r from-pink-500 to-purple-500" : "bg-gray-600"
                  }`}
                  onClick={() => setIsKindnessMode(!isKindnessMode)}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 mt-0.5 ${
                      isKindnessMode ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </label>
            </div>

            {isKindnessMode && (
              <div className="space-y-4 animate-in fade-in duration-500">
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl px-4 py-2 max-w-xs">
                    <p className="text-white">Thank you for being so kind today! ✨</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-800 rounded-2xl px-4 py-2 max-w-xs border border-pink-500/30">
                    <p className="text-pink-300">That means so much! 💖</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse" />
                      <span className="text-xs text-yellow-300">Light received</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <p className="text-gray-400 mt-6">
              Send Light tokens of gratitude. Watch messages glow with kindness. Join the optional #desirelovell feed to
              spread positivity.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Designed with love, privacy, and empathy by <span className="text-purple-400">#desirelovell</span>
          </p>
          <p className="text-sm text-gray-500">
            Inspired by the vision of decentralized communication, reimagined for human connection.
          </p>
        </div>
      </footer>
    </div>
  )
}
