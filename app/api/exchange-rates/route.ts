import { type NextRequest, NextResponse } from "next/server"

// Mock exchange rates - in production, you'd fetch from a real API
const EXCHANGE_RATES = {
  USD: {
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.0,
    CAD: 1.25,
    AUD: 1.35,
  },
  EUR: {
    USD: 1.18,
    GBP: 0.86,
    JPY: 129.5,
    CAD: 1.47,
    AUD: 1.59,
  },
  GBP: {
    USD: 1.37,
    EUR: 1.16,
    JPY: 150.7,
    CAD: 1.71,
    AUD: 1.85,
  },
  JPY: {
    USD: 0.0091,
    EUR: 0.0077,
    GBP: 0.0066,
    CAD: 0.0114,
    AUD: 0.0123,
  },
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const from = searchParams.get("from")
    const to = searchParams.get("to")

    if (from && to) {
      // Get specific rate
      const rate = EXCHANGE_RATES[from as keyof typeof EXCHANGE_RATES]?.[to as keyof typeof EXCHANGE_RATES.USD]

      if (!rate) {
        return NextResponse.json({ error: "Currency pair not supported" }, { status: 400 })
      }

      return NextResponse.json({
        success: true,
        data: {
          from,
          to,
          rate,
          timestamp: new Date().toISOString(),
          source: "mock_provider",
        },
      })
    }

    // Return all rates
    return NextResponse.json({
      success: true,
      data: {
        rates: EXCHANGE_RATES,
        timestamp: new Date().toISOString(),
        source: "mock_provider",
      },
    })
  } catch (error) {
    console.error("Exchange Rates Error:", error)
    return NextResponse.json({ error: "Failed to fetch exchange rates" }, { status: 500 })
  }
}
