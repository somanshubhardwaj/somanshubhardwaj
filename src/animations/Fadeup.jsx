"use client";
import { useRef } from "react";
import React from "react";
import { motion } from "framer-motion";
//used to animate skills

const Fadeup = ({ children }) => {
  const ref = useRef(null);
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{
          duration: 2,
          type: "spring",
          bounce: 0.4,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Fadeup;
