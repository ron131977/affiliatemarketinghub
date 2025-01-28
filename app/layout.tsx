import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type { Metadata } from "next"
import { JsonLd } from "react-schemaorg"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://amazonaffiliatestore.vercel.app"),
  title: {
    default: "Amazon Affiliate Store | Best Amazon Products and Deals",
    template: "%s | Amazon Affiliate Store",
  },
  description:
    "Discover the best Amazon products and deals on AmazonAffiliateStore. Find top-rated electronics, home goods, fashion, and more at unbeatable prices.",
  keywords: [
    "Amazon",
    "Amazon,in",
    "affiliate",
    "products",
    "best deals",
    "electronics",
    "home and kitchen",
    "fashion",
    "online shopping",
  ],
  authors: [{ name: "Dr Traile" }],
  creator: "Dr Trailer",
  publisher: "Amazon Affiliate Store",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amazonaffiliatestore.vercel.app",
    siteName: "Amazon Affiliate Store",
    images: [
      {
        url: "https://amazonaffiliatestore.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amazon Affiliate Store - Best Amazon Products and Deals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yamazonaffiliatestore",
    creator: "@yyamazonaffiliatestore",
  },
  verification: {
    google: "RNN2teFhD-lV1TQ9qcLQiSO5BLBB4DmztyYJS6QLqDg",
    yandex: "2ed424cb83002f12",
    yahoo: "695BD01C3BC615AB69B7E9C3B718EB74",
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
        <JsonLd<BreadcrumbList>
          item={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://amazonaffiliatestore.vercel.app",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Electronics",
                item: "https://amazonaffiliatestore.vercel.app/category/electronics",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Home & Kitchen",
                item: "https://amazonaffiliatestore.vercel.app/category/home-and-kitchen",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Home & Kitchen",
                item: "https://amazonaffiliatestore.vercel.app/category/computers",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Home & Kitchen",
                item: "https://amazonaffiliatestore.vercel.app/category/automotive",
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "Fashion",
                item: "https://amazonaffiliatestore.vercel.app/category/fashion",
              },
            ],
          }}
        />
      </body>
    </html>
  )
}

