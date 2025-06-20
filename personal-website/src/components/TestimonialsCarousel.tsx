'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Testimonial } from '@/content/types'
import { fadeInUp } from '@/lib/scrollVariants'

interface TestimonialsCarouselProps {
  quotes: Testimonial[]
  className?: string
}

export function TestimonialsCarousel({ quotes, className = '' }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [quotes.length, isPaused])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl bg-ghost/10 backdrop-blur-sm border border-ghost/20 p-8"
      >
        {/* Quote Icon */}
        <div className="absolute top-6 left-6 text-signal/30">
          <Quote size={32} />
        </div>

        {/* Testimonial Content */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <blockquote className="text-xl md:text-2xl text-ghost leading-relaxed mb-6">
            &ldquo;{quotes[currentIndex].quote}&rdquo;
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            {quotes[currentIndex].avatar && (
              <img
                src={quotes[currentIndex].avatar}
                alt={quotes[currentIndex].author}
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
            <div className="text-left">
              <cite className="not-italic text-white font-semibold">
                {quotes[currentIndex].author}
              </cite>
              <p className="text-signal text-sm">
                {quotes[currentIndex].role} at {quotes[currentIndex].company}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-signal scale-125' 
                  : 'bg-ghost/30 hover:bg-ghost/50'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-ghost hover:text-white transition-colors"
        >
          ←
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-ghost hover:text-white transition-colors"
        >
          →
        </button>
      </motion.div>
    </div>
  )
} 