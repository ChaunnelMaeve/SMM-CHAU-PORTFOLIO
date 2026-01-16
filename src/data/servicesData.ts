import { Facebook, Target, Users, Globe, Video, Megaphone, Instagram, MessageCircle } from 'lucide-react';

export const servicesData = [
  {
    id: 'facebook-page-management',
    icon: Facebook,
    title: 'Facebook Page Management & Growth',
    description: 'Build a thriving Facebook presence with organic strategies that drive engagement and community growth.',
    features: ['Page Optimization', 'Content Strategy', 'Organic Growth', 'Community Engagement'],
    longDescription: 'Transform your Facebook Page into a powerful business asset. I specialize in organic growth strategies, engaging content creation, and community building that turns followers into customers. From page setup to daily management, I handle everything to maximize your Facebook presence.',
    benefits: [
      'Optimized Facebook Page for maximum discoverability',
      'Consistent, high-quality content that drives engagement',
      'Strategic posting schedule for optimal reach',
      'Active community management and response handling',
      'Algorithm-friendly content strategies',
      'Monthly analytics and growth reports'
    ],
    process: [
      {
        step: 'Page Audit & Optimization',
        description: 'Complete analysis of your Facebook Page, optimizing all elements including profile, cover photo, about section, and call-to-action buttons for maximum impact.'
      },
      {
        step: 'Content Strategy Development',
        description: 'Create a comprehensive content calendar with diverse post types including videos, images, links, and stories that resonate with your target audience.'
      },
      {
        step: 'Daily Management & Posting',
        description: 'Consistent content publishing at optimal times, story updates, and real-time community engagement to build authentic connections.'
      },
      {
        step: 'Growth Optimization',
        description: 'Implement organic growth tactics including cross-promotion, collaboration opportunities, and engagement strategies to expand your reach.'
      },
      {
        step: 'Analytics & Refinement',
        description: 'Track page insights, engagement metrics, and audience growth to continuously refine strategy for better results.'
      }
    ],
    platforms: ['Facebook Page', 'Facebook Stories', 'Facebook Live', 'Facebook Events', 'Meta Business Suite'],
    caseStudy: {
      client: 'Sunrise Café & Bistro',
      challenge: 'New Facebook Page with only 200 followers, no engagement, and poor visibility in local market',
      solution: 'Implemented comprehensive page optimization, daily content strategy with local focus, community engagement, and Facebook events promotion',
      results: [
        '2,400% page growth (200 to 5,000 followers)',
        '18% average engagement rate',
        '120K+ monthly reach',
        '450+ daily foot traffic from Facebook',
        '$45K+ in tracked Facebook-driven sales'
      ]
    }
  },
  {
    id: 'facebook-ads-management',
    icon: Target,
    title: 'Facebook Ads & Campaign Management',
    description: 'Drive targeted traffic and conversions with data-driven Facebook advertising that maximizes ROI.',
    features: ['Campaign Strategy', 'Ad Creation', 'Audience Targeting', 'ROI Optimization'],
    longDescription: 'Maximize your advertising budget with strategic Facebook Ads campaigns. I create high-converting ad creatives, target the right audiences, and continuously optimize for the best return on ad spend. From lead generation to e-commerce sales, I deliver measurable results.',
    benefits: [
      'Precise audience targeting and segmentation',
      'High-converting ad creative and compelling copy',
      'Cost-effective campaign management',
      'A/B testing for continuous improvement',
      'Detailed ROI tracking and reporting',
      'Retargeting and lookalike audience strategies'
    ],
    process: [
      {
        step: 'Campaign Planning & Strategy',
        description: 'Define campaign objectives, target audience, budget allocation, and success metrics aligned with your business goals.'
      },
      {
        step: 'Ad Creative Development',
        description: 'Design eye-catching ad visuals and write persuasive copy that stops the scroll and drives clicks and conversions.'
      },
      {
        step: 'Audience Targeting & Setup',
        description: 'Build precise audience segments using demographics, interests, behaviors, custom audiences, and lookalike targeting.'
      },
      {
        step: 'Campaign Launch & Monitoring',
        description: 'Launch campaigns with proper pixel tracking and actively monitor performance, making real-time adjustments as needed.'
      },
      {
        step: 'Optimization & Scaling',
        description: 'Analyze campaign data, optimize underperforming elements, and scale winning ad sets for maximum ROI.'
      }
    ],
    platforms: ['Facebook Ads Manager', 'Meta Pixel', 'Facebook Catalog', 'Instagram Ads', 'Messenger Ads', 'Audience Network'],
    caseStudy: {
      client: 'HomeStyle Furniture Co.',
      challenge: 'High cost per acquisition ($120) and poor ROAS (1.5x) on existing Facebook ad campaigns with broad, ineffective targeting',
      solution: 'Rebuilt entire ad strategy with new creative direction, refined audience segments, proper conversion tracking, and dynamic product ads',
      results: [
        '580% ROAS improvement (1.5x to 10.2x)',
        '78% reduction in cost per acquisition',
        '$420K in revenue from $41K ad spend',
        '8,500+ new customers acquired',
        'Scaled budget 6x while maintaining profitability'
      ]
    }
  },
  {
    id: 'facebook-groups-management',
    icon: Users,
    title: 'Facebook Groups Community Building',
    description: 'Create and manage engaged Facebook Groups that foster loyalty, drive conversations, and build brand advocates.',
    features: ['Group Setup', 'Member Engagement', 'Content Moderation', 'Community Growth'],
    longDescription: 'Facebook Groups are powerful tools for building dedicated communities around your brand. I help you create, grow, and manage thriving Facebook Groups that generate organic engagement, foster customer loyalty, and create a space where your audience becomes your biggest advocates.',
    benefits: [
      'Strategic group setup and optimization',
      'Engaged community with active daily discussions',
      'Effective moderation and member management',
      'Exclusive content and value for members',
      'Higher customer retention and loyalty',
      'Organic word-of-mouth growth'
    ],
    process: [
      {
        step: 'Group Strategy & Setup',
        description: 'Define group purpose, set up structure, create rules and guidelines, and optimize all group elements for discoverability and engagement.'
      },
      {
        step: 'Member Acquisition',
        description: 'Implement strategies to attract ideal members through invitations, promotions, and cross-platform marketing.'
      },
      {
        step: 'Content & Engagement',
        description: 'Create daily discussion prompts, share valuable content, facilitate conversations, and encourage member participation.'
      },
      {
        step: 'Moderation & Management',
        description: 'Monitor posts, enforce community guidelines, handle conflicts, and maintain a positive, supportive environment.'
      },
      {
        step: 'Growth & Optimization',
        description: 'Analyze engagement metrics, identify top contributors, and implement strategies to increase activity and member value.'
      }
    ],
    platforms: ['Facebook Groups', 'Meta Business Suite', 'Facebook Community Management Tools'],
    caseStudy: {
      client: 'FitLife Coaching',
      challenge: 'Wanted to build a dedicated community for fitness clients but had no group presence and low customer retention',
      solution: 'Created exclusive Facebook Group for members with daily challenges, live Q&As, success celebrations, and peer support',
      results: [
        '2,500+ active group members in 6 months',
        '45+ daily posts and comments',
        '92% member retention rate',
        '300+ user-generated transformation posts',
        '65% of new clients came from group referrals',
        'Built waiting list due to high demand'
      ]
    }
  },
  {
    id: 'website-creation',
    icon: Globe,
    title: 'Website Creation & Design',
    description: 'Professional, conversion-focused websites that showcase your brand and drive business results.',
    features: ['Custom Design', 'Responsive Layout', 'SEO Optimization', 'Lead Capture'],
    longDescription: 'Your website is your digital storefront. I create beautiful, fast-loading, mobile-responsive websites that not only look great but convert visitors into customers. From landing pages to full e-commerce sites, I build digital experiences that work seamlessly with your Facebook marketing efforts.',
    benefits: [
      'Custom design that reflects your brand identity',
      'Mobile-responsive and fast-loading',
      'SEO-optimized for search visibility',
      'Conversion-focused design elements',
      'Easy-to-update content management',
      'Integration with Facebook Pixel and tracking'
    ],
    process: [
      {
        step: 'Discovery & Planning',
        description: 'Understand your business goals, target audience, and website requirements to create a strategic plan and sitemap.'
      },
      {
        step: 'Design & Mockups',
        description: 'Create visual designs and mockups that align with your brand, incorporating feedback until we achieve the perfect look.'
      },
      {
        step: 'Development & Build',
        description: 'Build your website with clean code, responsive design, and all necessary functionality including forms, integrations, and tracking.'
      },
      {
        step: 'Content & SEO',
        description: 'Add optimized content, implement SEO best practices, and set up analytics and conversion tracking.'
      },
      {
        step: 'Launch & Support',
        description: 'Launch your website, provide training on updates, and offer ongoing support and maintenance as needed.'
      }
    ],
    platforms: ['WordPress', 'Webflow', 'Shopify', 'Custom HTML/CSS', 'React', 'Landing Page Builders'],
    caseStudy: {
      client: 'Elite Dental Practice',
      challenge: 'Outdated website with poor mobile experience, no online booking, and low conversion rate from Facebook ads',
      solution: 'Built modern, mobile-first website with online booking system, patient portal, and seamless Facebook Ads integration',
      results: [
        '450% increase in website conversions',
        '85% of traffic now from mobile devices',
        '600+ online bookings in first 3 months',
        '3-second page load time (from 12 seconds)',
        '40% reduction in Facebook ad costs due to better landing pages',
        '$180K+ in new patient revenue attributed to website'
      ]
    }
  },
  {
    id: 'content-creation',
    icon: Video,
    title: 'Content Creation & Design',
    description: 'Professional graphics, videos, and multimedia content optimized for Facebook and digital platforms.',
    features: ['Graphic Design', 'Video Editing', 'Copywriting', 'Brand Assets'],
    longDescription: 'Great content is the foundation of Facebook success. I create stunning visuals, engaging videos, and compelling copy that captures attention, communicates your message, and drives action. All content is optimized specifically for Facebook\'s algorithm and best practices.',
    benefits: [
      'Professional, scroll-stopping visuals for Facebook',
      'Consistent brand aesthetic across platforms',
      'Engaging video content and motion graphics',
      'Compelling copywriting that converts',
      'Fast turnaround on content requests',
      'Content library for ongoing use'
    ],
    process: [
      {
        step: 'Brand Discovery',
        description: 'Understand your brand identity, target audience, and content goals to create aligned visuals and messaging.'
      },
      {
        step: 'Content Planning',
        description: 'Develop content themes, formats, and styles that resonate with your Facebook audience and align with platform best practices.'
      },
      {
        step: 'Creation & Production',
        description: 'Design graphics, edit videos, write copy, and produce high-quality content assets optimized for Facebook.'
      },
      {
        step: 'Review & Refinement',
        description: 'Collaborate on revisions and ensure every piece meets your standards, goals, and Facebook specifications.'
      },
      {
        step: 'Delivery & Optimization',
        description: 'Provide optimized content in platform-specific formats ready for publishing with recommended posting strategies.'
      }
    ],
    platforms: ['Canva', 'Adobe Creative Suite', 'CapCut', 'Final Cut Pro', 'DaVinci Resolve', 'Meta Creative Hub'],
    caseStudy: {
      client: 'TrendWave Fashion',
      challenge: 'Inconsistent visual identity and low-quality content on Facebook leading to poor engagement and brand perception',
      solution: 'Created complete Facebook content library with branded templates, product photography, lifestyle videos, and ad creatives',
      results: [
        '500+ professional content pieces delivered',
        '340% increase in Facebook engagement rate',
        'Cohesive brand presence across Facebook properties',
        '88% reduction in content production time',
        '12 viral posts with 500K+ reach each'
      ]
    }
  },
  {
    id: 'facebook-messenger-marketing',
    icon: MessageCircle,
    title: 'Facebook Messenger Marketing',
    description: 'Automated chatbots and messenger campaigns that engage customers and drive conversions 24/7.',
    features: ['Chatbot Setup', 'Automated Responses', 'Lead Generation', 'Customer Support'],
    longDescription: 'Facebook Messenger is a powerful direct communication channel with 1.3 billion users. I create automated chatbot flows, messenger marketing campaigns, and customer support systems that engage your audience instantly, generate leads, and provide seamless customer experiences.',
    benefits: [
      'Instant automated responses 24/7',
      'Higher open rates than email (80%+ vs 20%)',
      'Personalized customer interactions',
      'Lead generation and qualification',
      'Seamless customer support automation',
      'Integration with Facebook Ads for direct messaging'
    ],
    process: [
      {
        step: 'Strategy & Flow Design',
        description: 'Define messenger goals, map out conversation flows, and design chatbot interactions that align with your customer journey.'
      },
      {
        step: 'Chatbot Development',
        description: 'Build automated messenger flows using ManyChat or similar tools, including welcome messages, FAQs, and lead capture sequences.'
      },
      {
        step: 'Integration Setup',
        description: 'Connect messenger to your Facebook Page, ads, CRM, and other tools for seamless data flow and lead management.'
      },
      {
        step: 'Testing & Launch',
        description: 'Test all conversation flows, edge cases, and integrations to ensure smooth user experience before launch.'
      },
      {
        step: 'Optimization & Management',
        description: 'Monitor performance metrics, analyze conversation data, and continuously improve flows for better engagement and conversion.'
      }
    ],
    platforms: ['Facebook Messenger', 'ManyChat', 'Chatfuel', 'MobileMonkey', 'Meta Business Suite', 'Zapier Integration'],
    caseStudy: {
      client: 'BookSmart Tutoring',
      challenge: 'Missing leads from Facebook ads due to slow response times and no after-hours support, resulting in lost revenue',
      solution: 'Implemented automated messenger chatbot for instant lead qualification, booking, and FAQ support integrated with Facebook ads',
      results: [
        '87% messenger open rate vs 18% email',
        '65% lead qualification automation',
        '24/7 instant response to inquiries',
        '320+ qualified leads per month',
        '52% increase in booking conversion rate',
        '$95K+ additional revenue in 5 months'
      ]
    }
  },
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
    id: 'multi-platform-advertising',
    icon: Megaphone,
    title: 'Multi-Platform Social Advertising',
    description: 'Coordinated advertising campaigns across Facebook, Instagram, and other platforms for maximum impact.',
    features: ['Cross-Platform Strategy', 'Ad Creation', 'Budget Optimization', 'Performance Tracking'],
    longDescription: 'Maximize your reach and ROI with coordinated advertising campaigns across multiple social platforms. While Facebook remains the core focus, I create unified strategies that leverage Instagram, TikTok, and other platforms when it makes strategic sense for your business.',
    benefits: [
      'Unified cross-platform advertising strategy',
      'Consistent brand messaging across channels',
      'Optimized budget allocation across platforms',
      'Comprehensive performance tracking',
      'Platform-specific creative optimization',
      'Detailed multi-channel attribution reporting'
    ],
    process: [
      {
        step: 'Multi-Platform Strategy',
        description: 'Analyze your target audience to determine optimal platform mix and develop coordinated campaign strategy.'
      },
      {
        step: 'Creative Development',
        description: 'Create platform-specific ad variations that leverage each platform\'s unique features and best practices.'
      },
      {
        step: 'Campaign Setup & Launch',
        description: 'Set up campaigns across chosen platforms with proper tracking, audience targeting, and budget allocation.'
      },
      {
        step: 'Active Management',
        description: 'Monitor all campaigns daily, making real-time optimizations and budget adjustments based on performance.'
      },
      {
        step: 'Analysis & Reporting',
        description: 'Provide comprehensive reporting showing performance across all platforms with clear ROI metrics and insights.'
      }
    ],
    platforms: ['Facebook Ads', 'Instagram Ads', 'TikTok Ads', 'LinkedIn Ads', 'Twitter Ads', 'Pinterest Ads'],
    caseStudy: {
      client: 'PureGlow Supplements',
      challenge: 'Relying solely on Facebook ads with plateauing performance and missing younger demographics',
      solution: 'Developed coordinated ad strategy across Facebook (primary), Instagram, and TikTok with platform-specific creatives',
      results: [
        '290% overall ROAS across all platforms',
        'Facebook: 65% of revenue, 8.5x ROAS',
        'Instagram: 25% of revenue, 6.2x ROAS',
        'TikTok: 10% of revenue, 4.8x ROAS',
        '12,000+ new customers from multi-platform approach',
        '$580K total revenue from $145K ad spend'
      ]
    }
  },
];
