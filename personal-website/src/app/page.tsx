'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection'
import { ChapterSection } from '@/components/ChapterSection'
import { Timeline } from '@/components/Timeline'
import { ProjectCard } from '@/components/ProjectCard'
import { SkillsGrid } from '@/components/SkillsGrid'
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel'
import { FooterCTA } from '@/components/FooterCTA'
import { projects, skills, testimonials, milestones } from '@/content/data'
import { HeroVideo } from '@/components/HeroVideo'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const [isEntered, setIsEntered] = useState(false);
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);

  useEffect(() => {
    if (!isEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup
    };
  }, [isEntered]);
  
  const handleEnter = () => {
    if (isEntered) return;
    setIsEntered(true);
  }

  return (
    <>
      <AnimatePresence>
        {!isEntered && (
          <HeroVideo 
            isRevealed={isEntered}
            onEnter={handleEnter}
            onHover={setIsHoveringVideo}
          />
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isEntered ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      >
        <main className="min-h-screen">
          <HeroSection
            headline="Otso Karali"
            subheadline="Mathematics & Computer Science Student"
            description="Aspiring quantitative researcher with a passion for applying mathematical and computational skills to solve complex financial problems on Wall Street."
            resumeUrl="/OtsoKarali_Resume.pdf"
          />

          <ChapterSection
            id="about"
            title="About Me"
            subtitle="Driven by data, passionate about markets."
          >
            <div className="space-y-6">
              <p className="text-lg text-ghost leading-relaxed">
                I am a dedicated Mathematics and Computer Science student at the University of Virginia with a strong interest in quantitative finance. My academic journey is focused on building a deep understanding of algorithms, data structures, and statistical modeling.
              </p>
              
              <p className="text-lg text-ghost leading-relaxed">
                Outside of the classroom, I am actively involved in the UVA Geometry Lab, Cavalier Trading, and pursuing personal projects in machine learning and trading systems. I thrive on solving complex problems and am eager to apply my skills in a fast-paced, results-oriented environment like a hedge fund.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-navy/50 rounded-lg">
                  <div className="text-3xl font-bold text-signal mb-2">3.9/4.0</div>
                  <div className="text-ghost">Overall GPA</div>
                </div>
                <div className="text-center p-4 bg-navy/50 rounded-lg">
                  <div className="text-3xl font-bold text-signal mb-2">4.0/4.0</div>
                  <div className="text-ghost">Major GPA</div>
                </div>
              </div>
            </div>
          </ChapterSection>

          <ChapterSection
            id="journey"
            title="My Experience"
            subtitle="From research to quantitative finance"
          >
            <Timeline events={milestones} />
          </ChapterSection>

          <ChapterSection
            id="skills"
            title="Technical Skills"
            subtitle="Languages and technologies I use"
          >
            <SkillsGrid skills={skills} />
          </ChapterSection>

          <ChapterSection
            id="projects"
            title="Featured Projects"
            subtitle="Applying theory to practice"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </ChapterSection>

          <FooterCTA
            resumeUrl="/OtsoKarali_Resume.pdf"
            socialLinks={{
              github: 'https://github.com/OtsoKarali',
              linkedin: 'https://linkedin.com/in/otsokarali',
              email: 'ret7qp@virginia.edu'
            }}
          />
        </main>
      </motion.div>
    </>
  )
}
