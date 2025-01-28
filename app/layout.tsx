import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type { Metadata } from "next"
import { JsonLd } from "react-schemaorg"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
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
    "online shopping",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "AmazonAffiliateStore",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "AmazonAffiliateStore",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
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
    canonical: "https://yourdomain.com",
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
                item: "https://yourdomain.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Electronics",
                item: "https://yourdomain.com/category/electronics",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Home & Kitchen",
                item: "https://yourdomain.com/category/home-and-kitchen",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Fashion",
                item: "https://yourdomain.com/category/fashion",
              },
            ],
          }}
        />
      </body>
    </html>
  )
}

