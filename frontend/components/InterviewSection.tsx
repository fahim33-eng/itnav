"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function InterviewSection() {
  const interviews = [
    {
      name: "れんれん",
      nameEn: "RenRen",
      title: "「影響を受けるかは受け手次第」",
      date: "2020年入社",
      image: "/renren.png",
    },
    {
      name: "ガク",
      nameEn: "gaku",
      title: "誰もが自由に意見や言いたいことを言える職場",
      date: "2020年入社",
      image: "/gaku.png",
    },
    {
      name: "久保 昇也",
      nameEn: "Kubo Shoya",
      title: "1人1人の未来と会社の未来を照らし合わせる",
      date: "2018年入社",
      image: "/shoya_kubo.png",
    },
  ]

  return (
    <section className="relative pb-16 md:pb-24 lg:pb-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-4 py-8 md:py-12 lg:py-16 max-w-[80%]">
        <div className="mb-2 -ml-8 md:-ml-16 lg:-ml-24 xl:-ml-32">
          <span className="text-xs md:text-sm text-gray-600">メンバーにきいてみた</span>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 -ml-8 md:-ml-16 lg:-ml-24 xl:-ml-32">
          <span className="text-[#2ABC8F]">I</span>NTERVIEW
        </h2>
        <p className="text-xs md:text-sm text-gray-600 max-w-2xl leading-relaxed">
          メンバーにイトナブにいる上での思いなどをインタビュー。
          <br />
          卒業生にも経験をきいてみました。
        </p>
      </div>

      <div className="relative">
        <div className="w-full bg-[#2ABC8F] min-h-[180px] md:min-h-[250px] lg:min-h-[350px] relative">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/classroom_group_photo_1.png"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:absolute lg:right-0 lg:top-0 lg:w-1/2 px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-0 -mt-10 md:-mt-12 lg:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {interviews.map((interview, index) => (
              <div key={index} className="bg-white overflow-hidden">
                <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={interview.image}
                    alt={interview.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="p-3 md:p-4 h-48 md:h-56 flex flex-col space-y-8">
                  <div>
                    <div className="text-xs md:text-sm text-[#2ABC8F] font-medium mb-1">
                      {interview.name} {interview.nameEn}
                    </div>
                    <h3 className="font-bold text-sm md:text-base mb-2 leading-tight text-gray-900">{interview.title}</h3>
                    <div className="text-xs text-gray-500">{interview.date}</div>
                  </div>
                  <button className="w-full bg-[#2ABC8F] hover:bg-[#24a67f] text-black py-2 md:py-3 px-3 md:px-4 rounded-full flex items-center justify-center transition-colors text-xs md:text-sm font-medium">
                    さらに詳しく
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}