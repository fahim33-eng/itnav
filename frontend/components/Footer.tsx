"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex-1">
            <div className="mb-4">
              <h3 className="mb-1 text-2xl font-bold">イトナ</h3>
              <p className="text-sm text-gray-600">採用情報サイト</p>
            </div>
            <div className="space-y-1 text-xs text-gray-500">
              <p>一般社団法人イトナブ石巻</p>
              <p>株式会社イトナブ</p>
              <p>〒986-0822 宮城県石巻市中央2丁目10-2 いしのまきNPOセンター内</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm md:gap-8">
            <Link href="#" className="text-gray-700 transition-colors hover:text-[#2ABC8F]">TOP</Link>
            <Link href="#" className="text-gray-700 transition-colors hover:text-[#2ABC8F]">イトナって</Link>
            <Link href="#" className="text-gray-700 transition-colors hover:text-[#2ABC8F]">メンバーさいてきたん</Link>
            <Link href="#" className="text-gray-700 transition-colors hover:text-[#2ABC8F]">イトナのいいところ</Link>
            <Link href="#" className="text-gray-700 transition-colors hover:text-[#2ABC8F]">採用情報</Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <p className="text-xs text-gray-500">© イトナ All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}