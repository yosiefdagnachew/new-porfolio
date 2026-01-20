import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiGithub, url: 'https://www.github.com/yosiefdagnachew', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://www.linkedin.com/in/yosief-dagnachew-lkdn', label: 'LinkedIn' },
    { icon: SiUpwork, url: 'https://www.upwork.com/freelancers/~019917a3e40f1bca80', label: 'Upwork' }
    { icon: FiTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FiMail, url: 'mailto:jossysiyolas@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-secondary border-t border-secondary mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">Yosief Dagnachew</h3>
            <p className="text-gray-400 text-sm">
              Full Stack Web Developer & Software Engineer from Addis Ababa Ethiopia
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="/projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#3b82f6' }}
                    className="text-gray-400 hover:text-accent transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Yosief Dagnachew. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

