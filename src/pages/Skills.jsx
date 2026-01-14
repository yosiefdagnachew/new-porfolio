import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'

export default function Skills() {
 const skillCategories = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React', proficiency: 95 },
      { name: 'JavaScript (ES6+)', proficiency: 92 },
      { name: 'TypeScript', proficiency: 85 },
      { name: 'HTML5 / CSS3', proficiency: 95 },
      { name: 'Tailwind CSS', proficiency: 92 },
      { name: 'Next.js', proficiency: 85 },
      { name: 'Vite', proficiency: 88 },
      { name: 'Responsive Design', proficiency: 90 },
      { name: 'UI Accessibility (a11y)', proficiency: 75 },
    ]
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', proficiency: 92 },
      { name: 'Express.js', proficiency: 90 },
      { name: 'FastAPI', proficiency: 85 },
      { name: 'Python Backend', proficiency: 82 },
      { name: 'Authentication & Authorization (JWT)', proficiency: 90 },
      { name: 'RESTful API Design', proficiency: 92 },
      { name: 'Middleware & Security', proficiency: 85 },
      { name: 'Session & Role Management', proficiency: 85 },
    ]
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'JavaScript', proficiency: 92 },
      { name: 'Python', proficiency: 85 },
      { name: 'Java', proficiency: 80 },
      { name: 'C#', proficiency: 78 },
      { name: 'PHP', proficiency: 75 },
      { name: 'SQL', proficiency: 90 },
    ]
  },
  {
    category: 'Databases & Data Storage',
    skills: [
      { name: 'PostgreSQL', proficiency: 88 },
      { name: 'MongoDB', proficiency: 88 },
      { name: 'MySQL', proficiency: 82 },
      { name: 'SQLite', proficiency: 80 },
      { name: 'Prisma ORM', proficiency: 85 },
      { name: 'Mongoose', proficiency: 85 },
      { name: 'Database Modeling', proficiency: 88 },
    ]
  },
  {
    category: 'API & Software Architecture',
    skills: [
      { name: 'REST API Standards', proficiency: 92 },
      { name: 'MVC Architecture', proficiency: 90 },
      { name: 'Clean Architecture', proficiency: 85 },
      { name: 'Layered Architecture', proficiency: 88 },
      { name: 'Error Handling & Logging', proficiency: 90 },
      { name: 'System Design Basics', proficiency: 80 },
    ]
  },
  {
    category: 'DevOps & Deployment',
    skills: [
      { name: 'Docker', proficiency: 78 },
      { name: 'CI/CD Basics', proficiency: 75 },
      { name: 'Linux Server Usage', proficiency: 82 },
      { name: 'Nginx (Basics)', proficiency: 70 },
      { name: 'Environment Configuration', proficiency: 85 },
      { name: 'Cloud Deployment (Render/Vercel)', proficiency: 80 },
    ]
  },
  {
    category: 'Testing & Quality Assurance',
    skills: [
      { name: 'Unit Testing Concepts', proficiency: 80 },
      { name: 'Jest', proficiency: 78 },
      { name: 'API Testing (Postman)', proficiency: 90 },
      { name: 'Debugging', proficiency: 92 },
      { name: 'Code Review', proficiency: 85 },
    ]
  },
  {
    category: 'Data Science & Analytics',
    skills: [
      { name: 'NumPy', proficiency: 85 },
      { name: 'Pandas', proficiency: 88 },
      { name: 'Matplotlib', proficiency: 85 },
      { name: 'Seaborn', proficiency: 80 },
      { name: 'Scikit-Learn', proficiency: 78 },
      { name: 'Data Preprocessing', proficiency: 85 },
      { name: 'Model Evaluation', proficiency: 80 },
    ]
  },
  {
    category: 'Tools & Productivity',
    skills: [
      { name: 'Git & GitHub', proficiency: 92 },
      { name: 'GitHub Actions', proficiency: 75 },
      { name: 'VS Code', proficiency: 95 },
      { name: 'Postman', proficiency: 90 },
      { name: 'Figma (Dev Handoff)', proficiency: 70 },
      { name: 'Agile / Scrum Basics', proficiency: 80 },
    ]
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

  const SkillBar = ({ name, proficiency }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">{name}</span>
        <span className="text-accent text-sm font-bold">{proficiency}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
        />
      </div>
    </div>
  )

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Skills"
          subtitle="A comprehensive overview of my technical expertise and proficiency levels"
        />

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card>
                <h3 className="text-2xl font-bold mb-8 gradient-text">
                  {category.category}
                </h3>
                <div>
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skillIdx}
                      name={skill.name}
                      proficiency={skill.proficiency}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: 'Languages', value: '6+' },
            { label: 'Frameworks', value: '10+' },
            { label: 'Databases', value: '6+' },
            { label: 'Tools & Platforms', value: '15+' },
          ].map((stat, idx) => (
            <Card key={idx} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </Card>
          ))}
        </motion.div>

        Additional Info
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                'Problem Solving & Analytical Thinking',
                'Systematic Debugging',
                'Clean & Maintainable Code Writing',
                'Technical Communication',
                'Team Collaboration & Code Reviews',
                'Requirement Analysis',
                'Time Management & Prioritization',
                'Ownership & Accountability',
                'Adaptability to New Technologies',
                'Attention to Detail',
                'Continuous Learning Mindset',
                'Documentation & Knowledge Sharing',
          ].map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

