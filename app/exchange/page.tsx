"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Nfc, ArrowUpDown, Wallet, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { NDEFReader } from "ndef-reader" // Declare NDEFReader

interface ExchangeRate {
  from: string
  to: string
  rate: number
  symbol: string
}

interface NFCData {
  amount: number
  fromCurrency: string
  toCurrency: string
  deviceId: string
}

export default function CurrencyExchange() {
  const [amount, setAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")
  const [isNFCEnabled, setIsNFCEnabled] = useState(false)
  const [isNFCReading, setIsNFCReading] = useState(false)
  const [exchangeRates] = useState<ExchangeRate[]>([
    { from: "USD", to: "EUR", rate: 0.85, symbol: "€" },
    { from: "USD", to: "GBP", rate: 0.73, symbol: "£" },
    { from: "USD", to: "JPY", rate: 110.0, symbol: "¥" },
    { from: "EUR", to: "USD", rate: 1.18, symbol: "$" },
    { from: "GBP", to: "USD", rate: 1.37, symbol: "$" },
  ])
  const [plaidConnected, setPlaidConnected] = useState(false)
  const [exchangeHistory, setExchangeHistory] = useState<any[]>([])

  useEffect(() => {
    // Check if NFC is available
    if ("NDEFReader" in window) {
      setIsNFCEnabled(true)
    }
  }, [])

  const getCurrentRate = () => {
    const rate = exchangeRates.find((r) => r.from === fromCurrency && r.to === toCurrency)
    return rate?.rate || 1
  }

  const getConvertedAmount = () => {
    const numAmount = Number.parseFloat(amount) || 0
    return (numAmount * getCurrentRate()).toFixed(2)
  }

  const getCurrencySymbol = (currency: string) => {
    const rate = exchangeRates.find((r) => r.to === currency)
    return rate?.symbol || currency
  }

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const startNFCReading = async () => {
    if (!isNFCEnabled) return

    try {
      setIsNFCReading(true)
      const ndef = new NDEFReader() // Use declared NDEFReader
      await ndef.scan()

      ndef.addEventListener("reading", ({ message }: any) => {
        const record = message.records[0]
        if (record.recordType === "text") {
          const textDecoder = new TextDecoder(record.encoding)
          const nfcData: NFCData = JSON.parse(textDecoder.decode(record.data))

          // Auto-fill exchange form with NFC data
          setAmount(nfcData.amount.toString())
          setFromCurrency(nfcData.fromCurrency)
          setToCurrency(nfcData.toCurrency)

          setIsNFCReading(false)
        }
      })

      ndef.addEventListener("readingerror", () => {
        setIsNFCReading(false)
      })
    } catch (error) {
      console.error("NFC Error:", error)
      setIsNFCReading(false)
    }
  }

  const writeNFCData = async () => {
    if (!isNFCEnabled || !amount) return

    try {
      const ndef = new NDEFReader() // Use declared NDEFReader
      const nfcData: NFCData = {
        amount: Number.parseFloat(amount),
        fromCurrency,
        toCurrency,
        deviceId: crypto.randomUUID(),
      }

      await ndef.write({
        records: [
          {
            recordType: "text",
            data: JSON.stringify(nfcData),
          },
        ],
      })

      alert("Exchange data written to NFC tag!")
    } catch (error) {
      console.error("NFC Write Error:", error)
    }
  }

  const connectPlaid = async () => {
    // Simulate Plaid Link flow
    setPlaidConnected(true)

    // In a real app, this would open Plaid Link
    setTimeout(() => {
      alert("Bank account connected via Plaid!")
    }, 1000)
  }

  const executeExchange = async () => {
    if (!plaidConnected) {
      alert("Please connect your bank account first")
      return
    }

    const exchange = {
      id: crypto.randomUUID(),
      amount: Number.parseFloat(amount),
      fromCurrency,
      toCurrency,
      rate: getCurrentRate(),
      convertedAmount: Number.parseFloat(getConvertedAmount()),
      timestamp: new Date(),
      status: "completed",
    }

    setExchangeHistory((prev) => [exchange, ...prev])

    // Reset form
    setAmount("")

    alert(`Exchange completed! ${amount} ${fromCurrency} → ${getConvertedAmount()} ${toCurrency}`)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      <div className="fixed inset-0 bg-gradient-to-tr from-rose-900/10 via-transparent to-purple-900/10" />

      <div className="relative z-10 max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-purple-300 hover:text-white">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold text-purple-300">Currency Exchange</h1>
          <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-300">
            <Nfc className="w-3 h-3 mr-1" />
            NFC
          </Badge>
        </div>

        {/* NFC Banner */}
        <div className="p-4">
          <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Nfc className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-blue-300">NFC Exchange</span>
              </div>
              {isNFCEnabled ? (
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Active</Badge>
              ) : (
                <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Unavailable</Badge>
              )}
            </div>
            <p className="text-sm text-gray-400 mb-3">
              Tap devices to instantly share exchange rates and execute transactions
            </p>
            <div className="flex space-x-2">
              <Button
                size="sm"
                onClick={startNFCReading}
                disabled={!isNFCEnabled || isNFCReading}
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                {isNFCReading ? "Reading..." : "Read NFC"}
              </Button>
              <Button
                size="sm"
                onClick={writeNFCData}
                disabled={!isNFCEnabled || !amount}
                className="bg-purple-600 hover:bg-purple-700 text-white flex-1"
              >
                Write NFC
              </Button>
            </div>
          </Card>
        </div>

        {/* Plaid Connection */}
        <div className="px-4 mb-4">
          <Card className="bg-gradient-to-r from-green-900/20 to-transparent border-green-500/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Wallet className="w-5 h-5 text-green-400" />
                <div>
                  <h3 className="font-semibold text-green-300">Bank Account</h3>
                  <p className="text-xs text-gray-400">
                    {plaidConnected ? "Connected via Plaid" : "Connect to exchange"}
                  </p>
                </div>
              </div>
              {!plaidConnected ? (
                <Button size="sm" onClick={connectPlaid} className="bg-green-600 hover:bg-green-700 text-white">
                  Connect
                </Button>
              ) : (
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure
                </Badge>
              )}
            </div>
          </Card>
        </div>

        {/* Exchange Form */}
        <div className="px-4 mb-6">
          <Card className="bg-gradient-to-br from-gray-900/50 to-transparent border-gray-500/30 p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-300">Exchange Currency</h2>

            {/* Amount Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400 mb-2">Amount</label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="bg-gray-800/50 border border-gray-600 rounded-md px-3 py-2 text-white text-lg"
              />
            </div>

            {/* Currency Selection */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-400 mb-2">From</label>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-md px-3 py-2 text-white"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="JPY">JPY (¥)</option>
                </select>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={swapCurrencies}
                className="mt-6 text-purple-400 hover:text-purple-300"
              >
                <ArrowUpDown className="w-4 h-4" />
              </Button>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-400 mb-2">To</label>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-md px-3 py-2 text-white"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="JPY">JPY (¥)</option>
                </select>
              </div>
            </div>

            {/* Exchange Rate Display */}
            {amount && (
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">You send:</span>
                  <span className="text-white font-semibold">
                    {amount} {fromCurrency}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-400">You receive:</span>
                  <span className="text-purple-300 font-semibold text-lg">
                    {getCurrencySymbol(toCurrency)}
                    {getConvertedAmount()} {toCurrency}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2 text-sm">
                  <span className="text-gray-500">Rate:</span>
                  <span className="text-gray-400">
                    1 {fromCurrency} = {getCurrentRate()} {toCurrency}
                  </span>
                </div>
              </div>
            )}

            {/* Exchange Button */}
            <Button
              onClick={executeExchange}
              disabled={!amount || !plaidConnected}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              <Zap className="w-4 h-4 mr-2" />
              Execute Exchange
            </Button>
          </Card>
        </div>

        {/* Exchange History */}
        {exchangeHistory.length > 0 && (
          <div className="px-4">
            <h3 className="text-lg font-semibold text-gray-300 mb-3">Recent Exchanges</h3>
            <div className="space-y-3">
              {exchangeHistory.slice(0, 3).map((exchange) => (
                <Card key={exchange.id} className="bg-gray-900/50 border-gray-600/30 p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-white">
                        {exchange.amount} {exchange.fromCurrency} → {exchange.convertedAmount} {exchange.toCurrency}
                      </div>
                      <div className="text-xs text-gray-400">
                        Rate: {exchange.rate} • {exchange.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">{exchange.status}</Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
