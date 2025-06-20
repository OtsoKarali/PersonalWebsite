'use client'

import { useState, useEffect } from 'react'

interface UseLazyImageProps {
  src: string
  alt: string
  placeholder?: string
}

export function useLazyImage({ src, placeholder }: UseLazyImageProps) {
  const [imageSrc, setImageSrc] = useState(placeholder || src)
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let observer: IntersectionObserver
    let didCancel = false

    if (imageRef && imageSrc === placeholder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src)
                observer.unobserve(imageRef)
              }
            })
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        )
        observer.observe(imageRef)
      } else {
        setImageSrc(src)
      }
    }

    return () => {
      didCancel = true
      if (observer && observer.unobserve && imageRef) {
        observer.unobserve(imageRef)
      }
    }
  }, [src, imageSrc, placeholder, imageRef])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return {
    imageSrc,
    imageRef: setImageRef,
    isLoaded,
    handleLoad,
  }
} 