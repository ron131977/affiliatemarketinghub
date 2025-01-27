import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { formatCurrency } from "../utils/formatting"

interface Product {
  id: string
  name: string
  price: number
  images: string[]
  category: string
}

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="card group h-full flex flex-col">
        <div className="relative flex-shrink-0">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm text-gray-600">(123)</span>
          </div>
          <p className="text-xl font-bold text-gray-900 mt-auto">{formatCurrency(product.price)}</p>
        </div>
      </div>
    </Link>
  )
}

