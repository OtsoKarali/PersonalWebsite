'use client'

import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

interface FooterCTAProps {
  socialLinks?: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
  className?: string
}

export function FooterCTA({ 
  socialLinks = {},
  className = '' 
}: FooterCTAProps) {
  return (
    <section className={`py-20 ${className}`} id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-ghost bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <div className="flex flex-col items-center gap-6">
            {socialLinks.email && (
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center gap-3 p-4 bg-black/50 rounded-lg hover:bg-signal/20 transition-colors group text-white font-medium"
              >
                <Mail className="text-signal group-hover:text-white transition-colors" size={24} />
                {socialLinks.email}
              </a>
            )}
            <div className="flex gap-4 justify-center">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/50 rounded-lg hover:bg-signal/20 transition-colors group"
                >
                  <Github className="text-signal group-hover:text-white transition-colors" size={24} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/50 rounded-lg hover:bg-signal/20 transition-colors group"
                >
                  <Linkedin className="text-signal group-hover:text-white transition-colors" size={24} />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/50 rounded-lg hover:bg-signal/20 transition-colors group"
                >
                  <Twitter className="text-signal group-hover:text-white transition-colors" size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 