import { Metadata } from 'next'
import { SEO as SEOType } from '@/content/types'

export function generateSEO({
  title,
  description,
  ogImage,
  keywords = []
}: SEOType): Metadata {
  const siteUrl = 'https://otsokarali.com'; // Replace with your actual domain
  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: `${siteUrl}${ogImage}` }] : [`${siteUrl}/og-image.jpg`],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [`${siteUrl}${ogImage}`] : [`${siteUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export const defaultSEO: Metadata = {
  title: {
    default: 'Otso Karali - Quantitative Researcher Portfolio',
    template: '%s | Otso Karali'
  },
  description: 'Portfolio of Otso Karali, a Mathematics and Computer Science student aspiring to be a quantitative researcher.',
  keywords: ['quantitative researcher', 'python', 'mathematics', 'computer science', 'machine learning', 'finance', 'portfolio', 'Otso Karali'],
  authors: [{ name: 'Otso Karali', url: 'https://otsokarali.com' }],
  creator: 'Otso Karali',
  publisher: 'Otso Karali',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://otsokarali.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://otsokarali.com', // Replace with your actual domain
    siteName: 'Otso Karali - Portfolio',
    title: 'Otso Karali - Quantitative Researcher Portfolio',
    description: 'Portfolio of Otso Karali, a Mathematics and Computer Science student aspiring to be a quantitative researcher.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Otso Karali - Quantitative Researcher Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Otso Karali - Quantitative Researcher Portfolio',
    description: 'Portfolio of Otso Karali, a Mathematics and Computer Science student aspiring to be a quantitative researcher.',
    images: ['/og-image.jpg'],
    creator: '@otsokarali', // Replace with your actual Twitter handle
  },
} 