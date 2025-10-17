"use client"

export default function SideText() {
  return (
    <>
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <div className="relative">
          <div className="-rotate-90 origin-center">
            <div className="flex flex-col items-center gap-2 px-4">
              <span className="text-[0.6rem] text-gray-400 tracking-[0.1em] font-light whitespace-nowrap">
                ITNAV RECRUIT SITE
              </span>
              <div className="w-24 h-[2px] bg-itnav-primary"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <div className="relative">
          <div className="rotate-90 origin-center">
            <div className="flex flex-col items-center gap-2 px-4">
              <span className="text-[0.6rem] text-gray-400 tracking-[0.1em] font-light whitespace-nowrap">
                ITNAV RECRUIT SITE
              </span>
              <div className="w-24 h-[2px] bg-itnav-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


