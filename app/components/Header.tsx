"use client"
import Link from "next/link"
import { Search } from "./Search"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          Amazon Affiliate Store
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="space-x-6">
            <Link href="/category/home-and-kitchen" className="hover:text-yellow-400 transition duration-300">
              Home & Kitchen
            </Link>
            <Link href="/category/electronics" className="hover:text-yellow-400 transition duration-300">
              Electronics
            </Link>

            <Link href="/category/mobiles" className="hover:text-yellow-400 transition duration-300">
              Mobiles
            </Link>
            <Link href="/category/computers" className="hover:text-yellow-400 transition duration-300">
              Computers
            </Link>
            <Link href="/category/automotive" className="hover:text-yellow-400 transition duration-300">
              Automotive
            </Link>
            <Link href="/category/fashion" className="hover:text-yellow-400 transition duration-300">
              Fashion
            </Link>
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
          <Link href="/category/home-and-kitchen" className="hover:text-yellow-400 transition duration-300">
              Home & Kitchen
            </Link>
            <Link href="/category/electronics" className="hover:text-yellow-400 transition duration-300">
              Electronics
            </Link>

            <Link href="/category/mobiles" className="hover:text-yellow-400 transition duration-300">
              Mobiles
            </Link>
            <Link href="/category/computers" className="hover:text-yellow-400 transition duration-300">
              Computers
            </Link>
            <Link href="/category/automotive" className="hover:text-yellow-400 transition duration-300">
              Automotive
            </Link>
            <Link href="/category/fashion" className="hover:text-yellow-400 transition duration-300">
              Fashion
            </Link>
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

