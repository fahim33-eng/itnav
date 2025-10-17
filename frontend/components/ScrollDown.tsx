"use client"

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollDown() {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })}
    >
      <div className="flex flex-col items-center text-gray-600">
        <span className="text-sm mb-2 tracking-wider">SCROLL DOWN</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </motion.div>
  );
}

