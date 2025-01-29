"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export const BackButton = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="mt-5 inline-flex items-center px-3 py-2 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 "
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back
    </button>
  )
}

