import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col  w-full h-96 items-center bg-BBdarkblue">
    
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <div className="flex flex-row space-x-2 items-center">
          <span className=" sm:text-[26px]  text-gray-800 text-[20px] text-bold mt-1 ">
            What&apos;s Next?
          </span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-300 text-xl sm:text-3xl font-bold tracking-wider opacity-85 ">
        Get In Touch
      </span>
      <p className="flex tracking-wider text-gray-300 text-sm  text-center px-4  py-6	lg:text-[18px] sm:px-18 md:px-3 lg:px-10 md:w-[800px] lg:w-[900px]  ">
      I am bold enough to make loud claims about the solutions I provide, the technologies I leverage, as we take full responsibility for our failures. Although I have experience and knowledge across multiple technologies and application areas in the software industry, I will never stop learning and self-studying to provide better and more effective value.
      </p>
      <div className="sm:pt-1 md:pt-2">
        <a
          href="mailto:terry951014g@gmail.com"
          target={"_blank"}
          rel="noreferrer"
        >

          <button className=" bg-[rgba(255,255,255,0.25)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px] rounded-[10px] border border-[rgba(255,255,255,0.18)] xs:h-[60px] sm:h-[80px] w-[180px]  font-bold text-gray-800 text-xl ">
            Say Hello!
          </button>
        </a>
      </div>
    </div>
  );
}
