// import "./globals.css"
// import { Inter } from "next/font/google"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
// import type { Metadata } from "next"
// import { JsonLd } from "react-schemaorg"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   metadataBase: new URL("https://amazonaffiliatestore.vercel.app"),
//   title: {
//     default: "Amazon Affiliate Store | Best Amazon Products and Deals",
//     template: "%s | AmazonAffiliateStore",
//   },
//   description:
//     "Discover the best Amazon products and deals on AmazonAffiliateStore. Find top-rated electronics, home goods, fashion, and more at unbeatable prices.",
//   keywords: [
//     "Amazon",
//     "affiliate",
//     "products",
//     "best deals",
//     "electronics",
//     "home and kitchen",
//     "fashion",
//     "online shopping",
//     "affiliate store",
//     "best Amazon deals",
//     "discounted products",
//     "electronics",
//     "home and kitchen",
//     "fashion",
//     "beauty products",
//     "fitness gear",
//     "gadgets",
//     "tech accessories",
//     "smartphones",
//     "laptops",
//     "gaming accessories",
//     "appliances",
//     "home decor",
//     "trending products",
//     "best online shopping",
//     "Amazon best sellers",
//     "gift ideas",
//     "budget deals",
//     "limited-time offers",
//     "Amazon discounts",
//     "shopping online",
//     "top-rated products",
//     "hot deals",
//   ],
//   authors: [{ name: "Dr Trailer" }],
//   creator: "Dr Trailer",
//   publisher: "Amazon Affiliate Store",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://amazonaffiliatestore.vercel.app",
//     siteName: "Amazon Affiliate Store",
//     images: [
//       {
//         url: "https://amazonaffiliatestore.vercel.app/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Amazon Affiliate Store - Best Amazon Products and Deals",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@yamazonaffiliatestore",
//     creator: "@yamazonaffiliatestore2025",
//   },
//   verification: {
//     google: "RNN2teFhD-lV1TQ9qcLQiSO5BLBB4DmztyYJS6QLqDg",
//     yandex: "2ed424cb83002f12",
//     yahoo: "695BD01C3BC615AB69B7E9C3B718EB74",
//   },
//   alternates: {
//     canonical: "https://amazonaffiliatestore.vercel.app",
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header />
//         <main>{children}</main>
//         <Footer />
//         <JsonLd
//   item={{
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Article",
//         "@id": "https://amazonaffiliatestore.vercel.app/#article",
//         "name": "Amazon Affiliate Store | Best Amazon Products and Deals",
//         "headline": "Amazon Affiliate Store | Best Amazon Products and Deals",
//         "author": {"@id": "https://amazonaffiliatestore.vercel.app/author/DrTrailer/#author"},
//         "publisher": {"@id": "https://amazonaffiliatestore.vercel.app/#person"},
//         "image": {
//           "@type": "ImageObject",
//           "url": "https://amazonaffiliatestore.vercel.app/og-image.jpg",
//           "@id": "https://amazonaffiliatestore.vercel.app/#articleImage",
//           "width": 1792,
//           "height": 1024,
//           "caption": "Amazon Affiliate Store"
//         },
//         "datePublished": "2024-02-28T07:50:51+00:00",
//         "dateModified": "2025-01-01T13:13:13+00:00",
//         "inLanguage": "en-US",
//         "mainEntityOfPage": {"@id": "https://amazonaffiliatestore.vercel.app/#webpage"},
//         "isPartOf": {"@id": "https://amazonaffiliatestore.vercel.app/#webpage"},
//         "articleSection": "Blog"
//       },
//       {
//         "@type": "BreadcrumbList",
//         "@id": "https://amazonaffiliatestore.vercel.app/#breadcrumblist",
//         "itemListElement": [
//           {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://amazonaffiliatestore.vercel.app"},
//           {"@type": "ListItem", "position": 2, "name": "Electronics", "item": "https://amazonaffiliatestore.vercel.app/category/electronics"},
//           {"@type": "ListItem", "position": 3, "name": "Home & Kitchen", "item": "https://amazonaffiliatestore.vercel.app/category/home-and-kitchen"},
//           {"@type": "ListItem", "position": 4, "name": "Computers", "item": "https://amazonaffiliatestore.vercel.app/category/computers"},
//           {"@type": "ListItem", "position": 5, "name": "Mobiles", "item": "https://amazonaffiliatestore.vercel.app/category/smartphones"},
//           {"@type": "ListItem", "position": 6, "name": "Automotive", "item": "https://amazonaffiliatestore.vercel.app/category/automotive"},
//           {"@type": "ListItem", "position": 7, "name": "Books", "item": "https://amazonaffiliatestore.vercel.app/category/books"},
//           {"@type": "ListItem", "position": 8, "name": "Fashion", "item": "https://amazonaffiliatestore.vercel.app/category/fashion"}
//         ]
//       },
//       {
//         "@type": "Person",
//         "@id": "https://amazonaffiliatestore.vercel.app/#person",
//         "name": "DrTrailer",
//         "image": {
//           "@type": "ImageObject",
//           "@id": "https://gravatar.com/drtrailer2022/#personImage",
//           "url": "https://gravatar.com/drtrailer2022",
//           "width": 256,
//           "height": 256,
//           "caption": "DrTrailer"
//         }
//       },
//       {
//         "@type": "Person",
//         "@id": "https://amazonaffiliatestore.vercel.app/author/DrTrailer/#author",
//         "url": "https://amazonaffiliatestore.vercel.app/author/DrTrailer/",
//         "name": "DrTrailer",
//         "image": {
//           "@type": "ImageObject",
//           "@id": "https://gravatar.com/drtrailer2022/#authorImage",
//           "url": "https://gravatar.com/drtrailer2022",
//           "width": 256,
//           "height": 256,
//           "caption": "DrTrailer"
//         }
//       },
//       {
//         "@type": "WebPage",
//         "@id": "https://amazonaffiliatestore.vercel.app/#webpage",
//         "url": "https://amazonaffiliatestore.vercel.app/",
//         "name": "Amazon Affiliate Store | Best Amazon Products and Deals",
//         "description": "Discover the best Amazon products and deals on AmazonAffiliateStore. Find top-rated electronics, home goods, fashion, and more at unbeatable prices.",
//         "inLanguage": "en-US",
//         "isPartOf": {"@id": "https://amazonaffiliatestore.vercel.app/#website"},
//         "breadcrumb": {"@id": "https://amazonaffiliatestore.vercel.app/#breadcrumblist"},
//         "author": {"@id": "https://amazonaffiliatestore.vercel.app/author/DrTrailer/#author"},
//         "creator": {"@id": "https://amazonaffiliatestore.vercel.app/author/DrTrailer/#author"},
//         "datePublished": "2024-02-28T07:50:51+00:00",
//         "dateModified": "2025-01-01T13:13:13+00:00"
//       }
//     ]
//   }}
// />

