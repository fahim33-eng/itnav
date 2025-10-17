"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Member } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

interface MemberCardProps {
  member: Member;
  index: number;
}

export default function MemberCard({ member, index }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Link href="/interview">
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 bg-white">
          <div className="relative h-80 bg-gray-100 overflow-hidden">
            <Image
              src={member.image}
              alt={member.nameJapanese}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <CardContent className="p-6 bg-white">
            <div className="flex items-baseline gap-2 mb-2">
              <h3 className="text-lg font-bold text-gray-900">{member.nameJapanese}</h3>
              <span className="text-xs text-gray-500 uppercase">{member.name}</span>
            </div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3 leading-snug">
              {member.title}
            </h4>
            <p className="text-xs text-gray-500 mb-4">{member.joinYear}</p>
            <motion.div 
              className="inline-flex items-center gap-2 bg-itnav-primary text-white px-4 py-2 rounded-full text-xs font-medium group-hover:bg-itnav-primary-dark transition-colors"
            >
              さらに詳しく
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

