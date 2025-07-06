import React, { useState } from "react";

function Featured() {
  // State for each card
  const [activeCard, setActiveCard] = useState(null);

  // Helper to handle tap/click
  const handleCardToggle = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="w-full py-10 sm:py-16 bg-black text-white">
      {/* Heading */}
      <div className="w-full px-4 sm:px-8 md:px-16 border-b border-zinc-700 pb-6 sm:pb-10">
        <h1 className='text-2xl sm:text-4xl md:text-5xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>

      {/* Cards */}
      <div className="px-2 sm:px-8 md:px-20 mt-6 sm:mt-10">
        <div className="cards w-full flex flex-col md:flex-row gap-6 sm:gap-10">

          {/* Card 1 */}
          <div
            className={`cardcontainer group relative rounded-xl w-full md:w-1/2 h-[40vh] sm:h-[60vh] md:h-[75vh] overflow-hidden cursor-pointer select-none`}
            onClick={() => handleCardToggle(0)}
            tabIndex={0}
            onBlur={() => setActiveCard(null)}
          >
            <h1 className={`absolute text-[#CDEA68] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-2xl sm:text-4xl md:text-6xl tracking-tight leading-none font-semibold font-['Founders Grotesk X-Condensed'] transition-all duration-500
              ${activeCard === 0 ? "opacity-100" : "opacity-0"} group-hover:opacity-100
            `}>
              {"FUDY".split("").map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className={`w-full h-full object-cover transform transition-transform duration-500
                  ${activeCard === 0 ? "scale-110" : ""} group-hover:scale-110
                `}
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png"
                alt="FUDY"
                draggable={false}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`cardcontainer group relative rounded-xl w-full md:w-1/2 h-[40vh] sm:h-[60vh] md:h-[75vh] overflow-hidden cursor-pointer select-none`}
            onClick={() => handleCardToggle(1)}
            tabIndex={0}
            onBlur={() => setActiveCard(null)}
          >
            <h1 className={`absolute text-[#CDEA68] right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-2xl sm:text-4xl md:text-6xl tracking-tight leading-none font-semibold font-['Founders Grotesk X-Condensed'] transition-all duration-500
              ${activeCard === 1 ? "opacity-100" : "opacity-0"} group-hover:opacity-100
            `}>
              {"WISE".split("").map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className={`w-full h-full object-cover transform transition-transform duration-500
                  ${activeCard === 1 ? "scale-110" : ""} group-hover:scale-110
                `}
                src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-663x551.jpg"
                alt="WISE"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
