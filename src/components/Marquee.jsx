import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='data-scroll data-scroll-section data-scroll-speed="-.2" w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div  className="text border-b-2 border-t-2 border-zinc-300 flex     whitespace-nowrap overflow-hidden ">
           <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='pr-7 text-[16vw] leading-none font-["Founders Grotesk X-Condensed"] font-semibold uppercase' >We Are Ochi</motion.h1>
           <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[16vw] leading-none font-["Founders Grotesk X-Condensed"] font-semibold uppercase' >We Are Ochi</motion.h1>
         
        </div>
      
    </div>
  )
}

export default Marquee
