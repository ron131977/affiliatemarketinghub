import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type { Metadata } from "next"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://amazonaffiliatestore.vercel.app"),
  title: {
    default: "AmazonAffiliateStore | Best Amazon Products and Deals",
    template: "%s | AmazonAffiliateStore",
  },
  description:
    "Discover the best Amazon products and deals on AmazonAffiliateStore. Find top-rated electronics, home goods, fashion, and more at unbeatable prices.",
  keywords: [
    "Amazon",
    "affiliate",
    "products",
    "best deals",
    "electronics",
    "home and kitchen",
    "fashion",
    "smartphones",
    "online shopping",
  ],
  authors: [{ name: "Dr Trailer" }],
  creator: "Dr Trailer",
  publisher: "AmazonAffiliateStore",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amazonaffiliatestore.vercel.app",
    siteName: "AmazonAffiliateStore",
    images: [
      {
        url: "https://amazonaffiliatestore.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AmazonAffiliateStore - Best Amazon Products and Deals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://amazonaffiliatestore.vercel.app",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
       
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

