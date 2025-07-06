import React from "react";

function About() {
  return (
    <div className="w-full px-5 sm:px-10 md:px-20 py-10 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl text-black">
      {/* Main Heading */}
      <h1 className='font-["Neue_Montreal"] text-[6vw] sm:text-[4vw] md:text-[3vw] leading-snug font-medium'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row gap-8 border-t pt-10 border-[#a1b562] mt-10">
        {/* Left Content */}
        <div className='w-full md:w-1/2 font-["Neue_Montreal"]'>
          <h1 className="text-3xl sm:text-4xl font-semibold">Our approach:</h1>
          <button className="mt-5 flex items-center px-8 py-4 bg-zinc-900 rounded-full text-white uppercase text-sm">
            Read More
            <div className="w-2 h-2 bg-zinc-100 ml-4 rounded-full"></div>
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-1/2 h-[40vh] md:h-[68vh] rounded-3xl bg-black overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="About"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
