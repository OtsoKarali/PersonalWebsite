'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react'
import { Project } from '@/content/types'
import { scaleIn } from '@/lib/scrollVariants'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`bg-ghost/10 backdrop-blur-sm rounded-xl border border-ghost/20 overflow-hidden ${className}`}
    >
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2 text-white">
              {project.name}
            </h3>
            <p className="text-signal font-semibold mb-3">
              {project.headline}
            </p>
          </div>
          
          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-4 p-2 text-ghost hover:text-white transition-colors"
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {/* Description */}
        <p className="text-ghost mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-signal/20 text-signal text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mb-4">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-signal hover:bg-white hover:text-signal text-white font-semibold rounded-lg transition-all duration-300"
            >
              <Github size={16} />
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-signal text-signal hover:bg-signal hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>

        {/* Expandable Impact Metrics */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-ghost/20 pt-4"
            >
              <h4 className="text-lg font-semibold mb-3 text-white">
                Impact & Results
              </h4>
              <ul className="space-y-2">
                {project.impactKPI.map((kpi, index) => (
                  <li key={index} className="flex items-center gap-2 text-ghost">
                    <div className="w-2 h-2 bg-signal rounded-full" />
                    {kpi}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
} 