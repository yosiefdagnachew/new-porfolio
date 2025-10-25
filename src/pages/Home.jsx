import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCode, FiLayout, FiDatabase } from 'react-icons/fi'
import Button from '../components/Button'
import Card from '../components/Card'

export default function Home() {
  const features = [
    {
      icon: FiCode,
      title: 'Full Stack Development',
      description: 'Building robust applications with modern technologies'
    },
    {
      icon: FiLayout,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces'
    },
    {
      icon: FiDatabase,
      title: 'Database Design',
      description: 'Designing scalable and efficient database solutions'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-light/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm <span className="gradient-text">Yosief Dagnachew</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Full Stack Web Developer & Software Engineer from Debre Markos University
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            GPA: 3.83 | Passionate about building interactive, modern web applications
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link to="/projects">
              <Button size="lg" className="w-full sm:w-auto">
                View My Work <FiArrowRight />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-accent rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12 gradient-text"
          >
            What I Do
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center glass rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to work together?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's create something amazing. Feel free to reach out!
          </p>
          <Link to="/contact">
            <Button size="lg">
              Start a Conversation <FiArrowRight />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

