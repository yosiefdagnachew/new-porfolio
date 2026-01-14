import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import Button from '../components/Button'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
  {
    id: 1,
    title: 'Project Management Web App',
    description:
      'A comprehensive web application built for managing tasks, teams, and communication using a modern full-stack architecture.',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'Express','Web Socket','JWT', 'Passport.Js', 'MongoDB'],
    image: '📋',
    github: 'https://github.com/yosiefdagnachew/project-management',
    live: '',
    featured: true
  },
 {
    id: 2,
    title: 'Fixed Asset Management System',
    description:
      'A system for tracking fixed assets, maintenance schedules, and inventory using modern development practices.',
    category: 'fullstack',
    technologies: ['Next js','React','TypeScript','TailwindCSS','PostgreSQL','PrismaORM','NextAuth.js','Zod'],
    image: '🏗️',
    github: 'https://github.com/yosiefdagnachew/Fixed-asset-management-system',
    live: '',
    featured: false
  },

  {
  id: 3,
  title: 'Task Scheduler System',
  description:
    'A comprehensive and auditable task scheduling system designed to fairly assign operational tasks with configurable rules, audit trails, and an interactive web interface.',
  category: 'fullstack',
  technologies: ['React','FastAPI','Python','PostgreSQL','REST API','TailwindCSS'],
  image: '⏱️',
  github: 'https://github.com/yosiefdagnachew/task-scheduler',
  live: '',
  featured: true
},
{
    id: 4,
    title: 'Student Attendance Management',
    description:
      'A student attendance system project implemented in C#/CSS/HTML/JavaScript, serving as an educational CMS prototype.',
    category: 'fullstack',
    technologies: ['C#','ASP.NET MVC','Entity Framework','HTML', 'CSS', 'JavaScript','F#','SQL Server' ],
    image: '🧑‍🎓',
    github: 'https://github.com/yosiefdagnachew/Student-Attendance-Management',
    live: '',
    featured: false
  },
  {
  id: 5,
  title: 'Sorting Visualizer (Java GUI)',
  description:
    'A Java-based graphical application that visually demonstrates how different sorting algorithms work step by step, providing an interactive and educational learning experience.',
  category: 'algorithm-and-data-structure',
  technologies: ['Java', 'Java Swing','Bubble Sort','Selection Sort','Insertion Sort','Merge Sort','Quick Sort','Heap Sort'],
  image: '📊',
  github: 'https://github.com/yosiefdagnachew/sorting-visualizer',
  live: '',
  featured: false
},
  {
    id: 6,
    title: 'Library Management System',
    description:
      'A PHP-based library management system with user authentication, book tracking, and member management features.',
    category: 'fullstack',
    technologies: ['PHP', 'MySQL', 'CSS', 'JavaScript','HTML'],
    image: '📚',
    github: 'https://github.com/yosiefdagnachew/Library_management_system',
    live: '',
    featured: false
  },
  {
    id: 7,
    title: 'Market Price Prediction',
    description:
      'A machine learning project using Python to predict market prices through data preprocessing, modeling, and visualization.',
    category: 'data-science',
    technologies: ['Python', 'numpy', 'pandas', 'matplotlib', 'seaborn', 'Scikit-Learn', 'Jupyter Notebook',],
    image: '📈',
    github: 'https://github.com/yosiefdagnachew/Python-final-project',
    live: '',
    featured: true
  },
  {
    id: 8,
    title: 'Personal Portfolio Website',
    description:
      'Source code for a personal portfolio website showcasing skills, education, and projects built with HTML, CSS, and JavaScript.',
    category: 'frontend',
    technologies: ['React', 'TailwindCSS', 'Vite', 'JavaScript'],
    image: '🌐',
    github: 'https://github.com/yosiefdagnachew/PORTFOLIO-YOSIEF',
    live: 'https://yosiefdagnachew.github.io/PORTFOLIO-YOSIEF',
    featured: true
  },
  {
  id: 9,
  title: 'Book Review REST API',
  description:
    'A scalable RESTful backend service built with Node.js and Express for managing books, user reviews, and ratings. The API supports authentication, authorization, structured CRUD operations, and clean architectural separation following backend best practices.',
  category: 'backend',
  technologies: ['Node.js','Express.js','MongoDB','Mongoose','JWT','REST API','Postman'],
  image: '📚',
  github: 'https://github.com/yosiefdagnachew/expressBookReviews', 
  live: '',
  featured: false
}

]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'algorithm-and-data-structure', label: 'Algorithm & Data Structure' },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

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
          title="My Projects"
          subtitle="Explore the projects I've built and the technologies I've used"
        />

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'bg-accent text-white'
                  : 'bg-secondary hover:bg-gray-700 text-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => (
            <motion.div key={project.id} variants={itemVariants} initial="hidden" animate="visible">
              <Card className="h-full flex flex-col">
                <div className="text-6xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="secondary" size="sm" className="w-full">
                      <FiGithub /> Code
                    </Button>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full">
                      <FiExternalLink /> Live
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

