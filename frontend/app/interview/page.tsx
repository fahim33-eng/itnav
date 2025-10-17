"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import MemberDetail from '@/components/MemberDetail';
import GraduateCard from '@/components/GraduateCard';
import { getMembers, getGraduates } from '@/lib/api';
import { Member, Graduate } from '@/types';
import SideText from '@/components/SideText';

import EntrySection from '@/components/EntrySection';
import Footer from '@/components/Footer';

export default function InterviewPage() {
  const [activeTab, setActiveTab] = useState('members');
  const [members, setMembers] = useState<Member[]>([]);
  const [graduates, setGraduates] = useState<Graduate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [membersData, graduatesData] = await Promise.all([
          getMembers(),
          getGraduates()
        ]);
        setMembers(membersData);
        setGraduates(graduatesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen pt-16 md:pt-20 lg:pt-24 pb-0 px-0 bg-white">
      <SideText />
      <div className="w-full">
        <div className="relative">
          <div className="h-40 md:h-56 lg:h-[512px] w-full">
            <div className="absolute inset-0">
              <img src="/hero_group_photo_2.png" alt="members" className="w-full h-full object-cover" />
            </div>
            <div className="absolute left-[6%] top-[22%] bg-white px-6 py-4 shadow-md">
              <span className="text-2xl md:text-4xl font-bold tracking-wider">メンバーにきいてみた</span>
            </div>
          </div>
        </div>
      </div>

      {/* Half white / half #F1FAF7 background wrapper */}
      <div className="relative">
        <div className="absolute top-[400px] md:top-[500px] right-0 w-1/2 bg-[#F1FAF7] bottom-0" />
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mt-10 mb-6">
          <h2 className="text-5xl md:text-6xl tracking-wider"><span className="text-itnav-primary">I</span>TNAV MEMBER</h2>
          <div className="mt-6 flex justify-center items-center gap-2 text-sm">
            <div className="h-2 w-2 bg-itnav-primary" />
            <span className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-itnav-primary">We asked the members</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="w-full max-w-3xl">
            <div className="grid grid-cols-2 text-center text-sm">
              <button
                onClick={() => setActiveTab('members')}
                className={`py-2 font-medium ${activeTab==='members' ? 'text-[#2ABC8F]' : 'text-gray-400'}`}
              >
                メンバーにきいてみた
              </button>
              <button
                onClick={() => setActiveTab('graduates')}
                className={`py-2 font-medium ${activeTab==='graduates' ? 'text-[#2ABC8F]' : 'text-gray-400'}`}
              >
                卒業生にきいてみた
              </button>
            </div>
            <div className="relative mt-2 h-[2px] bg-gray-100">
              <div className={`absolute left-0 top-0 h-[2px] bg-[#2ABC8F] transition-all duration-300 ${activeTab==='members' ? 'w-1/2' : 'w-0'}`} />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
            <p className="mt-4 text-gray-600">読み込み中...</p>
          </motion.div>
        ) : (
          <>
            {activeTab === 'members' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {members.map((member, index) => (
                  <MemberDetail key={member.id} member={member} index={index} />
                ))}
              </motion.div>
            )}

            {activeTab === 'graduates' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {graduates.map((graduate, index) => (
                  <GraduateCard key={graduate.id} graduate={graduate} index={index} />
                ))}
              </motion.div>
            )}
          </>
        )}

        </div>
      </div>

      <div className="mt-16">
        <EntrySection />
      </div>
    </div>
  );
}

