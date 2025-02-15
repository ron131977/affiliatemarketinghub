// import Image from "next/image"
// import { ProductCard } from "./components/ProductCard"
// import { TodaysDeals } from "./components/TodaysDeals"
// import { CategorySection } from "./components/CategorySection"
// import productsData from "./data/products.json"
// import Head from "next/head"
// import Script from "next/script"

// export default function Home() {
//   const uwatchfreeSchema = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "AmazonAffiliateStore™ ",
//     url: "https://amazonaffiliatestore.vercel.app/",
//     image: "https://amazonaffiliatestore.vercel.app/favicon.ico",
//     logo: {
//       "@type": "ImageObject",
//       url: "https://amazonaffiliatestore.vercel.app//favicon.ico",
//       width: 280,
//       height: 80,
//     },
//   }

//   const rankMathSchema = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     url: "https://amazonaffiliatestore.vercel.app",
//     name: "AmazonAffiliateStore™ ",
//     publisher: {
//       "@type": "Organization",
//       name: "AmazonAffiliateStore™ ",
//       url: "https://amazonaffiliatestore.vercel.app",
//     },
//   }

//   return (
//     <>
//       <Head>
//         <link rel="icon" type="image/x-icon" href="/favicon.ico" />
//         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//         <link rel="manifest" href="/site.webmanifest" />
//         <meta name="googlebot" content="index,follow" />
//         <meta name="revisit-after" content="1 days" />
//         <meta name="referrer" content="origin" />
//         <link
//           rel="sitemap"
//           type="application/xml"
//           title="Sitemap"
//           href="https://amazonaffiliatestore.vercel.app/sitemap.xml"
//         />
//         <meta name="google-site-verification" content="RNN2teFhD-lV1TQ9qcLQiSO5BLBB4DmztyYJS6QLqDg" />
//       </Head>
//       <Script type="application/ld+json">{JSON.stringify(uwatchfreeSchema)}</Script>
//       <Script type="application/ld+json">{JSON.stringify(rankMathSchema)}</Script>
//       {/* Google Tag Manager Script */}
//       <Script src="https://www.googletagmanager.com/gtag/js?id=G-ECQCVNHQ8S" strategy="lazyOnload" async />
//       <Script id="google-tag-manager" strategy="lazyOnload">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-ECQCVNHQ8S');
//         `}
//       </Script>
//       <div className="container mx-auto px-4 py-8">
//         <section className="mb-12">
//           <div className="relative">
//             <Image
//               src="/placeholder.jpg"
//               alt="Promotional Banner"
//               width={1200}
//               height={400}
//               className="rounded-lg shadow-md w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 rounded-lg"></div>
//             <div className="absolute top-1/2 left-4 sm:left-8 transform -translate-y-1/2 text-white">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Amazing Deals</h1>
//               <p className="text-sm sm:text-base md:text-xl mb-2 sm:mb-6">
//                 Discover our curated selection of top products
//               </p>
//               <button className="btn-primary text-sm sm:text-base">Shop Now</button>
//             </div>
//           </div>
//         </section>
//         <section className="mb-12">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Limited Time Offer !!!</h2>
//         </section>

//         <TodaysDeals products={productsData.slice(0, 4)} />

//         <section className="mb-12">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Featured Products</h2>
//           <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
//             Best Selected Latest & Branded Products.
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//             {productsData.slice(0, 8).map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </section>

//         <CategorySection
//           title="Electronics & Accessories"
//           products={productsData.filter((p) => p.category === "electronics").slice(0, 4)}
//           category="electronics"
//         />

//         <CategorySection
//           title="Home & Kitchen & Accessories"
//           products={productsData.filter((p) => p.category === "home-and-kitchen").slice(0, 4)}
//           category="home-and-kitchen"
//         />

//         <CategorySection
//           title="Mobiles & Accessories"
//           products={productsData.filter((p) => p.category === "smartphones").slice(0, 4)}
//           category="smartphones"
//         />

//         <CategorySection
//           title="Computers & Accessories"
//           products={productsData.filter((p) => p.category === "computers").slice(0, 4)}
//           category="computers"
//         />

//         <CategorySection
//           title="Automotive & Accessories"
//           products={productsData.filter((p) => p.category === "automotive").slice(0, 4)}
//           category="automotive"
//         />

//         <CategorySection
//           title="Fashion & Accessories"
//           products={productsData.filter((p) => p.category === "fashion").slice(0, 4)}
//           category="fashion"
//         />
//       </div>
//     </>
//   )
// }

























































