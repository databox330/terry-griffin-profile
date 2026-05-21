import React, { forwardRef } from 'react';
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    ["Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Ether.js", "Solidity"],
    ["Node.js", "TypeScript", "Framer Motion", "react-moralis", "web3.js"],
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-white"
    >
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-9/12">
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <span className="flex-none text-gray-800 opacity-85 font-bold tracking-wider text-[30px]  sm-text-[20px] pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 gap-36">
          <div className="w-full md:w-8/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header text-sub">
              <span className="text-black font-bold ">
                Love tech, Love people more.
              </span>
              <br></br>
              <span className="text-gray-400 text-lg ">
                Whether I&apos;m leading the technological
                direction at <span className=" text-gray-800">AkselSoft</span>{" "}
                or optimizing healthcare systems at{" "}
                <span className=" text-black"> Esplanade</span> Esplanade, my
                approach is always about blending professionalism with a
                friendly touch. My journey has taken me from the vibrant tech
                hubs of Boston and Montreal to the dynamic startup scene in
                Australia and Malaysia, where I&apos;ve not only developed{" "}
                cutting-edge applications but also forged lasting customer partnerships.
              </span>
            </div>
            <div className="font-Header text-sub">
              <span className="text-black font-bold ">
                Short Look at Professional Skills
              </span>
              <br></br>
              <span className="text-gray-400 text-lg ">
                <span className="text-gray-500 font-bold">
                  {" "}
                  Languages:
                </span>{" "}
                Javascript, TypeScript, C#, Python, GraphQL, Rust, HTML, CSS
                <br></br>
                <span className="text-gray-500 font-bold">
                  Frameworks:
                </span>{" "}
                Node.js, Express.js, Nest.js, Next.js, Redux, React Native, .NET, Django, Tailwind CSS, Bootstrap <br></br>
                <span className="text-gray-500 font-bold">
                  Libraries/APIs:
                </span>{" "}
                React, Angular, Vue, RestAPI, FastAPI, Scikit-Learn, Pandas, D3.js, Web3.js, jQuery <br></br>
                <span className="text-gray-500 font-bold">
                  Platforms:
                </span>{" "}
                AWS(S3, DynamoDB, Lambda, ECS, SNS), Google Cloud (BigQuery, IAM, AutoML, Vertex AI), Docker, Firebase, Supabase <br></br>
                <span className="text-gray-500 font-bold">
                  Storage:
                </span>{" "}
                PostgreSQL, MySQL, MongoDB, Neo4j, SQLite, JSON, XML <br></br>
                <span className="text-gray-500 font-bold">
                  Version & PM Control:
                </span>{" "}
                Git, GitHub, GitLab, Jira, ClickUp <br></br>
                <span className="text-gray-500 font-bold">
                  Others:
                </span>{" "}
                Project Management, Leadership, Partnership, Product Development, Web Development, Full-stack Development, Front-end Development, Back-end Development, User Interface (UI), DEX/DAO/Dapp, Entertainment, Video & Image Processing, MVP, Kanban, GPT, Kubernetes, Microservices, Financial Analysis, Billing Systems, Card Payments, A/B Testing, Web Analysis, IoT, Prompt Engineering, GenAI <br></br>
              </span>
            </div>
          </div>
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"./Me_.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"./Me_.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
