import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ProductSchema } from "./ProductSchema"
import { Gallery } from "./Gallery"
import { VideoPlayer } from "./VideoPlayer"
import { BuyButton } from "./BuyButton"
import { Star, Check } from "lucide-react"
import productsData from "../../data/products.json"
import { formatCurrency, formatDate } from "../../utils/formatting"
import Script from "next/script";

const getProduct = async (id: string) => {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 100))
  return productsData.find((p) => p.id === id) || null
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProduct(params.id)

  if (!product) {
    return {
      title: "Product Not Found | AmazonAffiliateStore",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: `${product.name} | Best Price on AmazonAffiliateStore`,
    description: `${product.description.slice(0, 155)}... Buy ${product.name} at the best price.`,
    keywords: [product.name, product.category, "Amazon", "best price", "online shopping"],
    openGraph: {
      title: `${product.name} - Best Deal on AmazonAffiliateStore`,
      description: product.description.slice(0, 200) + "...",
      url: `https://amazonaffiliatestore.vercel.app/product/${product.id}`,
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
      type: "website", // Changed from "product" to "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | AmazonAffiliateStore`,
      description: product.description.slice(0, 200) + "...",
      images: [product.images[0]],
      creator: "@yourtwitterhandle",
    },
    alternates: {
      canonical: `https://amazonaffiliatestore.vercel.app/product/${product.id}`,
    },
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <>
       {/* Google Tag Manager Script */}
       <Script
       src="https://www.googletagmanager.com/gtag/js?id=G-ECQCVNHQ8S"
       strategy="lazyOnload"
       async
     />
     <Script id="google-tag-manager" strategy="lazyOnload">
       {`
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', 'G-ECQCVNHQ8S');
               `}
     </Script>
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex flex-wrap">
          <li className="flex items-center">
            <Link href="/" className="text-blue-500 hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link href={`/category/${product.category}`} className="text-blue-500 hover:text-blue-600">
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

      {/* <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Product Video</h2>
        <VideoPlayer videoUrl={product.video} />
      </section> */}

<section className="mt-12 mb-[100px]">
  <h2 className="text-2xl font-bold mb-4">Product Video</h2>
  <VideoPlayer videoUrl={product.video} />
</section>

      <ProductSchema product={product} />
    </div>
    </>
  )
}