// "use client"

// import Image from "next/image"
// import { useEffect, useState } from "react"
// import { ProductCard } from "./components/ProductCard"
// import { TodaysDeals } from "./components/TodaysDeals"
// import { CategorySection } from "./components/CategorySection"
// import productsData from "./data/products.json"
// import Head from "next/head"
// import Script from "next/script"

// export default function Home() {
//   const uwatchfreeSchema = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "AmazonAffiliateStore™ ",
//     url: "https://amazonaffiliatestore.vercel.app/",
//     image: "https://amazonaffiliatestore.vercel.app/favicon.ico",
//     logo: {
//       "@type": "ImageObject",
//       url: "https://amazonaffiliatestore.vercel.app//favicon.ico",
//       width: 280,
//       height: 80,
//     },
//   }

//   const rankMathSchema = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     url: "https://amazonaffiliatestore.vercel.app",
//     name: "AmazonAffiliateStore™ ",
//     publisher: {
//       "@type": "Organization",
//       name: "AmazonAffiliateStore™ ",
//       url: "https://amazonaffiliatestore.vercel.app",
//     },
//   }

//   const [featuredProducts, setFeaturedProducts] = useState(productsData.slice(0, 12))
//   const [startIndex, setStartIndex] = useState(0)

//   // Logic to rotate featured products every 10 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStartIndex((prevIndex) => {
//         const newIndex = (prevIndex + 12) % productsData.length // Loop through products
//         setFeaturedProducts(productsData.slice(newIndex, newIndex + 12))
//         return newIndex
//       })
//     }, 10000) // 10 seconds

//     return () => clearInterval(interval) // Cleanup on unmount
//   }, [])

//   return (
//     <>
//       <Head>
//         <link rel="icon" type="image/x-icon" href="/favicon.ico" />
//         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//         <link rel="manifest" href="/site.webmanifest" />
//         <meta name="googlebot" content="index,follow" />
//         <meta name="revisit-after" content="1 days" />
//         <meta name="referrer" content="origin" />
//         <link
//           rel="sitemap"
//           type="application/xml"
//           title="Sitemap"
//           href="https://amazonaffiliatestore.vercel.app/sitemap.xml"
//         />
//         <meta name="google-site-verification" content="RNN2teFhD-lV1TQ9qcLQiSO5BLBB4DmztyYJS6QLqDg" />
//       </Head>
//       <Script type="application/ld+json">{JSON.stringify(uwatchfreeSchema)}</Script>
//       <Script type="application/ld+json">{JSON.stringify(rankMathSchema)}</Script>
//       {/* Google Tag Manager Script */}
//       <Script src="https://www.googletagmanager.com/gtag/js?id=G-ECQCVNHQ8S" strategy="lazyOnload" async />
//       <Script id="google-tag-manager" strategy="lazyOnload">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-ECQCVNHQ8S');
//         `}
//       </Script>
//       <div className="container mx-auto px-4 py-8">
//         <section className="mb-12">
//           <div className="relative">
//             <Image
//               src="/placeholder.jpg"
//               alt="Promotional Banner"
//               width={1200}
//               height={400}
//               className="rounded-lg shadow-md w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 rounded-lg"></div>
//             <div className="absolute top-1/2 left-4 sm:left-8 transform -translate-y-1/2 text-white">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Amazing Deals</h1>
//               <p className="text-sm sm:text-base md:text-xl mb-2 sm:mb-6">
//                 Discover our curated selection of top products
//               </p>
//               <button className="btn-primary text-sm sm:text-base">Shop Now</button>
//             </div>
//           </div>
//         </section>
//         <section className="mb-12">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Limited Time Offer !!!</h2>
//         </section>

//         <TodaysDeals products={productsData.slice(0, 4)} />

//         <section className="mb-12">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Featured Products</h2>
//           <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
//             Best Selected Latest & Branded Products.
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//             {featuredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </section>

//         <CategorySection
//           title="Electronics & Accessories"
//           products={productsData.filter((p) => p.category === "electronics").slice(0, 4)}
//           category="electronics"
//         />

//         <CategorySection
//           title="Home & Kitchen & Accessories"
//           products={productsData.filter((p) => p.category === "home-and-kitchen").slice(0, 4)}
//           category="home-and-kitchen"
//         />

//         <CategorySection
//           title="Mobiles & Accessories"
//           products={productsData.filter((p) => p.category === "smartphones").slice(0, 4)}
//           category="smartphones"
//         />

