"use client"

import { createContext, useContext, type ReactNode } from "react"

interface LocaleContextType {
  locale: string
  currency: string
}

const LocaleContext = createContext<LocaleContextType>({ locale: "en-IN", currency: "INR" })

export const useLocale = () => useContext(LocaleContext)

function getCurrencyFromLocale(locale: string): string {
  const region = new Intl.Locale(locale).region
  switch (region) {
    case "US":
      return "USD"
    case "GB":
      return "GBP"
    case "DE":
    case "FR":
    case "IT":
    case "ES":
      return "EUR"
    case "JP":
      return "JPY"
    case "CA":
      return "CAD"
    case "AU":
      return "AUD"
    default:
      return "INR" // Default to INR for all other regions
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = typeof navigator !== "undefined" ? navigator.language : "en-IN"
  const currency = getCurrencyFromLocale(locale)

  return <LocaleContext.Provider value={{ locale, currency }}>{children}</LocaleContext.Provider>
}

