import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import Button from '../components/Button'
import { FiDownload, FiExternalLink } from 'react-icons/fi'

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: 'March 2024',
      description: 'Comprehensive course covering React, Node.js, MongoDB, and modern web development practices.',
      credentialUrl: 'https://example.com',
      icon: '🎓'
    },
    {
      id: 2,
      title: 'JavaScript Mastery',
      issuer: 'Codecademy',
      date: 'January 2024',
      description: 'Advanced JavaScript concepts including ES6+, async programming, and design patterns.',
      credentialUrl: 'https://example.com',
      icon: '📜'
    },
    {
      id: 3,
      title: 'React Advanced Patterns',
      issuer: 'Frontend Masters',
      date: 'December 2023',
      description: 'Deep dive into React hooks, context API, performance optimization, and testing.',
      credentialUrl: 'https://example.com',
      icon: '⚛️'
    },
    {
      id: 4,
      title: 'Database Design & SQL',
      issuer: 'Coursera',
      date: 'November 2023',
      description: 'Relational database design, SQL optimization, and data modeling best practices.',
      credentialUrl: 'https://example.com',
      icon: '🗄️'
    },
    {
      id: 5,
      title: 'Web Performance Optimization',
      issuer: 'Pluralsight',
      date: 'October 2023',
      description: 'Techniques for optimizing web applications, reducing load times, and improving UX.',
      credentialUrl: 'https://example.com',
      icon: '⚡'
    },
    {
      id: 6,
      title: 'Git & Version Control',
      issuer: 'LinkedIn Learning',
      date: 'September 2023',
      description: 'Git fundamentals, branching strategies, collaboration workflows, and best practices.',
      credentialUrl: 'https://example.com',
      icon: '🔀'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Certificates & Achievements"
          subtitle="Professional certifications and courses I've completed to enhance my skills"
        />

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map(cert => (
            <motion.div key={cert.id} variants={itemVariants}>
              <Card className="h-full flex flex-col">
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-accent text-sm font-semibold mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
                <p className="text-gray-400 mb-6 flex-grow">{cert.description}</p>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="w-full">
                    <FiExternalLink /> View Credential
                  </Button>
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text">Other Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Dean\'s List',
                description: 'Recognized for academic excellence with GPA 3.83'
              },
              {
                title: 'Open Source Contributor',
                description: 'Active contributor to various open-source projects'
              },
              {
                title: 'Hackathon Participant',
                description: 'Participated in multiple hackathons and coding competitions'
              },
              {
                title: 'Technical Blogger',
                description: 'Share knowledge through technical articles and tutorials'
              },
            ].map((achievement, idx) => (
              <div key={idx} className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-bold mb-2 text-accent">{achievement.title}</h4>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Want to see all my credentials and achievements?</p>
          <a href="/resume.pdf" download>
            <Button size="lg">
              <FiDownload /> Download My Resume
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

