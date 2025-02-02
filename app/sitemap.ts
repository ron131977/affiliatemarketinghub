// import type { MetadataRoute } from "next"
// import productsData from "./data/products.json"

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const baseUrl = "https://amazonaffiliatestore.vercel.app"

//   // Generate product URLs
//   const productUrls = productsData.map((product) => ({
//     url: `${baseUrl}/category/${product.category.toLowerCase().replace(/[&\s]/g, "-")}/${product.id}`,
//     lastModified: new Date(),
//     changeFrequency: "daily" as const,
//     priority: 0.9,
//     images: [
//       {
//         loc: product.images[0],
//         title: product.name,
//       },
//     ],
//   }))

//   // Generate category URLs
//   const categories = [...new Set(productsData.map((product) => product.category.toLowerCase().replace(/[&\s]/g, "-")))]
//   const categoryUrls = categories.map((category) => ({
//     url: `${baseUrl}/category/${category}`,
//     lastModified: new Date(),
//     changeFrequency: "weekly" as const,
//     priority: 0.8,
//   }))

//   // Add static pages
//   const staticPages = [
//     { url: baseUrl, changeFrequency: "daily" as const, priority: 1.0 },
//     { url: `${baseUrl}/contact`, changeFrequency: "monthly" as const, priority: 0.7 },
//     { url: `${baseUrl}/faq`, changeFrequency: "monthly" as const, priority: 0.7 },
//     { url: `${baseUrl}/privacy-policy`, changeFrequency: "monthly" as const, priority: 0.7 },
//     { url: `${baseUrl}/terms-of-service`, changeFrequency: "monthly" as const, priority: 0.7 },
//   ]

//   return [...staticPages, ...categoryUrls, ...productUrls]
// }

