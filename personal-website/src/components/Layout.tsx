'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotionGuard } from '@/lib/useReducedMotionGuard'

interface LayoutProps {
  children: ReactNode
  className?: string
}

export function Layout({ children, className = '' }: LayoutProps) {
  const prefersReducedMotion = useReducedMotionGuard()

  return (
    <motion.div
      className={`min-h-screen bg-black text-white ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
    >
      {children}
    </motion.div>
  )
} 