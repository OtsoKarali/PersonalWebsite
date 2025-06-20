'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Download, Github, Linkedin, Twitter, Send } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/scrollVariants'

interface FooterCTAProps {
  resumeUrl?: string
  calendlyUrl?: string
  socialLinks?: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
  className?: string
}

export function FooterCTA({ 
  resumeUrl, 
  calendlyUrl, 
  socialLinks = {},
  className = '' 
}: FooterCTAProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className={`py-20 ${className}`} id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-ghost bg-clip-text text-transparent">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-ghost max-w-2xl mx-auto">
              Ready to bring your ideas to life? I&apos;m always excited to work on new projects and collaborate with amazing teams.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              className="bg-ghost/10 backdrop-blur-sm rounded-2xl p-8 border border-ghost/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ghost mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-navy/50 border border-ghost/20 rounded-lg text-white placeholder-ghost/50 focus:outline-none focus:border-signal transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ghost mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-navy/50 border border-ghost/20 rounded-lg text-white placeholder-ghost/50 focus:outline-none focus:border-signal transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ghost mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-navy/50 border border-ghost/20 rounded-lg text-white placeholder-ghost/50 focus:outline-none focus:border-signal transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-signal hover:bg-white hover:text-signal text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Quick Actions & Social */}
            <motion.div
              variants={fadeInUp}
              className="space-y-8"
            >
              {/* Quick Actions */}
              <div className="bg-ghost/10 backdrop-blur-sm rounded-2xl p-8 border border-ghost/20">
                <h3 className="text-2xl font-bold mb-6 text-white">Quick Actions</h3>
                
                <div className="space-y-4">
                  {resumeUrl && (
                    <a
                      href={resumeUrl}
                      className="flex items-center gap-3 p-4 bg-navy/50 rounded-lg hover:bg-signal/20 transition-colors group"
                    >
                      <Download className="text-signal group-hover:text-white transition-colors" size={20} />
                      <span className="text-white font-medium">Download Resume</span>
                    </a>
                  )}
                  
                  {calendlyUrl && (
                    <a
                      href={calendlyUrl}
                      className="flex items-center gap-3 p-4 bg-navy/50 rounded-lg hover:bg-signal/20 transition-colors group"
                    >
                      <Mail className="text-signal group-hover:text-white transition-colors" size={20} />
                      <span className="text-white font-medium">Schedule a Call</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-ghost/10 backdrop-blur-sm rounded-2xl p-8 border border-ghost/20">
                <h3 className="text-2xl font-bold mb-6 text-white">Connect</h3>
                
                <div className="flex gap-4">
                  {socialLinks.github && (
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-navy/50 rounded-lg hover:bg-signal/20 transition-colors group"
                    >
                      <Github className="text-signal group-hover:text-white transition-colors" size={24} />
                    </a>
                  )}
                  
                  {socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-navy/50 rounded-lg hover:bg-signal/20 transition-colors group"
                    >
                      <Linkedin className="text-signal group-hover:text-white transition-colors" size={24} />
                    </a>
                  )}
                  
                  {socialLinks.twitter && (
                    <a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-navy/50 rounded-lg hover:bg-signal/20 transition-colors group"
                    >
                      <Twitter className="text-signal group-hover:text-white transition-colors" size={24} />
                    </a>
                  )}
                  
                  {socialLinks.email && (
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="p-3 bg-navy/50 rounded-lg hover:bg-signal/20 transition-colors group"
                    >
                      <Mail className="text-signal group-hover:text-white transition-colors" size={24} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 