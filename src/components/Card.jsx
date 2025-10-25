import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  hover = true,
  ...props
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`glass rounded-xl p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

