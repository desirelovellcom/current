"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Settings, Users, Heart, Shield, WifiOff, ArrowLeft, Sun } from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  text: string
  sender: "me" | "peer"
  timestamp: Date
  hasLight?: boolean
  isKind?: boolean
}

interface Peer {
  id: string
  name: string
  emoji: string
  distance: string
  isOnline: boolean
}

export default function CurrentApp() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey! Welcome to Current 👋",
      sender: "peer",
      timestamp: new Date(Date.now() - 300000),
    },
    {
      id: "2",
      text: "This is amazing! No internet needed?",
      sender: "me",
      timestamp: new Date(Date.now() - 240000),
    },
    {
      id: "3",
      text: "Exactly! Pure Bluetooth mesh networking. Your messages hop through nearby devices.",
      sender: "peer",
      timestamp: new Date(Date.now() - 180000),
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const [isKindnessMode, setIsKindnessMode] = useState(false)
  const [activePeer, setActivePeer] = useState<Peer | null>(null)
  const [view, setView] = useState<"chat" | "peers" | "settings">("chat")
  const [lightCount, setLightCount] = useState(3)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const peers: Peer[] = [
    { id: "1", name: "Anonymous", emoji: "🌸", distance: "12m", isOnline: true },
    { id: "2", name: "Kindred", emoji: "🦋", distance: "45m", isOnline: true },
    { id: "3", name: "Wanderer", emoji: "🌙", distance: "89m", isOnline: false },
    { id: "4", name: "Dreamer", emoji: "✨", distance: "156m", isOnline: true },
  ]

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = () => {
    if (!newMessage.trim()) return

    const isKindMessage =
      isKindnessMode &&
      (newMessage.toLowerCase().includes("thank") ||
        newMessage.toLowerCase().includes("kind") ||
        newMessage.toLowerCase().includes("love") ||
        newMessage.toLowerCase().includes("appreciate"))

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "me",
      timestamp: new Date(),
      isKind: isKindMessage,
    }

    setMessages((prev) => [...prev, message])
    setNewMessage("")

    // Simulate peer response
    setTimeout(
      () => {
        const responses = [
          "That's so thoughtful! 💖",
          "I appreciate you too! ✨",
          "This mesh network is incredible",
          "Privacy feels so good 🔒",
          "Thanks for the Light! 🌟",
        ]

        const peerMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: responses[Math.floor(Math.random() * responses.length)],
          sender: "peer",
          timestamp: new Date(),
          hasLight: isKindMessage,
        }

        setMessages((prev) => [...prev, peerMessage])

        if (isKindMessage) {
          setLightCount((prev) => prev + 1)
        }
      },
      1000 + Math.random() * 2000,
    )
  }

  const sendLight = () => {
    if (lightCount > 0) {
      setLightCount((prev) => prev - 1)
      const lightMessage: Message = {
        id: Date.now().toString(),
        text: "✨ Light sent",
        sender: "me",
        timestamp: new Date(),
        hasLight: true,
      }
      setMessages((prev) => [...prev, lightMessage])
    }
  }

  if (view === "peers") {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

        <div className="relative z-10 max-w-md mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setView("chat")}
              className="text-purple-300 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-lg font-semibold text-purple-300">Nearby Peers</h1>
            <div className="w-8" />
          </div>

          {/* Peers List */}
          <div className="p-4 space-y-3">
            <div className="flex items-center space-x-2 mb-4">
              <WifiOff className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Bluetooth Mesh Active</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>

            {peers.map((peer) => (
              <Card
                key={peer.id}
                className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border-purple-500/30 p-4 cursor-pointer hover:border-purple-400/50 transition-colors"
                onClick={() => {
                  setActivePeer(peer)
                  setView("chat")
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{peer.emoji}</div>
                    <div>
                      <div className="font-medium text-purple-300">{peer.name}</div>
                      <div className="text-sm text-gray-400">{peer.distance} away</div>
                    </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${peer.isOnline ? "bg-green-400" : "bg-gray-600"}`} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (view === "settings") {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

        <div className="relative z-10 max-w-md mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setView("chat")}
              className="text-purple-300 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-lg font-semibold text-purple-300">Settings</h1>
            <div className="w-8" />
          </div>

          {/* Settings */}
          <div className="p-4 space-y-6">
            {/* Privacy */}
            <Card className="bg-gradient-to-r from-purple-900/20 to-transparent border-purple-500/30 p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-purple-300">Privacy</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">End-to-End Encryption</span>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Message Ephemeral</span>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">24h</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Anonymous Mode</span>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">On</Badge>
                </div>
              </div>
            </Card>

            {/* Kindness Mode */}
            <Card className="bg-gradient-to-r from-pink-900/20 to-transparent border-pink-500/30 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-pink-400" />
                  <h3 className="font-semibold text-pink-300">Kindness Mode</h3>
                </div>
                <div
                  className={`w-12 h-6 rounded-full transition-all duration-300 cursor-pointer ${
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
              </div>
              <p className="text-sm text-gray-400">Enable gentle animations and Light tokens for positive messaging</p>
            </Card>

            {/* Network */}
            <Card className="bg-gradient-to-r from-cyan-900/20 to-transparent border-cyan-500/30 p-4">
              <div className="flex items-center space-x-3 mb-3">
                <WifiOff className="w-5 h-5 text-cyan-400" />
                <h3 className="font-semibold text-cyan-300">Network</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Bluetooth Mesh</span>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">WiFi Direct</span>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Coming Soon</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Peers Connected</span>
                  <span className="text-cyan-300">4</span>
                </div>
              </div>
            </Card>

            {/* About */}
            <Card className="bg-gradient-to-r from-gray-900/20 to-transparent border-gray-500/30 p-4">
              <div className="text-center space-y-2">
                <div className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Current v1.0
                </div>
                <p className="text-sm text-gray-400">Designed with love, privacy, and empathy by #desirelovell</p>
                <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
                  View on GitHub →
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      <div className="fixed inset-0 bg-gradient-to-tr from-rose-900/10 via-transparent to-purple-900/10" />

      <div className="relative z-10 max-w-md mx-auto h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-purple-500/20 backdrop-blur-sm">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-purple-300 hover:text-white">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>

          <div className="flex items-center space-x-2">
            <div className="text-lg">{activePeer?.emoji || "🌸"}</div>
            <div>
              <div className="font-medium text-purple-300">{activePeer?.name || "Anonymous"}</div>
              <div className="text-xs text-gray-400 flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-1" />
                {activePeer?.distance || "12m"} away
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setView("peers")}
              className="text-purple-300 hover:text-white"
            >
              <Users className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setView("settings")}
              className="text-purple-300 hover:text-white"
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="px-4 py-2 bg-gradient-to-r from-purple-900/10 to-cyan-900/10 border-b border-purple-500/10">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 text-cyan-300">
              <WifiOff className="w-3 h-3" />
              <span>Bluetooth Mesh</span>
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            </div>
            <div className="flex items-center space-x-2 text-purple-300">
              <Shield className="w-3 h-3" />
              <span>E2E Encrypted</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl ${
                  message.sender === "me"
                    ? message.isKind && isKindnessMode
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white animate-pulse"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : message.hasLight
                      ? "bg-gray-800 border border-yellow-400/50 text-yellow-300"
                      : "bg-gray-800 text-gray-100"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                {message.hasLight && (
                  <div className="flex items-center mt-2 space-x-1">
                    <Sun className="w-3 h-3 text-yellow-400 animate-pulse" />
                    <span className="text-xs text-yellow-400">Light</span>
                  </div>
                )}
                <div className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Kindness Mode Bar */}
        {isKindnessMode && (
          <div className="px-4 py-2 bg-gradient-to-r from-pink-900/20 to-purple-900/20 border-t border-pink-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-pink-400" />
                <span className="text-sm text-pink-300">Kindness Mode Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={sendLight}
                  disabled={lightCount === 0}
                  className="text-yellow-400 hover:text-yellow-300 disabled:opacity-50"
                >
                  <Sun className="w-4 h-4 mr-1" />
                  Light ({lightCount})
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-purple-500/20 backdrop-blur-sm">
          <div className="flex items-center space-x-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 bg-gray-900/50 border-purple-500/30 text-white placeholder-gray-400 rounded-full px-4"
            />
            <Button
              onClick={sendMessage}
              disabled={!newMessage.trim()}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 rounded-full w-10 h-10 p-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
