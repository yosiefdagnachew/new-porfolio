import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import Button from '../components/Button'
import { FiDownload, FiExternalLink } from 'react-icons/fi'
import {
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiGoogle,
  SiIbm,
  SiHtml5,
  SiPython,
  SiMysql,
  SiGit,
  SiJavascript,
} from 'react-icons/si'
import { FiServer } from 'react-icons/fi'

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'Developing Backend Applications with Node.js and Express',
      issuer: 'IBM (Coursera)',
      date: '2024',
      description:
        'Backend development using Node.js and Express, focusing on REST APIs, middleware, and server-side architecture.',
      credentialUrl: 'https://coursera.org/verify/WV3JCXS568LX',
      icon: SiNodedotjs,
    },
      {
      id: 2,
      title: 'Python Core',
      issuer: 'SoloLearn',
      date: '2023',
      description:
        'Built a solid foundation in Python programming, including data structures, control flow, functions, modular design, and problem-solving techniques.',
      credentialUrl: 'https://www.sololearn.com/certificates/CC-YBKS9MK8',
      icon: SiPython,
    },
     {
      id: 3,
      title: 'Spring Boot 3 Essential',
      issuer: 'IBM (LinkedIn Learning)',
      date: '2024',
      description:
        'Spring Boot fundamentals including configuration, RESTful services, and backend application development.',
      credentialUrl: '',
      icon: SiSpringboot,
    },
    {
      id: 4,
      title: 'Technical Support Fundamentals',
      issuer: 'Google (Coursera)',
      date: '2024',
      description:
        'Core IT support skills including operating systems, troubleshooting, networking basics, and customer support.',
      credentialUrl: 'https://coursera.org/verify/ROOUJX68XZ47',
      icon: SiGoogle,
    },
        {
      id: 5,
      title: 'SQL',
      issuer: 'SoloLearn',
      date: '2023',
      description:
        'Developed a strong understanding of relational database concepts, complex queries, joins, constraints, normalization, and efficient data manipulation using SQL',
      credentialUrl: 'https://www.sololearn.com/certificates/CC-L0VFVOEA',
      icon: SiMysql,
    },
    {
      id: 6,
      title: 'Bits and Bytes of Computer Networking',
      issuer: 'Google (Coursera)',
      date: '2024',
      description:
        'Comprehensive networking concepts including TCP/IP, DNS, DHCP, routing, and network fundamentals.',
      credentialUrl: 'https://coursera.org/verify/7L2LIOD0CNH2',
      icon: FiServer,
    },
        {
      id: 7,
      title: 'Information Technology Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: '2025',
      description:
        'Comprehensive understanding of IT fundamentals including hardware, software, networking, cybersecurity basics, and enterprise IT concepts.',
      credentialUrl: ' https://www.credly.com/badges/e2c26384-28c2-4084-8c75-14499a91679e',
      icon: SiIbm,
    },
    { 
      id: 8,
      title: 'HTML',
      issuer: 'SoloLearn',
      date: '2021',
      description:
        'Mastered semantic HTML, accessibility best practices, structured document design, and standards-compliant markup for modern web applications.',
      credentialUrl: 'https://www.sololearn.com/certificates/CT-WCGSFP8M',
      icon: SiHtml5,
    },
  

    {
      id: 9,
      title: 'Git & Version Control',
      issuer: 'LinkedIn Learning',
      date: '2023',
      description:
        'Git fundamentals, branching strategies, collaboration workflows, and version control best practices.',
      credentialUrl: '',
      icon: SiGit,
    },
   
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
          subtitle="Professional certifications demonstrating continuous learning and technical expertise"
        />

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map(cert => {
            const Icon = cert.icon
            return (
              <motion.div key={cert.id} variants={itemVariants}>
                <Card className="h-full flex flex-col">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-accent/20 mb-4">
                    <Icon size={28} className="text-accent" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-accent text-sm font-semibold mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">{cert.date}</p>

                  <p className="text-gray-400 mb-6 flex-grow">
                    {cert.description}
                  </p>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="w-full">
                        <FiExternalLink /> View Credential
                      </Button>
                    </a>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text">
            Other Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Dean's List",
                description: 'Recognized for academic excellence with a GPA of 3.83',
              },
              {
                title: 'Enterprise IT Experience',
                description:
                  'Hands-on experience supporting enterprise systems in the banking sector.',
              },
              {
                title: 'Project-Based Learning',
                description:
                  'Developed multiple academic and personal projects using modern technologies.',
              },
              {
                title: 'Continuous Learner',
                description:
                  'Actively improving skills through online courses and self-learning.',
              },
            ].map((achievement, idx) => (
              <div key={idx} className="p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-bold mb-2 text-accent">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>
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
          <p className="text-gray-400 mb-6">
            Want to see my full professional background?
          </p>
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