//         {/* <JsonLd
//   item={{
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "BreadcrumbList",
//         itemListElement: [
//           {
//             "@type": "ListItem",
//             position: 1,
//             name: "Home",
//             item: "https://amazonaffiliatestore.vercel.app",
//           },
//           {
//             "@type": "ListItem",
//             position: 2,
//             name: "Electronics",
//             item: "https://amazonaffiliatestore.vercel.app/category/electronics",
//           },
//           {
//             "@type": "ListItem",
//             position: 3,
//             name: "Home & Kitchen",
//             item: "https://amazonaffiliatestore.vercel.app/category/home-and-kitchen",
//           },
//           {
//             "@type": "ListItem",
//             position: 4,
//             name: "Computers",
//             item: "https://amazonaffiliatestore.vercel.app/category/computers",
//           },
//           {
//             "@type": "ListItem",
//             position: 5,
//             name: "Mobiles",
//             item: "https://amazonaffiliatestore.vercel.app/category/smartphones",
//           },
//           {
//             "@type": "ListItem",
//             position: 6,
//             name: "Automotive",
//             item: "https://amazonaffiliatestore.vercel.app/category/automotive",
//           },
//           {
//             "@type": "ListItem",
//             position: 7,
//             name: "Books",
//             item: "https://amazonaffiliatestore.vercel.app/category/books",
//           },
//           {
//             "@type": "ListItem",
//             position: 8,
//             name: "Fashion",
//             item: "https://amazonaffiliatestore.vercel.app/category/fashion",
//           },
//         ],
//       },
//       {
//         "@type": "Organization",
//         name: "Amazon Affiliate Store™",
//         url: "https://amazonaffiliatestore.vercel.app/",
//         image: "https://amazonaffiliatestore.vercel.app/favicon.ico",
//         logo: {
//           "@type": "ImageObject",
//           url: "https://amazonaffiliatestore.vercel.app/favicon.ico",
//           width: 280,
//           height: 80,
//         },
//       },
//       {
//         "@type": "WebSite",
//         url: "https://amazonaffiliatestore.vercel.app",
//         name: "Amazon Affiliate Store™",
//         publisher: {
//           "@type": "Organization",
//           name: "Amazon Affiliate Store™",
//           url: "https://amazonaffiliatestore.vercel.app",
//         },
//       },
//     ],
//   }}
// /> */}

