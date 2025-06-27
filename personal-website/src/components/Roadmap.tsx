import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Milestone } from '@/content/types';

interface ZigZagTimelineProps {
  events: Milestone[];
  className?: string;
}

export function ZigZagTimeline({ events, className = '' }: ZigZagTimelineProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`relative w-full py-12 ${className}`}>
      {/* Central vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-signal/30 -translate-x-1/2 z-0" />
      <div className="flex flex-col gap-20 relative z-10">
        {events.map((event, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              className={`relative flex w-full items-center justify-${isLeft ? 'start' : 'end'} group`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Connector to center line */}
              <div className="absolute left-1/2 top-1/2 w-6 h-1 bg-signal/50 -translate-x-1/2 -translate-y-1/2 z-0" style={{ [isLeft ? 'marginLeft' : 'marginRight']: '0.5rem' }} />
              {/* Node */}
              <div
                className={`relative flex flex-col items-center ${isLeft ? 'ml-0 mr-auto' : 'mr-0 ml-auto'} cursor-pointer`}
                style={{ width: '340px', minWidth: '260px' }}
              >
                <div className="w-32 h-32 rounded-full bg-navy border-4 border-signal flex items-center justify-center shadow-xl relative z-10">
                  {event.logo && (
                    <Image
                      src={event.logo}
                      alt={event.title + ' logo'}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded-full"
                    />
                  )}
                  {!event.logo && (
                    <span className="text-5xl">{event.icon}</span>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <div className="text-lg font-bold text-white whitespace-nowrap">{event.title}</div>
                  <div className="text-sm text-signal/80 whitespace-nowrap">{event.date}</div>
                </div>
                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredIndex === idx && event.bullets && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 20 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-96 max-w-[90vw] bg-navy border border-signal/40 rounded-xl shadow-2xl p-6 z-20"
                    >
                      <ul className="list-disc pl-6 text-left text-white text-base leading-relaxed space-y-3 font-medium">
                        {event.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
} 