//         <CategorySection
//           title="Computers & Accessories"
//           products={productsData.filter((p) => p.category === "computers").slice(0, 4)}
//           category="computers"
//         />

//         <CategorySection
//           title="Automotive & Accessories"
//           products={productsData.filter((p) => p.category === "automotive").slice(0, 4)}
//           category="automotive"
//         />

//         <CategorySection
//           title="Fashion & Accessories"
//           products={productsData.filter((p) => p.category === "fashion").slice(0, 4)}
//           category="fashion"
//         />
//       </div>
//     </>
//   )
// }













"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ProductCard } from "./components/ProductCard"
import { TodaysDeals } from "./components/TodaysDeals"
import { CategorySection } from "./components/CategorySection"
import productsData from "./data/products.json"
import Head from "next/head"
import Script from "next/script"

export default function Home() {
  // const uwatchfreeSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   name: "Amazon Affiliate Store™ ",
  //   url: "https://amazonaffiliatestore.vercel.app/",
  //   image: "https://amazonaffiliatestore.vercel.app/favicon.ico",
  //   logo: {
  //     "@type": "ImageObject",
  //     url: "https://amazonaffiliatestore.vercel.app//favicon.ico",
  //     width: 280,
  //     height: 80,
  //   },
  // }

  // const rankMathSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "WebSite",
  //   url: "https://amazonaffiliatestore.vercel.app",
  //   name: "Amazon Affiliate Store™ ",
  //   publisher: {
  //     "@type": "Organization",
  //     name: "Amazon Affiliate Store™ ",
  //     url: "https://amazonaffiliatestore.vercel.app",
  //   },
  // }

  const [featuredProducts, setFeaturedProducts] = useState(productsData.slice(0, 8))

  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Randomly update featured products every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const shuffledProducts = shuffleArray(productsData)
      setFeaturedProducts(shuffledProducts.slice(0, 8))
    }, 10000) // 10 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
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
        <meta name="google-site-verification" content="RNN2teFhD-lV1TQ9qcLQiSO5BLBB4DmztyYJS6QLqDg" />
        <meta name="yandex-verification" content="2ed424cb83002f12" />
        <meta name="msvalidate.01" content="695BD01C3BC615AB69B7E9C3B718EB74" />
        {/* <Script type="application/ld+json">{JSON.stringify(uwatchfreeSchema)}</Script>
        <Script type="application/ld+json">{JSON.stringify(rankMathSchema)}</Script> */}

        <meta name="google-adsense-account" content="ca-pub-4821855388989115" />
      </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4821855388989115"
        crossorigin="anonymous"></Script>

      {/* Google Tag Manager Script */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-ECQCVNHQ8S" strategy="lazyOnload" async />
      <Script id="google-tag-manager" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ECQCVNHQ8S');
        `}
      </Script>
      <div className="container mx-auto px-4 py-8 ">
        <section className="mb-12 mt-12">
          <div className="relative">
            <Image
              src="/placeholder.jpg"
              alt="Promotional Banner"
              width={1200}
              height={400}
              quality={90}
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
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Limited Time Offer !!!</h2>
        </section>

        <TodaysDeals products={productsData.slice(0, 4)} />

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Featured Products</h2>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Best Selected Latest & Branded Products.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <CategorySection
          title="Electronics & Accessories"
          products={productsData.filter((p) => p.category === "electronics").slice(0, 4)}
          category="electronics"
        />

        <CategorySection
          title="Home & Kitchen & Accessories"
          products={productsData.filter((p) => p.category === "home-and-kitchen").slice(0, 4)}
          category="home-and-kitchen"
        />

        <CategorySection
          title="Mobiles & Accessories"
          products={productsData.filter((p) => p.category === "smartphones").slice(0, 4)}
          category="smartphones"
        />

        <CategorySection
          title="Computers & Accessories"
          products={productsData.filter((p) => p.category === "computers").slice(0, 4)}
          category="computers"
        />

        <CategorySection
          title="Automotive & Accessories"
          products={productsData.filter((p) => p.category === "automotive").slice(0, 4)}
          category="automotive"
        />

        <CategorySection
          title="Fashion & Accessories"
          products={productsData.filter((p) => p.category === "fashion").slice(0, 4)}
          category="fashion"
        />

        <CategorySection
          title="Books"
          products={productsData.filter((p) => p.category === "books").slice(0, 4)}
          category="books"
        />
      </div>
    </>
  )
}
