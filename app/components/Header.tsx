"use client"
import Link from "next/link"
import { Search } from "./Search"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    { name: "Home & Kitchen", slug: "home-and-kitchen" },
    { name: "Electronics", slug: "electronics" },
    { name: "Mobiles", slug: "smartphones" },
    { name: "Computers", slug: "computers" },
    { name: "Automotive", slug: "automotive" },
    { name: "Fashion", slug: "fashion" },
    { name: "Books", slug: "books" },
  ]

  return (
    <header className="bg-gray-900 text-white py-4 ">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          Amazon Affiliate Store
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="space-x-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="hover:text-yellow-400 transition duration-300"
              >
                {category.name}
              </Link>
            ))}
          </nav>
          <Search />
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-4 py-2">
          <nav className="flex flex-nowrap overflow-x-auto space-x-4 pb-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="whitespace-nowrap hover:text-yellow-400 transition duration-300"
              >
                {category.name}
              </Link>
            ))}
          </nav>
          <div className="mt-4">
            <Search />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

