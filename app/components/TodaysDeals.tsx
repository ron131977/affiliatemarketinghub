"use client"

import { useState, useEffect } from "react"
import { ProductCard } from "./ProductCard"
import { formatDate } from "../utils/formatting"

interface Product {
  id: string
  name: string
  price: number
  images: string[]
  category: string
}

interface TodaysDealsProps {
  products: Product[]
}

export const TodaysDeals: React.FC<TodaysDealsProps> = ({ products }) => {
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(formatDate(new Date()))
    }

    updateDate()
    const interval = setInterval(updateDate, 1000 * 60 * 60) // Update every hour

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Today's Deals</h2>
      <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">Offers for {currentDate}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

