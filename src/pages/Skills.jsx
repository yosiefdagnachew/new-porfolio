import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', proficiency: 95 },
        { name: 'JavaScript', proficiency: 90 },
        { name: 'HTML/CSS', proficiency: 95 },
        { name: 'Tailwind CSS', proficiency: 90 },
        { name: 'Vue.js', proficiency: 75 },
        { name: 'TypeScript', proficiency: 80 },
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', proficiency: 90 },
        { name: 'Express.js', proficiency: 85 },
        { name: 'Python', proficiency: 80 },
        { name: 'RESTful APIs', proficiency: 90 },
        { name: 'GraphQL', proficiency: 75 },
        { name: 'Authentication', proficiency: 85 },
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MongoDB', proficiency: 85 },
        { name: 'PostgreSQL', proficiency: 85 },
        { name: 'MySQL', proficiency: 80 },
        { name: 'Firebase', proficiency: 80 },
        { name: 'Redis', proficiency: 70 },
        { name: 'SQL', proficiency: 90 },
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', proficiency: 90 },
        { name: 'Docker', proficiency: 75 },
        { name: 'Vite', proficiency: 85 },
        { name: 'Webpack', proficiency: 75 },
        { name: 'Jest', proficiency: 80 },
        { name: 'Linux', proficiency: 80 },
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
            { label: 'Frameworks', value: '8+' },
            { label: 'Databases', value: '5+' },
            { label: 'Tools', value: '10+' },
          ].map((stat, idx) => (
            <Card key={idx} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </Card>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Problem Solving',
              'Team Collaboration',
              'Communication',
              'Project Management',
              'Attention to Detail',
              'Continuous Learning',
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

