"use client"
import React from 'react'
import { motion } from 'framer-motion'
const Socialicon = ({children}) => {
  return (
    <motion.div
      initial={{ opacity: 0 , x: 20,rotate:30}}
      whileInView={{ opacity: 1, x: 0,rotate:0}}
      viewport={{ once: false, amount: 0.8 }}
      transition={{
        duration: 2,
        type: "spring",
        bounce: 0.4,
      }}
    >
      {children}
    </motion.div>
  )
}

export default Socialicon