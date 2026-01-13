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
      details:
        'Strong academic foundation in software engineering, full-stack web development, databases, and system design.',
    },
    {
      school: 'G.Y.M Institute of Technology',
      degree: 'Certificate in Computer and Office Equipment',
      year: '2023',
      gpa: '90%',
      details:
        'Hands-on training in computer hardware, troubleshooting, and office equipment maintenance.',
    },
    {
      school: 'G.Y.M Institute of Technology',
      degree: 'Certificate in Mobile Phone Repairing and Servicing',
      year: '2023',
      gpa: '90%',
      details:
        'Practical experience in mobile phone diagnostics, repair, and servicing.',
    },
  ]

  const experience = [
    {
      title: 'IT Officer',
      company: 'Zemen Bank S.C',
      period: 'June 2024 – Present',
      description:
        'Working in the IT Department supporting enterprise systems, system administration, network operations, and security tools including Sophos, Nessus, and CyberArk. Gained hands-on experience with core banking systems and RTGS operations.',
    },
    {
      title: 'Software Developer',
      company: 'Amhara Science and Technology Commission',
      period: 'Sep 2023 – Jul 2023',
      description:
        'Developed and maintained web applications using ASP.NET, Java, and MERN stack technologies. Contributed to both frontend and backend development while following software engineering best practices.',
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Self-Employed',
      period: '2022 – 2023',
      description:
        'Contributed to multiple projects, learning and implementing best practices',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
          subtitle="My background, education, and professional experience"
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
              I’m Yosief Dagnachew, a Software Engineer and Full Stack Web Developer
              from Addis Ababa, Ethiopia. I hold a BSc in Software Engineering with
              a CGPA of 3.83 and have professional experience in both software
              development and enterprise IT environments.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I enjoy building secure, scalable, and user-focused applications.
              My background combines strong academic knowledge with hands-on
              experience in real-world systems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I am highly motivated, detail-oriented, and continuously learning
              new technologies to improve my skills and deliver better solutions.
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                  <FiAward className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Academic Excellence</h4>
                  <p className="text-gray-400 text-sm">
                    BSc in Software Engineering (GPA: 3.83)
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                  <FiBriefcase className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Industry Experience</h4>
                  <p className="text-gray-400 text-sm">
                    Banking systems, enterprise IT, and software development
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                  <FiBookOpen className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Continuous Learning</h4>
                  <p className="text-gray-400 text-sm">
                    Always improving skills with modern technologies
                  </p>
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
                  <p className="text-sm text-accent font-semibold">
                    GPA / Result: {edu.gpa}
                  </p>
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
