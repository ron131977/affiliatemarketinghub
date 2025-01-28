"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export const BackButton = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back
    </button>
  )
}

