"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function EntrySection() {
  return (
    <section className="relative">
      <div className="bg-white py-3 md:py-4 text-center relative z-30">
        <p className="text-xs md:text-sm text-gray-600">採用情報</p>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold tracking-[0.2em] text-[#2ABC8F] relative -mb-6 md:-mb-8 lg:-mb-12">ENTRY</h2>
      </div>

      <div className="relative min-h-[300px] md:min-h-[380px] lg:min-h-[420px] bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image src="/office_group_photo_3.png" alt="Team photo" fill className="object-cover opacity-40" sizes="100vw" />
        </div>

        <div className="relative z-10 flex min-h-[300px] md:min-h-[380px] lg:min-h-[420px] flex-col items-center justify-center px-4 md:px-6 lg:px-12 py-10 md:py-14">

          <div className="mb-8 md:mb-12">
            <p className="px-2 md:px-3 text-center py-1 md:py-2 text-xl md:text-2xl lg:text-3xl font-light text-white">ITで生きる、</p>
            <div className="mt-2 md:mt-3">
              <p className="px-2 md:px-3 py-1 md:py-2 text-xl md:text-2xl lg:text-3xl font-light text-white">はじまりの場をつくる。</p>
            </div>
          </div>

          <div className="absolute bottom-4 md:bottom-6 right-4 md:right-8 hidden md:block">
            <div className="h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-full bg-[#8B7355] opacity-80" />
          </div>
        </div>
      </div>

      <div className="relative z-30 bg-[#F1FAF7] py-8 md:py-12 -mt-12 md:-mt-16">
        <div className="mx-auto w-full max-w-md px-4 md:px-6">
          <div className="flex w-full flex-col gap-3 md:gap-4">
            <button className="group flex items-center justify-between bg-[#2ABC8F] px-4 md:px-6 lg:px-8 py-3 md:py-4 text-white transition-all hover:bg-[#24a67f] rounded-sm">
              <span className="text-sm md:text-base lg:text-lg font-medium">エンジニアにENTRY</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </button>
            <button className="group flex items-center justify-between bg-[#2ABC8F] px-4 md:px-6 lg:px-8 py-3 md:py-4 text-white transition-all hover:bg-[#24a67f] rounded-sm">
              <span className="text-sm md:text-base lg:text-lg font-medium">セールスにENTRY</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </button>
            <button className="group flex items-center justify-between bg-[#2ABC8F] px-4 md:px-6 lg:px-8 py-3 md:py-4 text-white transition-all hover:bg-[#24a67f] rounded-sm">
              <span className="text-sm md:text-base lg:text-lg font-medium">バックオフィスにENTRY</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


