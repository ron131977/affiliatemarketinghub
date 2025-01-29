"use client"

import { useEffect, useRef } from "react"
import Hls from "hls.js"

export const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(videoUrl)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play()
      })
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl
      video.addEventListener("loadedmetadata", () => {
        video.play()
      })
    }

    video.muted = true
    video.loop = true
  }, [videoUrl])

  return (
    <div className="aspect-w-16 aspect-h-9">
      <video ref={videoRef} className="w-full h-full rounded-lg shadow-md" playsInline muted loop />
    </div>
  )
}

