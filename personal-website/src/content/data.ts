import { Project, Skill, Testimonial, Milestone } from './types'

export const projects: Project[] = [
  {
    slug: 'hugo-trading-system',
    name: 'Hugo Trading System',
    headline: 'Stock data collection and analysis system on AWS',
    description: 'Developed a system to fetch 5 years of historical stock data from the Alpaca API, display it in an SQL dashboard, and automate analysis for 100+ assets.',
    repoUrl: 'https://github.com/OtsoKarali/HugoTradingSystem',
    impactKPI: [
      'Hosted on AWS',
      'Automated analysis for 100+ assets',
      'Integrated with Alpaca API',
    ],
    technologies: ['Python', 'SQL', 'AWS', 'Alpaca API'],
    image: '/images/projects/trading.jpg'
  },
  {
    slug: 'sister-chrome-extension',
    name: 'UVA Sister Extension',
    headline: 'Injects GPA/professor data into UVA enrollment',
    description: 'Created a Chrome extension to query a 24,000-row JSON database of historical class data and inject it directly into the UVA enrollment platform for students.',
    repoUrl: 'https://github.com/OtsoKarali/SisterChromeExtension',
    impactKPI: [
      'Queried 24,000+ row database',
      'Automated data fetching',
      'Improves student enrollment experience'
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'JSON', 'Chrome API'],
    image: '/images/projects/chrome-extension.jpg'
  },
  {
    slug: 'loan-default-predictor',
    name: 'Loan Default Predictor',
    headline: 'ML model to predict loan defaults with 90% accuracy',
    description: 'Built a machine learning pipeline using Python and Scikit-learn to process a 1.85 million row dataset and predict loan defaults based on 12 applicant parameters.',
    repoUrl: 'https://github.com/OtsoKarali/Loan_Default_Predictor',
    impactKPI: [
      '90% prediction accuracy',
      'Processed 1.85M row dataset',
      'Built with Scikit-learn'
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    image: '/images/projects/ml-model.jpg'
  }
]

export const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', icon: '📜', category: 'frontend', proficiency: 'advanced' },
  { name: 'HTML/CSS', icon: '📄', category: 'frontend', proficiency: 'advanced' },
  { name: 'React', icon: '⚛️', category: 'frontend', proficiency: 'intermediate' },
  { name: 'Next.js', icon: '▲', category: 'frontend', proficiency: 'intermediate' },
  
  // Backend
  { name: 'Python', icon: '🐍', category: 'backend', proficiency: 'expert' },
  { name: 'Java', icon: '☕', category: 'backend', proficiency: 'advanced' },
  { name: 'C/C++', icon: '🔧', category: 'backend', proficiency: 'intermediate' },
  { name: 'Node.js', icon: '🟢', category: 'backend', proficiency: 'intermediate' },

  // Database
  { name: 'SQL', icon: '🗃️', category: 'database', proficiency: 'advanced' },
  { name: 'JSON', icon: '📝', category: 'database', proficiency: 'advanced' },
  
  // DevOps
  { name: 'AWS', icon: '☁️', category: 'devops', proficiency: 'intermediate' },
]

export const testimonials: Testimonial[] = [] // No testimonials from resume

export const milestones: Milestone[] = [
  {
    date: 'June 2025 - Present',
    title: 'Quantitative Private Equity Intern',
    summary: 'Building ML projects for the secondaries market to predict continuation fund likelihood and working with deal teams to help in the originations process at RenWave Kore.',
    icon: '📈',
    logo: '/logos/renwave_kore_logo.jpeg'
  },
  {
    date: 'Jan 2025 - June 2025',
    title: 'Applied Mathematics Researcher',
    summary: 'Collaborated with Prof. Bakhyt Aitzhanova at the UVA Geometry Lab to develop forward and inverse kinematic algorithms for robotic arm control.',
    icon: '🤖',
    logo: '/logos/uva_logo.jpg'
  },
  {
    date: 'Feb 2024 - Sep 2024',
    title: 'Machine Learning Intern',
    summary: 'Developed and optimized ML models at Luminoah to enhance occlusion monitoring systems, reducing PSI thresholds by 15%. Authored 8 FDA-submitted test protocols.',
    icon: '🔬',
    logo: '/logos/luminoah_logo.jpeg'
  },
  {
    date: 'Expected May 2027',
    title: 'University of Virginia',
    summary: 'Pursuing a B.A. in Computer Science and B.A. in Mathematics. Member of Cavalier Trading, UVA Poker, and Forge Scholars.',
    icon: '🎓',
    logo: '/logos/uva_logo.jpg'
  }
] 