//         {/* <JsonLd<BreadcrumbList>
//            item={{
//             "@context": "https://schema.org",
//             "@type": "BreadcrumbList",
//             itemListElement: [
//               {
//                 "@type": "ListItem",
//                 position: 1,
//                 name: "Home",
//                 item: "https://amazonaffiliatestore.vercel.app",
//               },
//               {
//                 "@type": "ListItem",
//                 position: 2,
//                 name: "Electronics",
//                 item: "https://amazonaffiliatestore.vercel.app/category/electronics",
//               },
//               {
//                 "@type": "ListItem",
//                 position: 3,
//                 name: "Home & Kitchen",
//                 item: "https://amazonaffiliatestore.vercel.app/category/home-and-kitchen",
//               },
//               {
//                 "@type": "ListItem",
//                 position: 4,
//                 name: "Computers",
//                 item: "https://amazonaffiliatestore.vercel.app/category/computers",
//               },
//               {
//                 "@type": "ListItem",
//                 position: 5,
//                 name: "Mobiles",
//                 item: "https://amazonaffiliatestore.vercel.app/category/smartphones",
//               },
//               {
//                 "@type": "ListItem",
//                 position: 6,
//                 name: "Automotive",
//                 item: "https://amazonaffiliatestore.vercel.app/category/automotive",
//               },
//               {
//                 "@type": "ListItem",
//                 position: 7,
//                 name: "Books",
//                 item: "https://amazonaffiliatestore.vercel.app/category/books",
//               },
//               {
//                 "@type": "ListItem",
//                 position: 8,
//                 name: "Fashion",
//                 item: "https://amazonaffiliatestore.vercel.app/category/fashion",
//               },
//             ],
//           }}
//         /> */}
//       </body>
//     </html>
//   )
// }

import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type { Metadata } from "next"
import { JsonLd } from "react-schemaorg"
import type React from "react" // Import React

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
    "affiliate",
    "products",
    "best deals",
    "electronics",
    "home and kitchen",
    "fashion",
    "online shopping",
    "affiliate store",
    "best Amazon deals",
    "discounted products",
    "electronics",
    "home and kitchen",
    "fashion",
    "beauty products",
    "fitness gear",
    "gadgets",
    "tech accessories",
    "smartphones",
    "laptops",
    "gaming accessories",
    "appliances",
    "home decor",
    "trending products",
    "best online shopping",
    "Amazon best sellers",
    "gift ideas",
    "budget deals",
    "limited-time offers",
    "Amazon discounts",
    "shopping online",
    "top-rated products",
    "hot deals",
  ],
  authors: [{ name: "Dr Trailer" }],
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
    creator: "@yamazonaffiliatestore2025",
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
        <JsonLd
          item={{
            "@context": "https://schema.org",
            "@graph": [
              {
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
                    name: "Computers",
                    item: "https://amazonaffiliatestore.vercel.app/category/computers",
                  },
                  {
                    "@type": "ListItem",
                    position: 5,
                    name: "Mobiles",
                    item: "https://amazonaffiliatestore.vercel.app/category/smartphones",
                  },
                  {
                    "@type": "ListItem",
                    position: 6,
                    name: "Automotive",
                    item: "https://amazonaffiliatestore.vercel.app/category/automotive",
                  },
                  {
                    "@type": "ListItem",
                    position: 7,
                    name: "Books",
                    item: "https://amazonaffiliatestore.vercel.app/category/books",
                  },
                  {
                    "@type": "ListItem",
                    position: 8,
                    name: "Fashion",
                    item: "https://amazonaffiliatestore.vercel.app/category/fashion",
                  },
                ],
              },
              {
                "@type": "Organization",
                name: "Amazon Affiliate Store™",
                url: "https://amazonaffiliatestore.vercel.app/",
                image: "https://amazonaffiliatestore.vercel.app/favicon.ico",
                logo: {
                  "@type": "ImageObject",
                  url: "https://amazonaffiliatestore.vercel.app/favicon.ico",
                  width: 280,
                  height: 80,
                },
              },
              {
                "@type": "WebSite",
                url: "https://amazonaffiliatestore.vercel.app",
                name: "Amazon Affiliate Store™",
                publisher: {
                  "@type": "Organization",
                  name: "Amazon Affiliate Store™",
                  url: "https://amazonaffiliatestore.vercel.app",
                },
              },
            ],
          }}
        />
      </body>
    </html>
  )
}

