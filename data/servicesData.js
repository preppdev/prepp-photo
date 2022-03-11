import { ChartBarIcon, CursorClickIcon, ViewGridIcon } from '@heroicons/react/outline'

const services = [
  {
    name: 'Photo Editing',
    description: 'Real Estate Photo Editing / Processing - $0.50 each',
    href: '/photo-services',
    icon: ChartBarIcon,
  },
  {
    name: 'Video Editing',
    description: 'Video Editing - Starting at $5',
    href: '/video-services',
    icon: CursorClickIcon,
  },
  {
    name: 'Twilight',
    description: 'Virtual Twilight - $5 Each',
    href: '/twilight-services',
    icon: ViewGridIcon,
  },
]

module.exports = services
