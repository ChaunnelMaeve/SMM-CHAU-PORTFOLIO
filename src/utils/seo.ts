// SEO Utility Functions

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://chaunnelcruz.xyz${item.url}`,
    })),
  };
};

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  image?: string;
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Person',
      name: 'Chaunnel Maeve Cruz',
      url: 'https://chaunnelcruz.xyz',
    },
    image: service.image || 'https://chaunnelcruz.xyz/og-image.jpg',
    url: `https://chaunnelcruz.xyz${service.url}`,
    areaServed: 'Worldwide',
  };
};

export const generateProjectSchema = (project: {
  name: string;
  description: string;
  image?: string;
  url: string;
  datePublished?: string;
  keywords?: string[];
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    author: {
      '@type': 'Person',
      name: 'Chaunnel Maeve Cruz',
    },
    image: project.image || 'https://chaunnelcruz.xyz/og-image.jpg',
    url: `https://chaunnelcruz.xyz${project.url}`,
    datePublished: project.datePublished || new Date().toISOString().split('T')[0],
    keywords: project.keywords || ['digital marketing', 'portfolio', 'case study'],
  };
};

export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image || 'https://chaunnelcruz.xyz/og-image.jpg',
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author || 'Chaunnel Maeve Cruz',
      url: 'https://chaunnelcruz.xyz',
    },
    publisher: {
      '@type': 'Person',
      name: 'Chaunnel Maeve Cruz',
      url: 'https://chaunnelcruz.xyz',
    },
  };
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Chaunnel Cruz Digital Marketing',
    url: 'https://chaunnelcruz.xyz',
    logo: 'https://chaunnelcruz.xyz/logo.png',
    description: 'Professional digital marketing services and consulting',
    founder: {
      '@type': 'Person',
      name: 'Chaunnel Maeve Cruz',
    },
    sameAs: [
      'https://www.linkedin.com/in/chaunnel',
      'https://github.com/chaunnel',
      'https://twitter.com/chaunnel',
    ],
  };
};

export const generateReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Digital Marketing Services',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length,
      reviewCount: reviews.length,
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: review.datePublished,
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
      },
    })),
  };
};

// Helper to generate meta keywords from array
export const generateKeywords = (keywords: string[]): string => {
  return keywords.join(', ');
};

// Helper to truncate description to optimal length
export const truncateDescription = (text: string, maxLength: number = 160): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
};

// Helper to generate social share URLs
export const generateShareUrls = (url: string, title: string) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
  };
};