"use client"

import { motion } from 'framer-motion';
import { Graduate } from '@/types';
import Image from 'next/image';

interface GraduateCardProps {
  graduate: Graduate;
  index: number;
}

export default function GraduateCard({ graduate, index }: GraduateCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative mb-20"
    >
      <div className="relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
          <div className="px-4 md:px-0">
            <div className="relative w-48 md:w-[400px] lg:w-[450px] aspect-[4/4] bg-gray-100 overflow-hidden">
              <Image src={graduate.image} alt={graduate.nameJapanese} fill className="object-cover" sizes="(max-width:768px) 192px, 450px" />
            </div>
          </div>

          <div className="pr-4 mt-8 md:pr-0 flex flex-col justify-center space-y-4">
            <div className="mb-3 text-sm text-gray-600 flex items-center gap-2">
              <span className="text-[#2ABC8F] font-medium">{graduate.nameJapanese}</span>
              <span className="text-gray-500">{graduate.name}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{graduate.title}</h3>
            <span className="text-gray-400 ml-2">{graduate.graduationYear}</span>
          </div>
        </div>

        <div className="text-gray-700 leading-8 whitespace-pre-line text-md font-semibold">
          {graduate.content}
        </div>
      </div>
    </motion.section>
  );
}

