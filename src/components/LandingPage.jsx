import { easeIn, motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed='.2' className="w-full min-h-fit  bg-zinc-900 text-white">
      {/* Text structure */}
      <div className="textstructure mt-16 sm:mt-24 px-4 sm:px-8 md:px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => (
          <div className="masker overflow-hidden" key={index}>
            <div className="w-fit flex items-center gap-2 sm:gap-4">
              {/* Optional green block on second line */}
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8vw" }} // Changed from 18vw to 8vw for mobile
                  transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
                  className="rounded-md w-[8vw] sm:w-[8vw] mt-2 sm:mt-3 h-[10vw] sm:h-[5vw] bg-green-500"
                ></motion.div>
              )}
              <h1 className="uppercase text-[10vw] sm:text-[7vw] leading-[9vw] sm:leading-[6vw] font-medium">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Footer section */}
      <div className="border-t border-zinc-800 mt-12 sm:mt-20 flex flex-col md:flex-row justify-between items-center py-6 px-4 sm:px-10 md:px-20 gap-4">
        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 text-center md:text-left">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p key={index} className="text-xs sm:text-sm md:text-md font-light">
              {item}
            </p>
          ))}
        </div>

        <div className="start flex items-center gap-2 sm:gap-4">
          <div className="px-4 sm:px-5 py-2 border border-zinc-400 text-xs sm:text-sm uppercase rounded-full cursor-pointer hover:bg-zinc-800 transition">
            Start the project
          </div>
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-zinc-500 flex justify-center items-center">
            <span className="rotate-[325deg]">
              <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
