'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/scrollVariants'

interface HeroSectionProps {
  headline: string
  subheadline: string
  description: string
  bgImg?: string
  ctaText?: string
  ctaUrl?: string
  resumeUrl?: string
}

export function HeroSection({
  headline,
  subheadline,
  description,
  bgImg,
  ctaText = "Let's Connect",
  ctaUrl = "#contact",
  resumeUrl
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      {bgImg && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8 flex justify-center"
          >
            <img
              src="/Elements/ring (dark).png"
              alt="Decorative ring"
              className="w-32 h-32 md:w-40 md:h-40 opacity-80"
            />
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-ghost bg-clip-text text-transparent"
          >
            {headline}
          </motion.h1>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-semibold mb-4 text-signal"
          >
            {subheadline}
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-ghost mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={ctaUrl}
              className="inline-flex items-center gap-2 px-8 py-3 bg-signal hover:bg-white hover:text-signal text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              {ctaText}
            </a>
            
            {resumeUrl && (
              <a
                href={resumeUrl}
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-signal text-signal hover:bg-signal hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <ArrowDown className="text-ghost" size={24} />
      </motion.div>
    </section>
  )
} 