"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-[900]"
    >
      <nav className="w-full pl-4 md:pl-6 pr-0 py-3 md:py-4 flex items-center justify-between relative">
        <div className="flex items-center gap-1 md:gap-2">
          <Link href="/" className="text-xl md:text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors">
            イトナブ
          </Link>
          <span className="text-[10px] md:text-xs text-gray-500">採用情報</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 mr-32">
          <Link href="/" className="text-xs xl:text-sm text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap">
            TOP
          </Link>
          <Link href="/" className="text-xs xl:text-sm text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap">
            イトナブって？
          </Link>
          <Link href="/interview" className="text-xs xl:text-sm text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap">
            メンバーにきいてみた
          </Link>
          <Link href="/" className="text-xs xl:text-sm text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap">
            イトナブのいいところ
          </Link>
        </div>

        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2">
          <Link 
            href="/" 
            className="bg-itnav-primary text-white px-4 xl:px-6 py-2 xl:py-3 text-xs xl:text-sm font-medium hover:bg-itnav-primary-dark transition-colors flex items-center gap-2 shadow-lg"
          >
            採用情報
            <svg className="w-3 h-3 xl:w-4 xl:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <button 
          className="lg:hidden mr-4 text-gray-700 relative z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-5 h-5 md:w-6 md:h-6 mr-8" />
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[1000] lg:hidden bg-itnav-primary h-screen overflow-hidden scrollbar-hide scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className="absolute inset-0 bg-black/20 z-[1001]" onClick={() => setIsOpen(false)} />

          {/* Menu panel */}
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute z-[1002] top-0 left-0 bottom-0 w-full max-w-sm bg-itnav-primary shadow-xl flex flex-col"
          >
            {/* Menu header */}
            <div className="flex items-center justify-between bg-white px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Link href="/" className="text-2xl font-bold text-gray-900">
                  イトナブ
                </Link>
                <span className="text-sm text-gray-600">採用情報サイト</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu items */}
            <nav className="px-6 py-8 overflow-y-auto z-[1003] bg-itnav-primary">
              <div className="flex flex-col gap-6">
                <Link
                  href="/"
                  className="flex items-center gap-3 text-white text-base hover:opacity-80 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-2 h-2 bg-[#24A07A] rounded-full"></div>
                  <span>TOP</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 text-white text-base hover:opacity-80 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-2 h-2 bg-[#24A07A]"></div>
                  <span>イトナブって？</span>
                </Link>
                <Link
                  href="/interview"
                  className="flex items-center gap-3 text-white text-base hover:opacity-80 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-2 h-2 bg-[#24A07A]"></div>
                  <span>メンバーにきいてみた</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 text-white text-base hover:opacity-80 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-2 h-2 bg-[#24A07A]"></div>
                  <span>イトナブのいいところ</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-3 text-white text-base hover:opacity-80 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-2 h-2 bg-[#24A07A]"></div>
                  <span>採用情報</span>
                </Link>

                {/* Entry section */}
                <div className="mt-8 w-[80%] mx-auto">
                  <Link href="/" className="flex items-center justify-between bg-white text-gray-900 px-6 py-4 rounded-none shadow-lg hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-itnav-primary"></div>
                      <span className="text-itnav-primary font-medium">ENTRY</span>
                    </div>
                    <svg className="w-5 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </nav>
          </motion.div>
        </div>
      )}
    </header>
  );
}

