'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ x: '80%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-80%', opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}