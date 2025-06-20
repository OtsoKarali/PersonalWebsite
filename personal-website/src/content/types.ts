export interface Milestone {
  date: string
  title: string
  summary: string
  icon?: string
  logo?: string
}

export interface Project {
  slug: string
  name: string
  headline: string
  description: string
  repoUrl?: string
  liveUrl?: string
  impactKPI: string[]
  technologies: string[]
  image?: string
}

export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design'
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
}

export interface Chapter {
  id: string
  title: string
  subtitle: string
  content: string
  media?: {
    type: 'image' | 'video'
    src: string
    alt?: string
  }
  milestones?: Milestone[]
}

export interface SEO {
  title: string
  description: string
  ogImage?: string
  keywords?: string[]
} 