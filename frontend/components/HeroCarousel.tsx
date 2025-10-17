"use client"

import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "/hero_group_photo_1.png",
    title: "ITNAV MISSION",
    subtitle: "ITで生きる、はじまりの場をつくる",
    showScrollDown: true
  },
  {
    id: 2,
    image: "/hero_group_photo_2.png",
    title: "ITNAV MISSION",
    subtitle: "ITで生きる、はじまりの場をつくる",
    showScrollDown: false
  },
  {
    id: 3,
    image: "/hero_group_photo_3.png",
    title: "ITNAV MISSION",
    subtitle: "ITで生きる、はじまりの場をつくる",
    showScrollDown: false
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
      <div className="relative w-full md:w-[90%] md:ml-auto h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 90vw"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="absolute inset-0 flex items-center z-20">
              <div className="text-left text-white px-4 md:px-6 lg:px-12 max-w-3xl -translate-x-0 md:-translate-x-6 lg:-translate-x-16">
                <motion.p 
                  className="inline-block -ml-4 md:-ml-8 lg:-ml-16 bg-white text-black px-2 md:px-3 py-1 text-[10px] md:text-xs tracking-widest mb-3 md:mb-4 font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 20 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {slide.title}
                </motion.p>

                <div className="space-y-2 md:space-y-3">
                  <motion.div
                    className="inline-block -ml-4 md:-ml-8 lg:-ml-16 bg-white text-black px-3 md:px-4 py-2 md:py-3 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 30 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    ITで生きる、
                  </motion.div>
                  <br />
                  <motion.div
                    className="inline-block -ml-4 md:-ml-8 lg:-ml-16 bg-white text-black px-3 md:px-4 py-2 md:py-3 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 40 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    はじまりの場をつくる。
                  </motion.div>
                </div>
              </div>
            </div>

            {slide.showScrollDown && (
              <motion.div 
                className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <button
                  onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                  className="flex flex-col items-center text-white hover:text-gray-200 transition-colors group"
                >
                  <span className="text-xs tracking-wider mb-2">SCROLL DOWN</span>
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center group-hover:border-gray-200"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-30 flex flex-col gap-1.5 md:gap-2">
        <div className="flex flex-col gap-1.5 md:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] md:text-xs font-medium transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-itnav-primary text-white' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-0" onClick={nextSlide} />
    </section>
  );
}
