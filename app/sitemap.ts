import type { MetadataRoute } from "next"
import productsData from "./data/products.json"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourdomain.com"

  const productUrls = productsData.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }))

  const staticPages = ["", "/category/electronics", "/category/home-and-kitchen", "/category/fashion", "/blog"].map(
    (page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: page === "" ? 1 : 0.8,
    }),
  )

  return [...staticPages, ...productUrls]
}

