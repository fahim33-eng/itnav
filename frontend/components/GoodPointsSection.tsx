"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const goodPoints = [
  {
    id: "1",
    text: "勉強会などのサポートをしてくれる",
    image: "/green_avatar_1.png"
  },
  {
    id: "2", 
    text: "興味がある、チャレンジする人が多い",
    image: "/green_avatar_2.png"
  },
  {
    id: "3",
    text: "社内イベントがたくさんある",
    image: "/green_avatar_3.png"
  },
  {
    id: "4",
    text: "他の企業の方と出会う機会が多い",
    image: "/green_avatar_4.png"
  }
];

export default function GoodPointsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-32 px-4 md:px-6 lg:px-4 relative bg-white">
      <div className="container mx-auto max-w-[80%]">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 md:space-y-4 -ml-8 md:-ml-16 lg:-ml-24 xl:-ml-32"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-itnav-primary">GOOD</span>
            <span className="text-gray-900"> POINT</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-itnav-primary" />
            <span className="text-xs md:text-sm text-gray-600">The good thing about Itonabu</span>
          </div>
        </motion.div>
      </div>

      <div className="relative mt-6 md:mt-8">
        <div className="bg-grid-f1faf7">
          <div className="container mx-auto max-w-7xl min-h-[320px] md:min-h-[420px] py-12 md:py-16 flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 md:flex lg:flex items-center justify-center gap-6 md:gap-8 lg:gap-10">
              {goodPoints.map((point, index) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`${index === 0 || index === 2 ? 'md:-mt-12' : ''} ${index === 1 || index === 3 ? 'md:mt-12' : ''}`}
                >
                  <div className="relative w-32 h-32 md:w-48 md:h-48">
                    <div className="absolute inset-0 bg-white rounded-full shadow-lg border-4 border-gray-100 flex items-center justify-center p-3 md:p-6">
                      <p className="text-gray-800 font-medium leading-relaxed text-xs md:text-sm text-center px-1 md:px-2">{point.text}</p>
                    </div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 translate-x-6 md:translate-x-8 translate-y-3 md:translate-y-4">
                      <Image src={point.image} alt={`Good point ${point.id}`} fill className="object-contain" sizes="64px" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 md:mt-12"
            >
              <a href="#" className="inline-flex items-center gap-2 bg-itnav-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-xs md:text-sm font-medium hover:bg-itnav-primary-dark transition-colors">
                さらに詳しく
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

