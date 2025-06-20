'use client'

import { motion } from 'framer-motion'
import { useReducedMotionGuard } from '@/lib/useReducedMotionGuard'
import { staggerContainer } from '@/lib/scrollVariants'
import { Milestone } from '@/content/types'
import { TimelineEvent } from './TimelineEvent'

interface TimelineProps {
  events: Milestone[]
  className?: string
}

export function Timeline({ events, className = '' }: TimelineProps) {
  const prefersReducedMotion = useReducedMotionGuard()

  return (
    <div className={`relative ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-signal/30" />
      
      <motion.div
        variants={prefersReducedMotion ? {} : staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            event={event}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </motion.div>
    </div>
  )
} 