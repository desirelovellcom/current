"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Nfc, Zap, ArrowUpDown, Wallet } from "lucide-react"
import { NDEFReader } from "ndef-reader" // Declare NDEFReader

interface NFCExchangeWidgetProps {
  onExchangeData?: (data: any) => void
}

export function NFCExchangeWidget({ onExchangeData }: NFCExchangeWidgetProps) {
  const [isNFCEnabled, setIsNFCEnabled] = useState(false)
  const [isReading, setIsReading] = useState(false)
  const [lastExchange, setLastExchange] = useState<any>(null)

  useEffect(() => {
    // Check if NFC is available
    if ("NDEFReader" in window) {
      setIsNFCEnabled(true)
    }
  }, [])

  const startNFCExchange = async () => {
    if (!isNFCEnabled) return

    try {
      setIsReading(true)
      // @ts-ignore - NDEFReader is experimental
      const ndef = new NDEFReader()
      await ndef.scan()

      ndef.addEventListener("reading", ({ message }: any) => {
        const record = message.records[0]
        if (record.recordType === "text") {
          const textDecoder = new TextDecoder(record.encoding)
          const exchangeData = JSON.parse(textDecoder.decode(record.data))

          setLastExchange(exchangeData)
          onExchangeData?.(exchangeData)
          setIsReading(false)
        }
      })
    } catch (error) {
      console.error("NFC Exchange Error:", error)
      setIsReading(false)
    }
  }

  if (!isNFCEnabled) {
    return (
      <Card className="bg-gradient-to-r from-gray-900/20 to-transparent border-gray-500/30 p-4">
        <div className="text-center">
          <Nfc className="w-8 h-8 text-gray-500 mx-auto mb-2" />
          <p className="text-sm text-gray-500">NFC not available on this device</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Nfc className="w-5 h-5 text-blue-400" />
          <span className="font-semibold text-blue-300">NFC Exchange</span>
        </div>
        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
          <Zap className="w-3 h-3 mr-1" />
          Ready
        </Badge>
      </div>

      <p className="text-sm text-gray-400 mb-4">Tap another Current device to instantly exchange currencies</p>

      <Button
        onClick={startNFCExchange}
        disabled={isReading}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
      >
        {isReading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
            Listening for tap...
          </>
        ) : (
          <>
            <ArrowUpDown className="w-4 h-4 mr-2" />
            Start NFC Exchange
          </>
        )}
      </Button>

      {lastExchange && (
        <div className="mt-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Wallet className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-300">Last Exchange</span>
          </div>
          <div className="text-xs text-gray-400">
            {lastExchange.amount} {lastExchange.fromCurrency} → {lastExchange.toCurrency}
          </div>
        </div>
      )}
    </Card>
  )
}
