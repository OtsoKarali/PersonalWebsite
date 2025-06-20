'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotionGuard } from '@/lib/useReducedMotionGuard'

interface ScrollProgressBarProps {
  height?: number
  accentColor?: string
}

export function ScrollProgressBar({ 
  height = 3, 
  accentColor = '#185ADB' 
}: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll()
  const prefersReducedMotion = useReducedMotionGuard()
  
  const scaleX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  )

  if (prefersReducedMotion) {
    return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 origin-left"
      style={{
        height: `${height}px`,
        scaleX,
        backgroundColor: accentColor,
      }}
    />
  )
} 