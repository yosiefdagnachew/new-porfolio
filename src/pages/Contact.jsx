import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import Button from '../components/Button'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'jossysiyolas@gmail.com',
      link: 'mailto:jossysiyolas@gmail.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+251 960 94 5350',
      link: 'tel:+251 960 94 5350'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Addis Ababa, Ethiopia',
      link: 'https://maps.app.goo.gl/1GeDgT2eGRz3j5Hh6'
    },
  ]

  const socialLinks = [
    { icon: FiGithub, url: 'https://www.github.com/yosiefdagnachew', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://www.linkedin.com/in/yosief-dagnachew-lkdn', label: 'LinkedIn' },
    { icon: FiTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: SiUpwork, url: 'https://www.upwork.com/freelancers/~019917a3e40f1bca80', label: 'Upwork' },
    { icon: FiMail, url: 'mailto:jossysiyolas@gmail.com', label: 'Email' },
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
          title="Get In Touch"
          subtitle="Have a project in mind? Let's talk about it!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <a href={info.link} className="block">
                    <Card className="hover:border-accent/50">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                            <Icon className="text-accent" size={24} />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">{info.label}</h3>
                          <p className="text-gray-400 text-sm">{info.value}</p>
                        </div>
                      </div>
                    </Card>
                  </a>
                </motion.div>
              )
            })}

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <Card>
                <h3 className="font-bold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/20 text-accent hover:bg-accent hover:text-white transition-colors"
                        aria-label={social.label}
                      >
                        <Icon size={20} />
                      </motion.a>
                    )
                  })}
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-accent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center glass rounded-2xl p-12"
        >
          <h3 className="text-2xl font-bold mb-4">Let's Create Something Amazing Together</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you have a project idea, want to collaborate, or just want to chat about web development, I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:jossysiyolas@gmail.com">
              <Button size="lg">Send Email</Button>
            </a>
            <a href="https://www.linkedin.com/in/yosief-dagnachew-53b5a0322" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">Connect on LinkedIn</Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

