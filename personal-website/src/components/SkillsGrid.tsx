'use client'

import { motion } from 'framer-motion'
import { Skill } from '@/content/types'
import { scaleIn, staggerContainer } from '@/lib/scrollVariants'

interface SkillsGridProps {
  skills: Skill[]
  className?: string
}

export function SkillsGrid({ skills, className = '' }: SkillsGridProps) {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    devops: 'DevOps',
    design: 'Design'
  }

  const proficiencyColors = {
    beginner: 'text-green-400',
    intermediate: 'text-yellow-400',
    advanced: 'text-orange-400',
    expert: 'text-red-400'
  }

  return (
    <div className={className}>
      {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
        <div key={category} className="mb-8">
          <motion.h3
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-white capitalize"
          >
            {categoryLabels[category as keyof typeof categoryLabels]}
          </motion.h3>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {categorySkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="bg-ghost/10 backdrop-blur-sm rounded-lg p-4 border border-ghost/20 hover:border-signal/50 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  {/* Skill Icon */}
                  <div className="text-4xl group-hover:text-signal transition-colors duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <h4 className="font-semibold text-white text-sm">
                    {skill.name}
                  </h4>
                  
                  {/* Proficiency Level */}
                  <span className={`text-xs font-medium ${proficiencyColors[skill.proficiency]}`}>
                    {skill.proficiency}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  )
} 