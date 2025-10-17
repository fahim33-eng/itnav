"use client"

import { motion } from 'framer-motion';
import { Member } from '@/types';
import Image from 'next/image';

interface MemberDetailProps {
  member: Member;
  index: number;
}

export default function MemberDetail({ member, index }: MemberDetailProps) {
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
              <Image src={member.image} alt={member.nameJapanese} fill className="object-cover" sizes="(max-width:768px) 192px, 450px" />
            </div>
          </div>

          <div className="pr-4 mt-8 md:pr-0 flex flex-col justify-center space-y-4">
            <div className="mb-3 text-sm text-gray-600 flex items-center gap-2">
              <span className="text-[#2ABC8F] font-medium">{member.nameJapanese}</span>
              <span className="text-gray-500">{member.name}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{member.title}</h3>
            <span className="text-gray-400 ml-2">{member.joinYear}</span>
          </div>
        </div>

        <div className="space-y-24">
          {member.questions?.map((q, idx) => (
            <div key={q.id} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-5xl font-extrabold leading-none">
                  <span className="text-[#2ABC8F]">Q</span>
                  <span className="text-black">{idx + 1}</span>
                </div>
                <div className="pt-3 flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#2ABC8F] inline-block" />
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{q.question}</h4>
                </div>
              </div>
              <div className="pl-16 md:pl-20 text-gray-700 leading-relaxed whitespace-pre-line">
                {q.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

