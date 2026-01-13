// Navigation links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Contact', path: '/contact' },
]

// Social media links
export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com', icon: 'FiGithub' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'FiLinkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'FiTwitter' },
  { name: 'Email', url: 'mailto:yosief@example.com', icon: 'FiMail' },
]

// Animation variants
export const FADE_IN_VARIANT = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const SLIDE_UP_VARIANT = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Personal info
export const PERSONAL_INFO = {
  name: 'Yosief Dagnachew',
  title: 'Full Stack Web Developer & Software Engineer',
  university: 'Debre Markos University',
  gpa: '3.83',
  email: 'yosief@example.com',
  phone: '+251 9XX XXX XXXX',
  location: 'Debre Markos, Ethiopia',
}

