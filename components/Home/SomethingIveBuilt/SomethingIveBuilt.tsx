import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-BBgray w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className=" font-bold tracking-wider text-gray-600 text-lg md:text-[30px] w-44 md:w-56 opacity-85">
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-BBmediumblue z-10  py-4 
                      absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://www.bundly.ai/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute  w-full h-full rounded bg-BBlightblue 
                              transition-opacity opacity-40 hover:opacity-0 hover:cursor-pointer duration-300 "
                ></div>
              </a>

              <Img
                src={"/bundly.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-BBpurple opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-BBlightblue opacity-95	 z-10"></div>
                <Img
                  src={"/bundly.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <a
                  href="https://www.bundly.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-800 font-bold text-sub hover:text-black hover:drop-shadow-md  transition duration-150 ease-in-out">
                    Bundly.ai{" "}
                  </span>
                </a>

                <span className="text-gray-600  text-xl ">
                  Revamp your business in days, not years
                </span>
              </div>

              <div className="w-full bg-BBpurple  py-6 md:p-6  z-10  bg-[rgba(136,96,208,0.60)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] -webkit-backdrop-blur-[4px] rounded-[10px] border-[1px_solid_rgba(255,255,255,0.18)] p-3">
                {/* class="rounded-[50px] bg-[#58B4E4] shadow-[20px_20px_60px_#4b99c2,-20px_-20px_60px_#65cfff]"
                 */}
                <p className="text-black text-left md:text-right  ">
                  Developed a comprehensive solution to rapidly transform businesses by identifying unique attributes, setting clear goals, mitigating risks, and leveraging automation.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AAsecondary md:text-AAsecondary
               text-subsub font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">OpenAI</span>
                <span className="pr-4 z-10">Amazon SageMaker </span>
              </ul>
              <div className="z-10 flex fle-row space-x-5  ">
                <a
                  href="https://www.bundly.ai/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-BBmediumblue z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://dollah.co/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-BBmediumblue 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/dollah.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-BBmediumblue opacity-85 z-10"></div>
                <Img
                  src={"/dollah.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <a
                  href="https://dollah.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-800 font-bold text-sub hover:text-black hover:drop-shadow-lg  transition duration-150 ease-in-out">
                    Dollah
                  </span>
                </a>

                <span className=" md:text-gray-600 text-AAsecondary  text-sub ">
                  Website to earn Crypto, Free Robux and Free V Bucks
                </span>
              </div>
              <div className="w-full rounded-md py-6 md:p-6  z-10">
                <p className=" w-full   py-6 md:p-6  z-10  bg-[rgba(136,96,208,0.60)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] -webkit-backdrop-blur-[4px] rounded-[10px] border-[1px_solid_rgba(255,255,255,0.18)] p-3 ">
                  Developed an online platform where users can engage in a
                  variety of activities such as completing tasks and playing
                  games to earn money.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AAsecondary
               text-subsub font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">Web3.js</span>
                <span className="pr-4 z-10">Tailwind</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://dollah.co/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  3*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-BBmediumblue z-10  py-4 
                      absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://www.starsofboston.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute  w-full h-full rounded bg-BBlightblue 
                              transition-opacity opacity-40 hover:opacity-0 hover:cursor-pointer duration-300 "
                ></div>
              </a>

              <Img
                src={"/stars.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-BBpurple opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-BBlightblue opacity-85	 z-10"></div>
                <Img
                  src={"/stars.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <a
                  href="https://www.starsofboston.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-800 font-bold text-sub hover:text-black hover:drop-shadow-md  transition duration-150 ease-in-out">
                    Starsofboston
                  </span>
                </a>

                <span className="text-gray-600  text-xl ">
                  Quick Search for Your Perfect Accommodation
                </span>
              </div>

              <div className="w-full bg-BBpurple  py-6 md:p-6  z-10  bg-[rgba(136,96,208,0.60)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] -webkit-backdrop-blur-[4px] rounded-[10px] border-[1px_solid_rgba(255,255,255,0.18)] p-3">
                <p className="text-black text-left md:text-right  ">
                  Developed and launched a comprehensive web-based solution for short-term apartment rentals in Greater Boston. The STARS platform caters to various customer needs, including vacationers, business travelers, travel nurses, and visiting families. The platform provides a seamless search experience, stylish accommodations, and exceptional guest services, aiming to enhance user satisfaction and convenience.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AAsecondary md:text-AAsecondary
               text-subsub font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">Nginx</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5  ">
                <a
                  href="https://www.starsofboston.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 4 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-BBmediumblue z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://havenly.com/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-BBmediumblue 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/havenly.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-BBmediumblue opacity-85 z-10"></div>
                <Img
                  src={"/havenly.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <a
                  href="https://havenly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-800 font-bold text-sub hover:text-black hover:drop-shadow-lg  transition duration-150 ease-in-out">
                    Havenly
                  </span>
                </a>

                <span className=" md:text-gray-600 text-AAsecondary  text-sub ">
                  Innovative interior design company that connects clients with talented designers to create personalized and stylish spaces.
                </span>
              </div>
              <div className="w-full rounded-md py-6 md:p-6  z-10">
                <p className=" w-full   py-6 md:p-6  z-10  bg-[rgba(136,96,208,0.60)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] -webkit-backdrop-blur-[4px] rounded-[10px] border-[1px_solid_rgba(255,255,255,0.18)] p-3 ">
                  Developed a sophisticated platform for Havenly. The platform facilitates seamless collaboration between clients and designers.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AAsecondary
               text-subsub font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Nest</span>
                <span className="pr-4 z-10">Angular</span>
                <span className="pr-4 z-10">GraphQL</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://havenly.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project  5*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-BBmediumblue z-10  py-4 
                      absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://www.radai.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute  w-full h-full rounded bg-BBlightblue 
                              transition-opacity opacity-40 hover:opacity-0 hover:cursor-pointer duration-300 "
                ></div>
              </a>

              <Img
                src={"/Rad.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-BBpurple opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-BBlightblue opacity-95	 z-10"></div>
                <Img
                  src={"/Rad.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <a
                  href="https://www.radai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-800 font-bold text-sub hover:text-black hover:drop-shadow-md  transition duration-150 ease-in-out">
                    Rad AI
                  </span>
                </a>

                <span className="text-gray-600  text-xl ">
                  Revolutionize Workflows with Powerful Radiology AI
                </span>
              </div>

              <div className="w-full bg-BBpurple  py-6 md:p-6  z-10  bg-[rgba(136,96,208,0.60)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] -webkit-backdrop-blur-[4px] rounded-[10px] border-[1px_solid_rgba(255,255,255,0.18)] p-3">
                <p className="text-black text-left md:text-right  ">
                  Led the development of a state-of-the-art AI solution aimed at transforming radiology practices. This project focused on automating radiology processes to save time, reduce burnout among radiologists, and enhance the quality of patient care. The solution integrated advanced AI techniques to streamline reporting, automate impression generation, and manage follow-ups efficiently.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AAsecondary md:text-AAsecondary
               text-subsub font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Pytorch</span>
                <span className="pr-4 z-10">Power BI</span>
                <span className="pr-4 z-10">AWS SageMaker</span>
                <span className="pr-4 z-10">Typescript</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5  ">
                <a
                  href="https://www.radai.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 6 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-BBmediumblue z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://trysmartbite.com/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-BBmediumblue 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/Smartbite.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-BBmediumblue opacity-95 z-10"></div>
                <Img
                  src={"/Smartbite.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <a
                  href="https://trysmartbite.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-800 font-bold text-sub hover:text-black hover:drop-shadow-lg  transition duration-150 ease-in-out">
                    SmartBite
                  </span>
                </a>

                <span className=" md:text-gray-600 text-AAsecondary  text-sub ">
                  The trusted marketplace to order business catering from 1,000+ restaurants Southeast Asia.
                </span>
              </div>
              <div className="w-full rounded-md   z-10">
                <p className=" w-full   py-6 md:p-6  z-10  bg-[rgba(136,96,208,0.60)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] -webkit-backdrop-blur-[4px] rounded-[10px] border-[1px_solid_rgba(255,255,255,0.18)] p-3 ">
                  Developed and enhanced SmartBite, a leading marketplace for business catering in Southeast Asia. The platform connects companies with a vast network of restaurants and caterers, facilitating seamless ordering and service for professional settings. SmartBite has become a top choice for businesses seeking reliable and high-quality catering solutions.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AAsecondary
               text-subsub font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">.Net</span>
                <span className="pr-4 z-10">Angular</span>
                <span className="pr-4 z-10">AWS</span>
                <span className="pr-4 z-10">C#</span>
                <span className="pr-4 z-10">Hubspot</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://trysmartbite.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
