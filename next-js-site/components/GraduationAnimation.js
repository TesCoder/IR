"use client";
// on hold

import { motion } from "framer-motion";

export default function GraduationAnimation() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      
      {/* Background layer */}
      <motion.img
        src="images/success/background-1600w.webp"
        alt="Graduation Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Graduates layer */}
      <motion.img
        src="images/success/graduates-1600w.webp"
        alt="Graduates"
        className="absolute bottom-0 left-0 w-full object-cover"
        initial={{ y: 0 }}
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Caps layer */}
      <motion.img
        src="images/success/caps-1600w.webp"
        alt="Caps Flying"
        className="absolute top-0 left-0 w-full object-cover"
        initial={{ y: -10 }}
        animate={{
          y: [-10, -20, -10],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
