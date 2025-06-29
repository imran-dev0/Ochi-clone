import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-16 border-b border-zinc-700 pb-20">
        <h1 className='text-5xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex flex-col md:flex-row gap-10 mt-10">

          {/* First Card */}
          <div className="cardcontainer group relative rounded-xl w-full md:w-1/2 h-[75vh] overflow-hidden cursor-pointer">
            {/* Animated Text */}
            <h1 className="absolute text-[#CDEA68] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-6xl tracking-tight leading-none font-semibold font-['Founders Grotesk X-Condensed'] opacity-0 group-hover:opacity-100 transition-all duration-500">
              {"FUDY".split('').map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </h1>

            {/* Image */}
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png"
                alt="FUDY"
              />
            </div>
          </div>

          {/* Second Card */}
          <div className="cardcontainer group relative rounded-xl w-full md:w-1/2 h-[75vh] overflow-hidden cursor-pointer">
            {/* Animated Text */}
            <h1 className="absolute text-[#CDEA68] right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-6xl tracking-tight leading-none font-semibold font-['Founders Grotesk X-Condensed'] opacity-0 group-hover:opacity-100 transition-all duration-500">
              {"WISE".split('').map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </h1>

            {/* Image */}
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-663x551.jpg"
                alt="WISE"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Featured;
