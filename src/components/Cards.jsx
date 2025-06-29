import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen  bg bg-zinc-00 flex px-32 items-center gap-5">
      <div className="cardcontainer  h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center w-full rounded-xl h-full bg-[#004D43] ">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute text-[13px]  text-[#C0E066] font-['Neue_Montreal'] px-3 py-1 border-1 rounded-full left-6 bottom-6">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">
        <div className="card relative  flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121] ">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute text-[12px] text-zinc-100 font-['Neue_Montreal'] px-3 py-1 border-1 rounded-full left-6 bottom-6">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative  flex items-center justify-center  rounded-xl w-1/2 h-full bg-[#212121]  ">
          <img
            className="w-22 h-22"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute text-[12px] text-zinc-100 font-['Neue_Montreal'] px-3 py-1 border-1 rounded-full left-6 bottom-6">
            {" "}
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
