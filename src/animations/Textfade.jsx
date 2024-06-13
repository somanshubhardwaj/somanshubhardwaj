"use client"
import React from "react";
import { motion } from "framer-motion";
const Textfade = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{
        duration: 2,
        type: "spring",
        bounce: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Textfade;
