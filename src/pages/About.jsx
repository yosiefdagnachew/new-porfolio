import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import { FiAward, FiBookOpen, FiBriefcase } from 'react-icons/fi'

export default function About() {
  const education = [
    {
      school: 'Debre Markos University',
      degree: 'Bachelor of Science in Software Engineering',
      year: '2024',
      gpa: '3.83',
      details: 'Graduated with honors, focusing on full-stack web development and software architecture'
    }
  ]

  const experience = [
    {
      title: 'Full Stack Web Developer',
      company: 'Self-Employed',
      period: '2023 - Present',
      description: 'Building modern web applications using React, Node.js, and various databases'
    },
    {
      title: 'Junior Developer',
      company: 'Various Projects',
      period: '2022 - 2023',
      description: 'Contributed to multiple projects, learning and implementing best practices'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionTitle
          title="About Me"
          subtitle="Learn more about my background, education, and professional journey"
        />

        {/* Main About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I'm Yosief Dagnachew, a passionate software engineer and full-stack web developer from Debre Markos University. With a strong academic background (GPA: 3.83) and a deep interest in creating interactive and modern web applications, I'm committed to delivering high-quality solutions.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              My journey in software development has been driven by a desire to solve real-world problems through technology. I specialize in building scalable, user-friendly applications that combine beautiful design with robust functionality.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously learning to stay updated with industry trends.
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                    <FiAward className="text-accent" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Academic Excellence</h4>
                  <p className="text-gray-400 text-sm">GPA: 3.83 - Graduated with honors</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                    <FiBriefcase className="text-accent" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Full Stack Developer</h4>
                  <p className="text-gray-400 text-sm">Frontend, Backend, and Database expertise</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                    <FiBookOpen className="text-accent" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Continuous Learner</h4>
                  <p className="text-gray-400 text-sm">Always exploring new technologies</p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Education */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Education</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-accent">{edu.school}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{edu.year}</span>
                  </div>
                  <p className="text-gray-400 mb-2">{edu.details}</p>
                  <p className="text-sm text-accent font-semibold">GPA: {edu.gpa}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-3xl font-bold mb-8 gradient-text">Experience</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            {experience.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-accent">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-400">{exp.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

