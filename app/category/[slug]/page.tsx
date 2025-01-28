import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ProductCard } from "../../components/ProductCard"
import productsData from "../../data/products.json"
import { BackButton } from "../../components/BackButton"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryName(params.slug)
  if (!category) {
    return {
      title: "Category Not Found | AmazonAffiliateStore",
      description: "The requested category could not be found.",
    }
  }

  return {
    title: `${category} | AmazonAffiliateStore`,
    description: `Explore our wide range of ${category.toLowerCase()} products. Find the best deals on ${category.toLowerCase()} at AmazonAffiliateStore.`,
    openGraph: {
      title: `${category} Products | AmazonAffiliateStore`,
      description: `Discover amazing ${category.toLowerCase()} products at unbeatable prices. Shop now at AmazonAffiliateStore.`,
      type: "website",
    },
  }
}

function getCategoryName(slug: string): string {
  const categoryMap: { [key: string]: string } = {
    "home-and-kitchen": "Home & Kitchen",
    electronics: "Electronics",
    smartphones: "Mobiles",
    computers: "Computers",
    automotive: "Automotive",
    fashion: "Fashion",
  }
  return categoryMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ")
}

function getCategorySlug(category: string): string {
  return category.toLowerCase().replace(/[&\s]/g, "-")
}

export default function CategoryPage({ params }: Props) {
  const categoryName = getCategoryName(params.slug)
  if (!categoryName) {
    notFound()
  }

  const products = productsData.filter((product) => getCategorySlug(product.category) === params.slug.toLowerCase())

  console.log(`Category: ${categoryName}, Slug: ${params.slug}, Products found: ${products.length}`)

  if (products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <BackButton />
        </div>
        <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>
        <p>No products found in this category.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <BackButton />
      </div>
      <h1 className="text-3xl font-bold mb-6">{categoryName} & Accessories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-[75px]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export function generateStaticParams() {
  const categories = [...new Set(productsData.map((product) => getCategorySlug(product.category)))]
  return categories.map((category) => ({
    slug: category,
  }))
}

