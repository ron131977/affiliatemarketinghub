import Image from "next/image"
import { ProductCard } from "./components/ProductCard"
import { TodaysDeals } from "./components/TodaysDeals"
import { CategorySection } from "./components/CategorySection"
import productsData from "./data/products.json"
import Head from "next/head";

export default function Home() {
  return (
<>
<Head>
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="googlebot" content="index,follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="referrer" content="origin" />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="https://amazonaffiliatestore.vercel.app/sitemap.xml"
        />
         <meta
          name="google-site-verification"
          content="o8uNsADswyHnNPA69n9gI7u6L4_cdjN4iT5lRhHHtMU"
        />
    
      </Head>

    <div className="container mx-auto px-4 py-8">
      
      <section className="mb-12">
        <div className="relative">
          <Image
            src="/placeholder.jpg"
            alt="Promotional Banner"
            width={1200}
            height={400}
            className="rounded-lg shadow-md w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 rounded-lg"></div>
          <div className="absolute top-1/2 left-4 sm:left-8 transform -translate-y-1/2 text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Amazing Deals</h1>
            <p className="text-sm sm:text-base md:text-xl mb-2 sm:mb-6">
              Discover our curated selection of top products
            </p>
            <button className="btn-primary text-sm sm:text-base">Shop Now</button>
          </div>
        </div>
      </section>

      <TodaysDeals products={productsData.slice(0, 4)} />

      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {productsData.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <CategorySection
        title="Electronics"
        products={productsData.filter((p) => p.category === "electronics").slice(0, 4)}
      />

      <CategorySection
        title="Home & Kitchen"
        products={productsData.filter((p) => p.category === "home-and-kitchen").slice(0, 4)}
      />

      <CategorySection
        title="Mobiles & Accessories"
        products={productsData.filter((p) => p.category === "smartphones").slice(0, 4)}
      />

      <CategorySection
        title="Automotive"
        products={productsData.filter((p) => p.category === "automotive").slice(0, 4)}
      />

      <CategorySection title="Fashion" products={productsData.filter((p) => p.category === "fashion").slice(0, 4)} />
    </div>
    </>
  )
  
}

