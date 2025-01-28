import { ProductCard } from "./ProductCard"
import Link from "next/link"

interface Product {
  id: string
  name: string
  price: number
  images: string[]
  category: string
}

interface CategorySectionProps {
  title: string
  products: Product[]
  category: string
}

export const CategorySection: React.FC<CategorySectionProps> = ({ title, products, category }) => {
  const categorySlug = category.toLowerCase().replace(/[&\s]/g, "-")

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
        <Link href={`/category/${categorySlug}`} className="text-blue-500 hover:no-underline bg:text-base text-xl font-bold">
          See all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

