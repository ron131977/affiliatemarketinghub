// "use client"

// import Image from "next/image"
// import { useState } from "react"

// interface GalleryProps {
//   images: string[]
//   productName: string
// }

// export const Gallery = ({ images, productName }: GalleryProps) => {
//   const [mainImage, setMainImage] = useState(images[0])

//   return (
//     <div>
//       <div className="mb-4">
//         <Image
//           src={mainImage || "/placeholder.svg"}
//           alt={`Main image of ${productName}`}
//           width={500}
//           height={500}
//           className="rounded-lg shadow-md w-full h-auto"
//         />
//       </div>
//       <div className="flex space-x-2 overflow-x-auto pb-2">
//         {images.map((image, index) => (
//           <button key={index} onClick={() => setMainImage(image)} className="focus:outline-none flex-shrink-0">
//             <Image
//               src={image || "/placeholder.svg"}
//               alt={`Thumbnail ${index + 1} of ${productName}`}
//               width={100}
//               height={100}
//               className="rounded-md shadow-sm hover:shadow-md transition duration-300 w-20 h-20 object-cover"
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }

"use client"

import Image from "next/image"
import { useState, useRef } from "react"

interface GalleryProps {
  images: string[]
  productName: string
}

export const Gallery: React.FC<GalleryProps> = ({ images, productName }) => {
  const [mainImage, setMainImage] = useState(images[0])
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect()
      const x = ((e.clientX - left) / width) * 100
      const y = ((e.clientY - top) / height) * 100
      setZoomPosition({ x, y })
    }
  }

  return (
    <div>
      <div
        className="relative mb-4 overflow-hidden"
        style={{ paddingBottom: "100%" }} // 1:1 aspect ratio
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
        ref={imageRef}
      >
        <Image
          src={mainImage || "/placeholder.svg"}
          alt={`Main image of ${productName}`}
          fill
          className={`object-cover rounded-lg shadow-md transition-transform duration-200 ease-out ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
          style={{
            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className="focus:outline-none flex-shrink-0"
            aria-label={`View ${productName} image ${index + 1}`}
          >
            <Image
              src={image || "/placeholder.svg"}
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

