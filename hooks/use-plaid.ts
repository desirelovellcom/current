"use client"

import { useState, useCallback } from "react"

interface PlaidAccount {
  account_id: string
  name: string
  type: string
  subtype: string
  balance: number
  currency: string
}

interface PlaidHookReturn {
  isConnected: boolean
  accounts: PlaidAccount[]
  isLoading: boolean
  error: string | null
  connectAccount: () => Promise<void>
  exchangeCurrency: (params: ExchangeParams) => Promise<any>
}

interface ExchangeParams {
  account_id: string
  amount: number
  from_currency: string
  to_currency: string
  exchange_rate: number
}

export function usePlaid(): PlaidHookReturn {
  const [isConnected, setIsConnected] = useState(false)
  const [accounts, setAccounts] = useState<PlaidAccount[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const connectAccount = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Create link token
      const linkResponse = await fetch("/api/plaid/link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: crypto.randomUUID() }),
      })

      if (!linkResponse.ok) {
        throw new Error("Failed to create link token")
      }

      const { data: linkToken } = await linkResponse.json()

      // In a real app, you would open Plaid Link here
      // For demo purposes, we'll simulate a successful connection
      setTimeout(() => {
        setIsConnected(true)
        setAccounts([
          {
            account_id: "acc_123",
            name: "Checking Account",
            type: "depository",
            subtype: "checking",
            balance: 5000.0,
            currency: "USD",
          },
          {
            account_id: "acc_456",
            name: "Savings Account",
            type: "depository",
            subtype: "savings",
            balance: 15000.0,
            currency: "USD",
          },
        ])
        setIsLoading(false)
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Connection failed")
      setIsLoading(false)
    }
  }, [])

  const exchangeCurrency = useCallback(async (params: ExchangeParams) => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await fetch("/api/plaid/exchange", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_token: "mock_token",
          ...params,
        }),
      })

      if (!response.ok) {
        throw new Error("Exchange failed")
      }

      const result = await response.json()
      setIsLoading(false)
      return result.data
    } catch (err) {
      setError(err instanceof Error ? err.message : "Exchange failed")
      setIsLoading(false)
      throw err
    }
  }, [])

  return {
    isConnected,
    accounts,
    isLoading,
    error,
    connectAccount,
    exchangeCurrency,
  }
}
