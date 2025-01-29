type CurrencyCode = "INR" | "USD" | "GBP" | "EUR" | "JPY" | "CAD" | "AUD"

export function formatCurrency(amount: number, locale = "en-IN"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "INR",
  }).format(amount)
}

export function formatDate(date: Date, locale = "en-IN"): string {
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

function getCurrencyFromLocale(locale: string): CurrencyCode {
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

