"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Smartphone,
  Download,
  Github,
  Shield,
  Heart,
  Zap,
  Users,
  Wifi,
  WifiOff,
  ArrowUpDown,
  Nfc,
  Info,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [isKindnessMode, setIsKindnessMode] = useState(false)

  const featureDetails = {
    offline: {
      title: "Offline First Architecture",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Current uses Bluetooth Low Energy (BLE) mesh networking to create resilient communication networks that work
            without internet connectivity.
          </p>
          <div className="space-y-3">
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-300 mb-2">Mesh Topology</h4>
              <p className="text-sm text-gray-400">
                Messages automatically route through nearby devices, creating a self-healing network that adapts to
                device availability.
              </p>
            </div>
            <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-300 mb-2">Store & Forward</h4>
              <p className="text-sm text-gray-400">
                Messages are temporarily stored on intermediate devices and forwarded when the recipient comes online.
              </p>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-green-300 mb-2">Range Extension</h4>
              <p className="text-sm text-gray-400">
                Effective range extends far beyond single device limits through multi-hop routing across the mesh.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    encryption: {
      title: "End-to-End Encryption",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Current implements the Signal Protocol for military-grade encryption with perfect forward secrecy.
          </p>
          <div className="space-y-3">
            <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-300 mb-2">Signal Protocol</h4>
              <p className="text-sm text-gray-400">
                Industry-standard encryption used by Signal, WhatsApp, and other secure messengers.
              </p>
            </div>
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-blue-300 mb-2">Forward Secrecy</h4>
              <p className="text-sm text-gray-400">
                Each message uses unique keys. Even if one key is compromised, past messages remain secure.
              </p>
            </div>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-300 mb-2">No Metadata</h4>
              <p className="text-sm text-gray-400">
                No servers means no logs, no metadata collection, and no surveillance backdoors.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    kindness: {
      title: "Kindness Mode Features",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Kindness Mode transforms digital communication by encouraging empathy and positive interactions.
          </p>
          <div className="space-y-3">
            <div className="bg-pink-900/20 border border-pink-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-pink-300 mb-2">Light Tokens</h4>
              <p className="text-sm text-gray-400">
                Send tokens of gratitude that recipients can collect and share. Each Light represents a moment of
                kindness.
              </p>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-300 mb-2">Gentle Animations</h4>
              <p className="text-sm text-gray-400">
                Positive messages glow softly, creating a calming visual experience that reduces digital stress.
              </p>
            </div>
            <div className="bg-rose-900/20 border border-rose-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-rose-300 mb-2">#desirelovell Feed</h4>
              <p className="text-sm text-gray-400">
                Optional community feed where anonymous acts of kindness are shared to inspire others.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    anonymous: {
      title: "Anonymous by Design",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">True anonymity without compromising functionality or security.</p>
          <div className="space-y-3">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-green-300 mb-2">No Registration</h4>
              <p className="text-sm text-gray-400">
                No phone numbers, emails, or personal information required. Start chatting immediately.
              </p>
            </div>
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-emerald-300 mb-2">Emoji Identities</h4>
              <p className="text-sm text-gray-400">
                Choose from thousands of emoji combinations or remain completely anonymous.
              </p>
            </div>
            <div className="bg-teal-900/20 border border-teal-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-teal-300 mb-2">Ephemeral by Default</h4>
              <p className="text-sm text-gray-400">
                Messages automatically disappear after 24 hours, leaving no permanent digital footprint.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    wifiDirect: {
      title: "WiFi Direct Technology",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Next-generation peer-to-peer networking for extended range and higher bandwidth.
          </p>
          <div className="space-y-3">
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-300 mb-2">Extended Range</h4>
              <p className="text-sm text-gray-400">
                WiFi Direct provides up to 200m range compared to Bluetooth's 10m, enabling neighborhood-scale networks.
              </p>
            </div>
            <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-orange-300 mb-2">Higher Bandwidth</h4>
              <p className="text-sm text-gray-400">
                Support for rich media sharing including photos, videos, and files at WiFi speeds.
              </p>
            </div>
            <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-amber-300 mb-2">Hybrid Networks</h4>
              <p className="text-sm text-gray-400">
                Seamlessly combines Bluetooth and WiFi Direct for optimal coverage and performance.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    nfcExchange: {
      title: "NFC Currency Exchange",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Secure, instant currency exchange using NFC technology and Plaid banking integration.
          </p>
          <div className="space-y-3">
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-blue-300 mb-2">Tap to Exchange</h4>
              <p className="text-sm text-gray-400">
                Simply tap two Current devices together to initiate secure currency exchange transactions.
              </p>
            </div>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-300 mb-2">Plaid Integration</h4>
              <p className="text-sm text-gray-400">
                Bank-grade security with direct integration to over 11,000 financial institutions.
              </p>
            </div>
            <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-indigo-300 mb-2">Real-time Rates</h4>
              <p className="text-sm text-gray-400">
                Live exchange rates with transparent fees and instant settlement to your bank account.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      <div className="fixed inset-0 bg-gradient-to-tr from-rose-900/10 via-transparent to-purple-900/10" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center justify-center">
            <Zap className="w-4 h-4 text-black" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Current
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
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

      {/* Hero Section */}
      <section className="relative z-10 text-center py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 text-purple-300">
            🌈 Now Live on App Stores
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Current
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            Decentralized messaging that works <span className="text-purple-400">offline</span>.<br />
            No servers. No accounts. No surveillance.
            <br />
            Just pure, <span className="text-pink-400">kind</span> connection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 rounded-full px-6 md:px-8 py-3 md:py-4"
            >
              <Smartphone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
              Download for iOS
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 rounded-full px-6 md:px-8 py-3 md:py-4"
            >
              <Download className="w-4 md:w-5 h-4 md:h-5 mr-2" />
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

      {/* NFC Exchange Banner - Mobile Optimized */}
      <section className="relative z-10 px-4 md:px-6 mb-8 md:mb-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/40 p-4 md:p-6 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Nfc className="w-5 md:w-6 h-5 md:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-blue-300">NFC Currency Exchange</h3>
                  <p className="text-xs md:text-sm text-gray-400">Tap to exchange • Powered by Plaid</p>
                </div>
              </div>
              <Link href="/exchange" className="flex-shrink-0">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full md:w-auto">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  Exchange Now
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-sm mt-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Bank-grade security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">Instant transfers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Nfc className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">NFC tap-to-pay</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Built for Privacy & Connection
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-gradient-to-br from-purple-900/20 to-transparent border-purple-500/30 p-4 md:p-6 backdrop-blur-sm group hover:border-purple-400/50 transition-colors">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <WifiOff className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-purple-300">Offline First</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-400 hover:text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Info className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-purple-500/30 text-white max-w-2xl mx-4">
                    <DialogHeader>
                      <DialogTitle className="text-purple-300">{featureDetails.offline.title}</DialogTitle>
                    </DialogHeader>
                    {featureDetails.offline.content}
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                Bluetooth mesh networking keeps you connected even without internet. Messages flow through nearby
                devices.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/20 to-transparent border-cyan-500/30 p-4 md:p-6 backdrop-blur-sm group hover:border-cyan-400/50 transition-colors">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                <Shield className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-cyan-300">End-to-End Encrypted</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cyan-400 hover:text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Info className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-cyan-500/30 text-white max-w-2xl mx-4">
                    <DialogHeader>
                      <DialogTitle className="text-cyan-300">{featureDetails.encryption.title}</DialogTitle>
                    </DialogHeader>
                    {featureDetails.encryption.content}
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                Every message is encrypted on your device. No servers, no logs, no surveillance. Your privacy is
                absolute.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-pink-900/20 to-transparent border-pink-500/30 p-4 md:p-6 backdrop-blur-sm group hover:border-pink-400/50 transition-colors">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-4">
                <Heart className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-pink-300">Kindness Mode</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-pink-400 hover:text-pink-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Info className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-pink-500/30 text-white max-w-2xl mx-4">
                    <DialogHeader>
                      <DialogTitle className="text-pink-300">{featureDetails.kindness.title}</DialogTitle>
                    </DialogHeader>
                    {featureDetails.kindness.content}
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                Send Light tokens of gratitude. Gentle animations for positive messages. Building empathy, one chat at a
                time.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/20 to-transparent border-green-500/30 p-4 md:p-6 backdrop-blur-sm group hover:border-green-400/50 transition-colors">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <Users className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-green-300">Anonymous by Design</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-green-400 hover:text-green-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Info className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-green-500/30 text-white max-w-2xl mx-4">
                    <DialogHeader>
                      <DialogTitle className="text-green-300">{featureDetails.anonymous.title}</DialogTitle>
                    </DialogHeader>
                    {featureDetails.anonymous.content}
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                No phone numbers, no emails, no accounts. Choose emoji avatars or stay completely anonymous.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-900/20 to-transparent border-yellow-500/30 p-4 md:p-6 backdrop-blur-sm group hover:border-yellow-400/50 transition-colors">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-4">
                <Wifi className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-yellow-300">WiFi Direct Ready</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-yellow-400 hover:text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Info className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-yellow-500/30 text-white max-w-2xl mx-4">
                    <DialogHeader>
                      <DialogTitle className="text-yellow-300">{featureDetails.wifiDirect.title}</DialogTitle>
                    </DialogHeader>
                    {featureDetails.wifiDirect.content}
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                Enhanced long-range connections coming soon. Mesh networks that span neighborhoods.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-transparent border-blue-500/30 p-4 md:p-6 backdrop-blur-sm group hover:border-blue-400/50 transition-colors">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                <Nfc className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-blue-300">NFC Exchange</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-400 hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Info className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-blue-500/30 text-white max-w-2xl mx-4">
                    <DialogHeader>
                      <DialogTitle className="text-blue-300">{featureDetails.nfcExchange.title}</DialogTitle>
                    </DialogHeader>
                    {featureDetails.nfcExchange.content}
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                Tap devices to instantly exchange currencies with bank-grade security powered by Plaid integration.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Kindness Mode Demo */}
      <section className="relative z-10 py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Experience Kindness Mode
          </h2>

          <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
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
                    <p className="text-white text-sm md:text-base">Thank you for being so kind today! ✨</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-800 rounded-2xl px-4 py-2 max-w-xs border border-pink-500/30">
                    <p className="text-pink-300 text-sm md:text-base">That means so much! 💖</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse" />
                      <span className="text-xs text-yellow-300">Light received</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <p className="text-gray-400 mt-6 text-sm md:text-base">
              Send Light tokens of gratitude. Watch messages glow with kindness. Join the optional #desirelovell feed to
              spread positivity.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 md:py-12 px-4 md:px-6 border-t border-purple-500/20">
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
