"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SearchIcon } from "lucide-react"

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center w-full max-w-xs">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-yellow-400 text-black rounded-r-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        <SearchIcon size={20} />
      </button>
    </form>
  )
}

