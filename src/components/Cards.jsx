import React from "react";

function Cards() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col md:flex-row px-4 sm:px-10 md:px-32 py-10 items-center gap-5">
      {/* First Card */}
      <div className="cardcontainer h-[28vh] sm:h-[40vh] md:h-[50vh] w-full md:w-1/2 mb-5 md:mb-0">
        <div className="card relative flex items-center justify-center w-full rounded-xl h-full bg-[#004D43]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
            className="max-h-[60%] max-w-[70%] object-contain"
          />
          <button className="absolute text-[12px] sm:text-[13px] text-[#C0E066] font-['Neue_Montreal'] px-3 py-1 border-1 rounded-full left-4 sm:left-6 bottom-4 sm:bottom-6">
            &copy;2019-2022
          </button>
        </div>
      </div>
      {/* Second Card Group */}
      <div className="cardcontainer h-[56vh] sm:h-[40vh] md:h-[50vh] w-full md:w-1/2 flex flex-col sm:flex-row gap-5">
        <div className="card relative flex items-center justify-center rounded-xl w-full sm:w-1/2 h-1/2 sm:h-full bg-[#212121] mb-5 sm:mb-0">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
            className="max-h-[60%] max-w-[70%] object-contain"
          />
          <button className="absolute text-[11px] sm:text-[12px] text-zinc-100 font-['Neue_Montreal'] px-3 py-1 border-1 rounded-full left-4 sm:left-6 bottom-4 sm:bottom-6">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-full sm:w-1/2 h-1/2 sm:h-full bg-[#212121]">
          <img
            className="max-h-[60%] max-w-[70%] object-contain"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute text-[11px] sm:text-[12px] text-zinc-100 font-['Neue_Montreal'] px-3 py-1 border-1 rounded-full left-4 sm:left-6 bottom-4 sm:bottom-6">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
