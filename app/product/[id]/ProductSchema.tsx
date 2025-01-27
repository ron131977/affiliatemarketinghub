import type { Product, AggregateRating, Review, Offer } from "schema-dts"
import { JsonLd } from "react-schemaorg"

interface ProductSchemaProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    images: string[]
    amazonLink: string
    features: string[]
    category: string
  }
}

export const ProductSchema = ({ product }: ProductSchemaProps) => {
  const productSchema: Product = {
    "@context": "https://schema.org",
    "@type": "Product",
    productID: product.id,
    name: product.name,
    description: product.description,
    image: product.images,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: product.amazonLink,
      seller: {
        "@type": "Organization",
        name: "Amazon",
      },
    } as Offer,
    brand: {
      "@type": "Brand",
      name: "Amazon",
    },
    category: product.category,
    sku: `SKU-${product.id}`,
    mpn: `MPN-${product.id}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "123",
      bestRating: "5",
      worstRating: "1",
    } as AggregateRating,
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Dr Trailer",
      },
      datePublished: "2025-01-01",
      reviewBody: "This product exceeded my expectations. Highly recommended!",
    } as Review,
  }

  return <JsonLd<Product> item={productSchema} />
}

