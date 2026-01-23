export interface CreativeWorkItem {
  id: string;
  type: 'design' | 'video';
  title: string;
  category: string;
  thumbnail: string;
  fullImage?: string;
  videoUrl?: string;
  description?: string;
  aspectRatio?: string;
}

export const creativeWorkData: CreativeWorkItem[] = [
  // Graphic Designs
  {
    id: 'design-1',
    type: 'design',
    title: 'Social Media Campaign',
    category: 'Social Media Graphics',
    thumbnail: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    fullImage: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Instagram and Facebook promotional graphics',
    aspectRatio: '4/5'
  },
  {
    id: 'design-2',
    type: 'design',
    title: 'Brand Identity Design',
    category: 'Branding',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    fullImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Modern brand identity and logo design',
    aspectRatio: '1/1'
  },
  {
    id: 'design-3',
    type: 'design',
    title: 'Event Poster',
    category: 'Print Design',
    thumbnail: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800',
    fullImage: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Concert event promotional poster',
    aspectRatio: '2/3'
  },
  {
    id: 'design-4',
    type: 'design',
    title: 'Digital Marketing Ad',
    category: 'Social Media Graphics',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    fullImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Facebook and Instagram ad creative',
    aspectRatio: '16/9'
  },
  {
    id: 'design-5',
    type: 'design',
    title: 'Product Showcase',
    category: 'E-Commerce',
    thumbnail: 'https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=800',
    fullImage: 'https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Product photography and editing',
    aspectRatio: '4/5'
  },
  {
    id: 'design-6',
    type: 'design',
    title: 'Typography Art',
    category: 'Branding',
    thumbnail: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=800',
    fullImage: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Custom typography and lettering',
    aspectRatio: '1/1'
  },
  {
    id: 'design-7',
    type: 'design',
    title: 'Food Menu Design',
    category: 'Print Design',
    thumbnail: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800',
    fullImage: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Restaurant menu design and layout',
    aspectRatio: '2/3'
  },
  {
    id: 'design-8',
    type: 'design',
    title: 'Minimalist Poster',
    category: 'Print Design',
    thumbnail: 'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&w=800',
    fullImage: 'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Clean and modern poster design',
    aspectRatio: '3/4'
  },

  // Videos
  {
    id: 'video-1',
    type: 'video',
    title: 'Product Launch Video',
    category: 'Commercial',
    thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4',
    description: 'Dynamic product showcase video',
    aspectRatio: '16/9'
  },
  {
    id: 'video-2',
    type: 'video',
    title: 'Social Media Promo',
    category: 'Social Media',
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4',
    description: 'Engaging social media promotional video',
    aspectRatio: '16/9'
  },
  {
    id: 'video-3',
    type: 'video',
    title: 'Brand Story',
    category: 'Corporate',
    thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://videos.pexels.com/video-files/3252125/3252125-hd_1920_1080_25fps.mp4',
    description: 'Corporate brand storytelling video',
    aspectRatio: '16/9'
  },
  {
    id: 'video-4',
    type: 'video',
    title: 'Event Highlight Reel',
    category: 'Event Coverage',
    thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://videos.pexels.com/video-files/3205484/3205484-hd_1920_1080_30fps.mp4',
    description: 'Dynamic event highlight compilation',
    aspectRatio: '16/9'
  },
  {
    id: 'video-5',
    type: 'video',
    title: 'Motion Graphics Demo',
    category: 'Animation',
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://videos.pexels.com/video-files/3191833/3191833-hd_1920_1080_25fps.mp4',
    description: 'Creative motion graphics showcase',
    aspectRatio: '16/9'
  },
  {
    id: 'video-6',
    type: 'video',
    title: 'Testimonial Video',
    category: 'Corporate',
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://videos.pexels.com/video-files/4065839/4065839-hd_1920_1080_25fps.mp4',
    description: 'Client testimonial and success story',
    aspectRatio: '16/9'
  }
];
