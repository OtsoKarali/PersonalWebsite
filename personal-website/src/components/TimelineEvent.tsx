'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/scrollVariants'
import { Milestone } from '@/content/types'
import Image from 'next/image'

interface TimelineEventProps {
  event: Milestone
  index: number
  prefersReducedMotion: boolean
}

export function TimelineEvent({ event, index, prefersReducedMotion }: TimelineEventProps) {
  return (
    <motion.div
      variants={prefersReducedMotion ? {} : fadeInUp}
      className="relative flex items-start"
    >
      {/* Timeline dot */}
      <div className="absolute left-6 w-4 h-4 bg-signal rounded-full border-4 border-navy transform -translate-x-1/2" />
      
      {/* Content */}
      <div className="ml-16 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative bg-ghost/10 backdrop-blur-sm rounded-lg p-6 border border-ghost/20"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-signal bg-signal/20 px-3 py-1 rounded-full">
              {event.date}
            </span>
            {event.logo && (
              <div className="relative h-10 w-20">
                <Image
                  src={event.logo}
                  alt={`${event.title} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-md"
                />
              </div>
            )}
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
            {event.icon && (
              <span className="text-2xl">{event.icon}</span>
            )}
            {event.title}
          </h3>
          
          <p className="text-ghost leading-relaxed">
            {event.summary}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
} 