'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Playfair_Display, JetBrains_Mono } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], style: ['normal', 'italic'] })
const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

export default function DualityGateway() {
  const [hovered, setHovered] = useState<'casual' | 'pro' | null>(null)

  return (
    <main className="relative flex flex-col md:flex-row min-h-[100dvh] w-full overflow-hidden bg-[#0A0A0A] font-sans">
      
      {/* -----------------------------
          CASUAL / POLYMATH SIDE
          ----------------------------- */}
      <motion.a
        href="https://who-am-i-oricin.vercel.app"
        onMouseEnter={() => setHovered('casual')}
        onMouseLeave={() => setHovered(null)}
        layout
        initial={{ flex: 1 }}
        animate={{ flex: hovered === 'casual' ? 1.4 : hovered === 'pro' ? 0.6 : 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative flex flex-col justify-center overflow-hidden border-b md:border-b-0 md:border-r border-[#1a1a1a] cursor-pointer group"
        style={{ backgroundColor: '#EAE6DF', color: '#1A1A1A' }}
      >
        {/* Noise overlay */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none z-10" 
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} 
        />

        {/* Floating Shapes */}
        <motion.div 
          animate={{ 
            rotate: hovered === 'casual' ? -10 : 5, 
            x: hovered === 'casual' ? -10 : 0, 
            y: hovered === 'casual' ? 10 : 0,
            scale: hovered === 'casual' ? 1.05 : 1
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute w-[220px] h-[220px] rounded-full z-[5] left-[35%] top-[5%] bg-cover bg-center mix-blend-multiply opacity-80"
          style={{ backgroundImage: 'url(/vitruvian.png)', filter: 'contrast(1.2)' }}
        />

        <motion.div 
          animate={{ 
            rotate: hovered === 'casual' ? 25 : 8, 
            x: hovered === 'casual' ? 20 : 0, 
            y: hovered === 'casual' ? -20 : 0,
            scale: hovered === 'casual' ? 1.1 : 1
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute w-[250px] h-[350px] z-[15] right-[5%] top-[10%] bg-cover bg-center mix-blend-multiply"
          style={{ backgroundImage: 'url(/hero.png)', filter: 'contrast(1.1) brightness(1.05)' }}
        />

        <motion.div 
          animate={{ 
            rotate: hovered === 'casual' ? -15 : -12, 
            x: hovered === 'casual' ? -20 : 0, 
            y: hovered === 'casual' ? 20 : 0,
            scale: hovered === 'casual' ? 1.1 : 1
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute w-[300px] h-[200px] z-[12] left-[5%] bottom-[15%] bg-cover bg-center border-[6px] border-[#f9fafb] shadow-2xl"
          style={{ backgroundImage: 'url(/rocket.png)' }}
        />

        <motion.div 
          animate={{ 
            rotate: hovered === 'casual' ? 180 : 45, 
            scale: hovered === 'casual' ? 1.2 : 1
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`absolute w-[120px] h-[120px] rounded-full z-[10] right-[15%] bottom-[5%] border-2 border-dashed border-[#1A1A1A] flex items-center justify-center font-bold text-sm ${jetbrains.className}`}
        >
          <div style={{ transform: 'rotate(-45deg)' }}>f(x) = E=mc²</div>
        </motion.div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center p-10 md:p-16 z-20 pointer-events-none">
          <motion.div
             animate={{
                rotate: hovered === 'casual' ? 0 : -4,
                scale: hovered === 'casual' ? 1.05 : 1
             }}
             transition={{ type: "spring", stiffness: 100, damping: 20 }}
             style={{ transformOrigin: 'left' }}
          >
            <div className={`text-6xl md:text-[8rem] font-black leading-[0.8] tracking-tighter italic ${playfair.className}`}>
              The<br/>Polymath.
            </div>
            <div className={`text-xl md:text-2xl mt-8 max-w-sm ${playfair.className}`}>
              Unstructured creativity.
            </div>
          </motion.div>
        </div>
      </motion.a>


      {/* -----------------------------
          PROFESSIONAL / ENGINEER SIDE
          ----------------------------- */}
      <motion.a
        href="https://what-i-do-three.vercel.app"
        onMouseEnter={() => setHovered('pro')}
        onMouseLeave={() => setHovered(null)}
        layout
        initial={{ flex: 1 }}
        animate={{ flex: hovered === 'pro' ? 1.4 : hovered === 'casual' ? 0.6 : 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`relative flex flex-col overflow-hidden bg-[#0A0A0A] text-[#EDEDED] cursor-pointer group ${jetbrains.className}`}
      >
        {/* Grid Background Overlay */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ 
            backgroundSize: '40px 40px', 
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)' 
          }} 
        />

        {/* Crosshairs */}
        <motion.div animate={{ x: hovered === 'pro' ? 10 : 0, y: hovered === 'pro' ? -10 : 0 }} className="absolute w-[20px] h-[20px] border border-[#EDEDED] z-30 top-[40px] right-[40px] border-b-0 border-l-0 hidden md:block" />
        <motion.div animate={{ x: hovered === 'pro' ? -10 : 0, y: hovered === 'pro' ? 10 : 0 }} className="absolute w-[20px] h-[20px] border border-[#EDEDED] z-30 bottom-[40px] left-[40px] border-t-0 border-r-0 hidden md:block" />

        {/* CSS Grid Content */}
        <div className="absolute inset-0 z-20 grid grid-cols-4 grid-rows-4 gap-[1px] bg-white/10 p-[1px]">
          
          <div className="bg-[#0A0A0A] p-6 flex flex-col justify-center col-span-4 md:col-span-3 row-span-2 group-hover:bg-[#EDEDED] group-hover:text-[#0A0A0A] transition-colors duration-500">
            <div className="text-5xl md:text-6xl font-bold leading-none tracking-tighter">
              SYS.ENG<motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "stepEnd" }} className="inline-block w-4 h-10 md:w-6 md:h-12 bg-current ml-3 align-middle" />
            </div>
            <div className="text-[10px] md:text-xs uppercase mt-6 font-bold text-zinc-500 group-hover:text-zinc-800 transition-colors">
              STRICT ARCHITECTURE // EMBEDDED // QUANTS
            </div>
          </div>

          <div className="bg-[#0A0A0A] p-4 overflow-hidden row-span-2 col-span-4 md:col-span-1 text-[10px] leading-tight hidden md:block">
            <motion.div 
               animate={hovered === 'pro' ? { y: "0%" } : { y: ["0%", "-50%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="text-[#67e8f9] whitespace-pre opacity-70 group-hover:text-[#0A0A0A] group-hover:opacity-100 transition-colors h-fit"
            >
{`0x00 0xFF
0x04 0x1B
0x08 0x8C
0x0C 0x22
0x10 0x09
0x14 0x4A
0x18 0xEF
0x1C 0x33
0x00 0xFF
0x04 0x1B
0x08 0x8C
0x0C 0x22
0x10 0x09
0x14 0x4A
0x18 0xEF
0x1C 0x33`}
            </motion.div>
          </div>

          <div className="bg-[#0A0A0A] p-4 md:p-6 flex flex-col justify-between group-hover:bg-[#EDEDED] group-hover:text-[#0A0A0A] transition-colors duration-500">
            <div className="text-xl md:text-3xl font-bold">99.9</div>
            <div className="text-[10px] md:text-xs uppercase text-zinc-500 group-hover:text-zinc-800 transition-colors">UPTIME</div>
          </div>

          <div className="bg-[#0A0A0A] p-4 md:p-6 flex flex-col justify-between col-span-2 group-hover:bg-[#EDEDED] group-hover:text-[#0A0A0A] transition-colors duration-500">
            <div className="text-xl md:text-3xl font-bold">QUANT.</div>
            <div className="text-[10px] md:text-xs uppercase text-zinc-500 group-hover:text-zinc-800 transition-colors">DERIVATIVES</div>
          </div>

          <div className="bg-[#0A0A0A] p-4 md:p-6 flex flex-col justify-between group-hover:bg-[#EDEDED] group-hover:text-[#0A0A0A] transition-colors duration-500">
            <div className="text-xl md:text-3xl font-bold">PYTHON</div>
            <div className="text-[10px] md:text-xs uppercase text-zinc-500 group-hover:text-zinc-800 transition-colors">CORE</div>
          </div>

          <div className="bg-[#0A0A0A] flex flex-col col-span-4 relative overflow-hidden p-0 justify-center group-hover:bg-[#EDEDED] group-hover:text-[#0A0A0A] transition-colors duration-500">
            <div className="absolute top-4 left-6 z-30 text-[10px] md:text-xs uppercase font-bold text-zinc-500 group-hover:text-zinc-800 transition-colors">SIGNAL_PROCESS()</div>
            <svg viewBox="0 0 800 100" preserveAspectRatio="none" className="w-[200%] h-full">
              <motion.path 
                animate={{ x: [0, -400] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                d="M0,50 Q50,10 100,50 T200,50 T300,50 T400,50 Q450,10 500,50 T600,50 T700,50 T800,50" 
                className="stroke-[#67e8f9] group-hover:stroke-[#0A0A0A] stroke-[2px] fill-none transition-colors duration-500"
              />
            </svg>
          </div>

        </div>
      </motion.a>

    </main>
  )
}
