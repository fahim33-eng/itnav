"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface MessageSectionProps {
  title: string;
  content: string;
  link: string;
}

export default function MessageSection({ title, content, link }: MessageSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-4 my-24 md:py-20 px-4 md:px-6 lg:px-4 bg-white relative">
      {/* Right half background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F1FAF7] z-0" />
      <div className="container mx-auto max-w-[80%] relative z-10">
        <div className="grid grid-cols-12 gap-6 md:gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-3 -ml-8 md:-ml-16 lg:-ml-24 xl:-ml-32"
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-itnav-primary">M</span>
              <span className="text-gray-900">ESSAGE</span>
            </motion.h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-itnav-primary"></div>
              <span className="text-xs text-gray-600">イトナブからのメッセージ</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-12 lg:col-span-4 space-y-4 md:space-y-5 mt-4 md:mt-6 lg:mt-8"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
              地方都市からでも<br />
              世界で活躍できる若者を育てる
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {content}
            </p>
            <div>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-itnav-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-itnav-primary-dark transition-colors"
              >
                {link}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 mt-6 lg:mt-0"
          >
              <div className="relative rounded-2xl md:rounded-3xl bg-itnav-primary/10 p-4 md:p-6 lg:p-10">
                <div className="relative w-full max-w-md mx-auto aspect-[4/4] overflow-hidden shadow-lg z-10">
                  <Image
                    src="/classroom_group_photo_1.png"
                    alt="Classroom"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 35vw, 20vw"
                  />
                </div>
                  <div className="absolute z-[-1] left-0 md:left-42 -top-2 md:-top-4 w-[70%] md:w-[40%] h-[70%] bg-[#94DAC2]" />
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}