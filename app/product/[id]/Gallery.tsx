"use client"

import Image from "next/image"
import { useState } from "react"

interface GalleryProps {
  images: string[]
  productName: string
}

export const Gallery = ({ images, productName }: GalleryProps) => {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div>
      <div className="mb-4">
        <Image
          src={mainImage || "/placeholder.jpg"}
          alt={`Main image of ${productName}`}
          width={500}
          height={500}
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button key={index} onClick={() => setMainImage(image)} className="focus:outline-none flex-shrink-0">
            <Image
              src={image || "/placeholder.jpg"}
              alt={`Thumbnail ${index + 1} of ${productName}`}
              width={100}
              height={100}
              className="rounded-md shadow-sm hover:shadow-md transition duration-300 w-20 h-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

