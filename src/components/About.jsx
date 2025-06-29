import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl text-black">
      <h1 className='font-["Neue_Montreal"]  text-[8vh] font- leading-[8vh]'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full flex gap-5  border-t-[1px] pt-10 border-[#a1b562] mt-17">
        <div className='w-1/2 font-["Neue_Montreal"]'>
          <h1 className="text-5xl "> Our approach:</h1>
          <button className="mt-5 flex items-center px-10 py-5 bg-zinc-900 rounded-full text-white uppercase ">
            Read More
            <div className="w-2 h-2 bg-zinc-100 ml-5 rounded-full"></div>
          </button>
        </div>
        <div className="relative w-1/2 h-[68vh] rounded-3xl  bg-black"> <img className="rounded-2xl relative bg-cover " src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
      </div>
    </div>
  );
}

export default About;
