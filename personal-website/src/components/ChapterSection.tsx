'use client'

import { ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotionGuard } from '@/lib/useReducedMotionGuard'
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/scrollVariants'

interface ChapterSectionProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  media?: {
    type: 'image' | 'video'
    src: string
    alt?: string
  }
  className?: string
  centered?: boolean
}

export function ChapterSection({
  id,
  title,
  subtitle,
  children,
  media,
  className = '',
  centered = false
}: ChapterSectionProps) {
  const prefersReducedMotion = useReducedMotionGuard()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section
      ref={ref}
      id={id}
      className={`min-h-screen flex items-center justify-center py-20 ${className}`}
    >
      <div className="container mx-auto px-4">
        {centered ? (
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="space-y-6"
              style={prefersReducedMotion ? {} : { opacity, y }}
            >
              <motion.div
                variants={prefersReducedMotion ? {} : fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-ghost bg-clip-text text-transparent">
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-xl text-signal font-semibold mb-6">
                    {subtitle}
                  </p>
                )}
              </motion.div>
              
              <motion.div
                variants={prefersReducedMotion ? {} : slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="prose prose-lg prose-invert max-w-none"
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                className="space-y-6"
                style={prefersReducedMotion ? {} : { opacity, y }}
              >
                <motion.div
                  variants={prefersReducedMotion ? {} : fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-ghost bg-clip-text text-transparent">
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="text-xl text-signal font-semibold mb-6">
                      {subtitle}
                    </p>
                  )}
                </motion.div>
                
                <motion.div
                  variants={prefersReducedMotion ? {} : slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="prose prose-lg prose-invert max-w-none"
                >
                  {children}
                </motion.div>
              </motion.div>

              {/* Media */}
              {media && (
                <motion.div
                  variants={prefersReducedMotion ? {} : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative"
                >
                  {media.type === 'image' ? (
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={media.src}
                        alt={media.alt || title}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  ) : (
                    <video
                      src={media.src}
                      controls
                      className="w-full rounded-2xl shadow-2xl"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
} 