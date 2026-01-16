import { Instagram, Video, Linkedin, TrendingUp, Users, Target } from 'lucide-react';

export const servicesData = [
  {
    id: 'instagram-management',
    icon: Instagram,
    title: 'Instagram Management & Growth',
    description: 'Build an engaged Instagram community with strategic content and proven growth tactics.',
    features: ['Content Strategy', 'Daily Posting', 'Story Management', 'Hashtag Optimization'],
    longDescription: 'Transform your Instagram presence into a powerful growth engine. I help brands and businesses build authentic communities, increase engagement, and drive real results through strategic content planning, consistent posting, and data-driven optimization.',
    benefits: [
      'Consistent, high-quality content that resonates',
      'Increased follower growth and engagement rates',
      'Strategic hashtag research and implementation',
      'Professional story and reel creation',
      'Daily community engagement and management',
      'Monthly analytics and performance reports'
    ],
    process: [
      {
        step: 'Account Audit & Strategy',
        description: 'Comprehensive analysis of your current Instagram presence and development of a customized growth strategy aligned with your goals.'
      },
      {
        step: 'Content Planning',
        description: 'Create a monthly content calendar with engaging posts, stories, and reels that align with your brand identity.'
      },
      {
        step: 'Daily Management',
        description: 'Consistent posting, story updates, community engagement, and real-time interaction with your audience.'
      },
      {
        step: 'Growth Optimization',
        description: 'Strategic hashtag use, optimal posting times, and collaboration opportunities to maximize reach.'
      },
      {
        step: 'Analytics & Reporting',
        description: 'Track key metrics, analyze performance, and continuously optimize strategy for better results.'
      }
    ],
    platforms: ['Instagram Feed', 'Stories', 'Reels', 'IGTV', 'Live Streams', 'Shopping'],
    caseStudy: {
      client: 'StyleVibe Boutique',
      challenge: 'Low engagement with only 2K followers and inconsistent posting',
      solution: 'Implemented daily content strategy with focus on reels and user-generated content campaigns',
      results: [
        '850% increase in follower count (2K to 19K)',
        '420% boost in engagement rate',
        '50K+ monthly impressions',
        '$25K+ in attributed sales from Instagram'
      ]
    }
  },
  {
    id: 'tiktok-strategy',
    icon: Video,
    title: 'TikTok Content & Strategy',
    description: 'Create viral-worthy TikTok content that captures attention and drives massive growth.',
    features: ['Viral Content Creation', 'Trend Analysis', 'Video Editing', 'Growth Hacking'],
    longDescription: 'TikTok is where brands explode overnight. I specialize in creating scroll-stopping content that leverages trends, sounds, and viral formats to grow your presence and connect with Gen Z and Millennial audiences.',
    benefits: [
      'Viral content potential with trending formats',
      'Rapid follower growth and brand awareness',
      'Professional video editing and production',
      'Trend monitoring and quick execution',
      'Authentic brand voice development',
      'Cross-platform content repurposing'
    ],
    process: [
      {
        step: 'Trend Research',
        description: 'Daily monitoring of trending sounds, hashtags, and formats to capitalize on viral opportunities.'
      },
      {
        step: 'Content Creation',
        description: 'Produce engaging, on-brand TikToks that entertain, educate, and inspire your target audience.'
      },
      {
        step: 'Optimal Posting',
        description: 'Strategic posting schedule based on audience activity and algorithm patterns for maximum visibility.'
      },
      {
        step: 'Engagement Boost',
        description: 'Active engagement with comments, duets, stitches, and community building tactics.'
      },
      {
        step: 'Performance Analysis',
        description: 'Track views, engagement, and follower growth to refine content strategy continuously.'
      }
    ],
    platforms: ['TikTok', 'Instagram Reels', 'YouTube Shorts', 'Snapchat Spotlight'],
    caseStudy: {
      client: 'FitFuel Nutrition',
      challenge: 'Brand new TikTok account with zero presence in a competitive fitness niche',
      solution: 'Created educational fitness content mixed with trending challenges and transformations',
      results: [
        '125K followers gained in 4 months',
        '15M+ total video views',
        '3 viral videos with 1M+ views each',
        '500+ daily website visits from TikTok'
      ]
    }
  },
  {
    id: 'linkedin-branding',
    icon: Linkedin,
    title: 'LinkedIn Personal Branding',
    description: 'Establish yourself as a thought leader and grow your professional network strategically.',
    features: ['Profile Optimization', 'Content Strategy', 'Network Growth', 'Lead Generation'],
    longDescription: 'LinkedIn is the ultimate platform for B2B growth and professional branding. I help executives, entrepreneurs, and professionals build authority, expand their network, and generate quality leads through strategic content and engagement.',
    benefits: [
      'Optimized profile for maximum visibility',
      'Thought leadership content that positions you as an expert',
      'Strategic networking and connection growth',
      'Increased inbound opportunities and leads',
      'Personal brand development',
      'B2B audience engagement'
    ],
    process: [
      {
        step: 'Profile Optimization',
        description: 'Complete overhaul of your LinkedIn profile with SEO-optimized headline, compelling summary, and professional presentation.'
      },
      {
        step: 'Content Strategy Development',
        description: 'Create a content plan focused on your expertise, industry insights, and value-driven posts.'
      },
      {
        step: 'Consistent Publishing',
        description: 'Regular posts, articles, and updates that showcase your knowledge and engage your network.'
      },
      {
        step: 'Network Expansion',
        description: 'Strategic outreach and connection building with industry leaders and potential clients.'
      },
      {
        step: 'Engagement & Analytics',
        description: 'Active engagement with your network and tracking of profile views, post performance, and lead generation.'
      }
    ],
    platforms: ['LinkedIn', 'LinkedIn Articles', 'LinkedIn Live', 'LinkedIn Newsletter'],
    caseStudy: {
      client: 'Sarah Chen - Tech Consultant',
      challenge: 'Low profile visibility with minimal engagement and no inbound leads',
      solution: 'Optimized profile and implemented consistent content strategy focused on SaaS insights',
      results: [
        '500% increase in profile views',
        '3K+ new targeted connections',
        '150K+ content impressions monthly',
        '25+ qualified leads per month'
      ]
    }
  },
  {
    id: 'content-creation',
    icon: Video,
    title: 'Content Creation & Design',
    description: 'Professional graphics, videos, and multimedia content that stops the scroll.',
    features: ['Graphic Design', 'Video Editing', 'Copywriting', 'Brand Assets'],
    longDescription: 'Great content is the foundation of social media success. I create stunning visuals, engaging videos, and compelling copy that captures attention, communicates your message, and drives action across all platforms.',
    benefits: [
      'Professional, scroll-stopping visuals',
      'Consistent brand aesthetic across platforms',
      'Engaging video content and motion graphics',
      'Compelling copywriting that converts',
      'Fast turnaround on content requests',
      'Content library for ongoing use'
    ],
    process: [
      {
        step: 'Brand Discovery',
        description: 'Understand your brand identity, target audience, and content goals to create aligned visuals.'
      },
      {
        step: 'Content Planning',
        description: 'Develop content themes, formats, and styles that resonate with your audience.'
      },
      {
        step: 'Creation & Production',
        description: 'Design graphics, edit videos, write copy, and produce high-quality content assets.'
      },
      {
        step: 'Review & Refinement',
        description: 'Collaborate on revisions and ensure every piece meets your standards and goals.'
      },
      {
        step: 'Delivery & Optimization',
        description: 'Provide optimized content in platform-specific formats ready for publishing.'
      }
    ],
    platforms: ['Canva', 'Adobe Creative Suite', 'CapCut', 'Final Cut Pro', 'DaVinci Resolve'],
    caseStudy: {
      client: 'EcoGlow Skincare',
      challenge: 'Inconsistent visual identity and low-quality content across social platforms',
      solution: 'Created complete brand content library with templates, graphics, and video content',
      results: [
        '300+ professional content pieces delivered',
        '280% increase in engagement rate',
        'Cohesive brand presence across 4 platforms',
        '95% reduction in content production time'
      ]
    }
  },
  {
    id: 'community-management',
    icon: Users,
    title: 'Community Management & Engagement',
    description: 'Build loyal, engaged communities that love your brand and advocate for you.',
    features: ['Comment Management', 'DM Responses', 'Crisis Management', 'Community Building'],
    longDescription: 'Your community is your greatest asset. I manage daily interactions, respond to comments and DMs, handle customer inquiries, and build genuine relationships that turn followers into brand advocates and customers.',
    benefits: [
      'Timely responses to all comments and messages',
      'Professional crisis and reputation management',
      'Increased brand loyalty and advocacy',
      'Better customer service through social',
      'Community-driven content insights',
      'Reduced churn and improved retention'
    ],
    process: [
      {
        step: 'Community Guidelines',
        description: 'Establish brand voice, response protocols, and community standards for consistent management.'
      },
      {
        step: 'Daily Monitoring',
        description: 'Active monitoring of all comments, mentions, DMs, and brand conversations across platforms.'
      },
      {
        step: 'Engagement & Response',
        description: 'Timely, authentic responses that build relationships and address concerns professionally.'
      },
      {
        step: 'Community Initiatives',
        description: 'Create engagement campaigns, user-generated content opportunities, and community events.'
      },
      {
        step: 'Sentiment Analysis',
        description: 'Track community sentiment, gather feedback, and report insights for business improvement.'
      }
    ],
    platforms: ['All Social Platforms', 'Discord', 'Facebook Groups', 'Reddit', 'Forum Management'],
    caseStudy: {
      client: 'GameZone Store',
      challenge: 'Overwhelmed with comments and DMs, slow response times causing customer frustration',
      solution: 'Implemented 24-hour response system with active community engagement and support',
      results: [
        '95% response rate within 2 hours',
        '89% positive sentiment in comments',
        '45% increase in repeat customers',
        '200+ user-generated content posts'
      ]
    }
  },
  {
    id: 'social-ads',
    icon: Target,
    title: 'Social Media Advertising',
    description: 'Drive targeted traffic and conversions with data-driven paid social campaigns.',
    features: ['Campaign Strategy', 'Ad Creation', 'Audience Targeting', 'ROI Optimization'],
    longDescription: 'Maximize your advertising budget with strategic paid social campaigns. I create high-converting ads, target the right audiences, and continuously optimize for the best return on ad spend across all major platforms.',
    benefits: [
      'Precise audience targeting and segmentation',
      'High-converting ad creative and copy',
      'Cost-effective campaign management',
      'A/B testing for continuous improvement',
      'Detailed ROI tracking and reporting',
      'Multi-platform campaign coordination'
    ],
    process: [
      {
        step: 'Campaign Planning',
        description: 'Define goals, target audience, budget allocation, and success metrics for your campaigns.'
      },
      {
        step: 'Ad Creative Development',
        description: 'Design compelling ad visuals and write persuasive copy that drives clicks and conversions.'
      },
      {
        step: 'Audience Targeting',
        description: 'Build precise audience segments using demographics, interests, behaviors, and lookalike audiences.'
      },
      {
        step: 'Campaign Launch & Monitor',
        description: 'Launch campaigns and actively monitor performance, making real-time adjustments as needed.'
      },
      {
        step: 'Optimization & Scaling',
        description: 'Analyze data, optimize underperforming elements, and scale winning campaigns for maximum ROI.'
      }
    ],
    platforms: ['Facebook Ads', 'Instagram Ads', 'TikTok Ads', 'LinkedIn Ads', 'Twitter Ads', 'Pinterest Ads'],
    caseStudy: {
      client: 'UrbanThreads Apparel',
      challenge: 'High cost per acquisition and poor ROAS on Facebook and Instagram ads',
      solution: 'Rebuilt campaigns with new creative, refined targeting, and conversion optimization',
      results: [
        '320% improvement in ROAS',
        '65% reduction in cost per acquisition',
        '$150K+ in revenue from $30K ad spend',
        '4,500+ new customers acquired'
      ]
    }
  },
];
