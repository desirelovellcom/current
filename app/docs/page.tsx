import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Zap, Heart, WifiOff, Github, ArrowLeft, Lock } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      <div className="fixed inset-0 bg-gradient-to-tr from-rose-900/10 via-transparent to-purple-900/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-purple-300 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Badge className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 text-purple-300">
            Documentation
          </Badge>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Current Documentation
          </h1>
          <p className="text-xl text-gray-300">Technical overview of the decentralized messaging protocol</p>
        </div>

        {/* Architecture Overview */}
        <Card className="bg-gradient-to-br from-purple-900/20 to-transparent border-purple-500/30 p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-300 flex items-center">
            <Zap className="w-6 h-6 mr-2" />
            Architecture Overview
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Current is built on a peer-to-peer Bluetooth mesh network that enables offline messaging without central
              servers. Messages are encrypted end-to-end and routed through nearby devices to reach their destination.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="font-semibold text-cyan-300 mb-2">Mesh Networking</h3>
                <p className="text-sm text-gray-400">
                  Bluetooth Low Energy (BLE) mesh protocol for device discovery and message routing
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="font-semibold text-pink-300 mb-2">Encryption</h3>
                <p className="text-sm text-gray-400">
                  Signal Protocol implementation with forward secrecy and deniable authentication
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Core Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-cyan-900/20 to-transparent border-cyan-500/30 p-6">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Privacy & Security
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• End-to-end encryption using Signal Protocol</li>
              <li>• No central servers or data collection</li>
              <li>• Anonymous identity with emoji avatars</li>
              <li>• Ephemeral messages (24h default)</li>
              <li>• Forward secrecy and deniable authentication</li>
            </ul>
          </Card>

          <Card className="bg-gradient-to-br from-pink-900/20 to-transparent border-pink-500/30 p-6">
            <h3 className="text-xl font-semibold mb-4 text-pink-300 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Kindness Features
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Light tokens for gratitude expression</li>
              <li>• Gentle animations for positive messages</li>
              <li>• Optional #desirelovell kindness feed</li>
              <li>• Synchronicity haptic feedback</li>
              <li>• Community-driven positivity metrics</li>
            </ul>
          </Card>
        </div>

        {/* Technical Specifications */}
        <Card className="bg-gradient-to-br from-gray-900/20 to-transparent border-gray-500/30 p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-300 flex items-center">
            <WifiOff className="w-6 h-6 mr-2" />
            Technical Specifications
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-purple-300 mb-3">Networking</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Bluetooth 5.0+ LE</li>
                <li>Mesh topology</li>
                <li>Auto-discovery</li>
                <li>Multi-hop routing</li>
                <li>WiFi Direct (planned)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-300 mb-3">Encryption</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>Signal Protocol</li>
                <li>X25519 key exchange</li>
                <li>AES-256-GCM</li>
                <li>Double Ratchet</li>
                <li>Forward secrecy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-pink-300 mb-3">Platform</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>iOS 14+</li>
                <li>Android 8+</li>
                <li>React Native</li>
                <li>Rust core</li>
                <li>Open source</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Protocol Details */}
        <Card className="bg-gradient-to-br from-indigo-900/20 to-transparent border-indigo-500/30 p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-indigo-300 flex items-center">
            <Lock className="w-6 h-6 mr-2" />
            Message Protocol
          </h2>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">Message Structure</h4>
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300">
                <div>{"{"}</div>
                <div className="ml-4">"id": "uuid",</div>
                <div className="ml-4">"sender": "public_key_hash",</div>
                <div className="ml-4">"recipient": "public_key_hash",</div>
                <div className="ml-4">"payload": "encrypted_content",</div>
                <div className="ml-4">"timestamp": "unix_timestamp",</div>
                <div className="ml-4">"ttl": 86400,</div>
                <div className="ml-4">"signature": "ed25519_signature"</div>
                <div>{"}"}</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-300 mb-2">Routing Algorithm</h4>
              <p className="text-gray-400 text-sm mb-3">
                Messages are routed using a distance-vector protocol optimized for mobile mesh networks:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-400 ml-4">
                <li>Device discovery via BLE advertising</li>
                <li>Neighbor table maintenance with signal strength</li>
                <li>Shortest path calculation using hop count + signal quality</li>
                <li>Store-and-forward for offline recipients</li>
                <li>Duplicate detection and loop prevention</li>
              </ol>
            </div>
          </div>
        </Card>

        {/* Open Source */}
        <Card className="bg-gradient-to-br from-green-900/20 to-transparent border-green-500/30 p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-green-300 flex items-center">
            <Github className="w-6 h-6 mr-2" />
            Open Source Components
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-300 mb-3">Core Libraries</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <code className="bg-gray-800 px-2 py-1 rounded text-purple-300">current-mesh</code>
                  <span className="ml-2">Bluetooth mesh networking engine</span>
                </li>
                <li>
                  <code className="bg-gray-800 px-2 py-1 rounded text-cyan-300">current-crypto</code>
                  <span className="ml-2">Signal Protocol implementation</span>
                </li>
                <li>
                  <code className="bg-gray-800 px-2 py-1 rounded text-pink-300">current-kindness</code>
                  <span className="ml-2">Kindness Mode features</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-cyan-300 mb-3">Development</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Rust core with C bindings</li>
                <li>• React Native UI layer</li>
                <li>• Comprehensive test suite</li>
                <li>• Security audit reports</li>
                <li>• Community contributions welcome</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-green-500/20">
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center py-8 border-t border-purple-500/20">
          <p className="text-gray-400 mb-2">
            Designed with love, privacy, and empathy by <span className="text-purple-400">#desirelovell</span>
          </p>
          <p className="text-sm text-gray-500">
            Inspired by the vision of decentralized communication, reimagined for human connection.
          </p>
        </div>
      </div>
    </div>
  )
}
