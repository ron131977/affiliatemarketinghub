import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ProductSchema } from "../../../components/ProductSchema"
import { Gallery } from "../../../components/Gallery"
import { VideoPlayer } from "../../../components/VideoPlayer"
import { BuyButton } from "../../../components/BuyButton"
import { Star, Check } from "lucide-react"
import productsData from "../../../data/products.json"
import { formatCurrency } from "../../../utils/formatting"
import { BackButton } from "../../../components/BackButton"

type Props = {
  params: { category: string; productId: string }
}

const getProduct = async (category: string, productId: string) => {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 100))
  return (
    productsData.find((p) => p.id === productId && p.category.toLowerCase().replace(/[&\s]/g, "-") === category) || null
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params.category, params.productId)

  if (!product) {
    return {
      title: "Product Not Found | AmazonAffiliateStore",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: `${product.name}`,
    description: `${product.description.slice(0, 155)}... Buy ${product.name} at the best price.`,
    keywords: [product.name, product.category, "Amazon", "best price", "online shopping"],
    openGraph: {
      title: `${product.name}`,
      description: product.description.slice(0, 200) + "...",
      url: `https://amazonaffiliatestore.vercel.app/category/${params.category}/${product.id}`,
      siteName: "AmazonAffiliateStore",
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | AmazonAffiliateStore`,
      description: product.description.slice(0, 200) + "...",
      images: [product.images[0]],
      creator: "@yourtwitterhandle",
    },
    alternates: {
      canonical: `https://amazonaffiliatestore.vercel.app/category/${params.category}/${product.id}`,
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.category, params.productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <BackButton />
      </div>
      <nav className="text-sm mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex flex-wrap">
          <li className="flex items-center">
            <Link href="/" className="text-blue-500 hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link href={`/category/${params.category}`} className="text-blue-500 hover:text-blue-600">
              {product.category}
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-500">{product.name}</span>
          </li>
        </ol>
      </nav>

      <article className="grid md:grid-cols-2 gap-8">
        <div>
          <Gallery images={product.images} productName={product.name} />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
            ))}
            <span className="ml-2 text-blue-500 hover:underline cursor-pointer text-sm sm:text-base">123 ratings</span>
          </div>
          <div className="border-b border-gray-200 pb-4 mb-4">
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{formatCurrency(product.price)}</p>
            <p className="text-green-600 font-semibold">In Stock</p>
          </div>
          <div className="prose max-w-none mb-6">
            <p>{product.description}</p>
          </div>
          <BuyButton link={product.amazonLink} />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Product Video</h2>
        <VideoPlayer videoUrl={product.video} />
      </section>

      <ProductSchema product={product} />
    </div>
  )
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    category: product.category.toLowerCase().replace(/[&\s]/g, "-"),
    productId: product.id,
  }))
}

