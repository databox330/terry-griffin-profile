import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Esplanade() {
  const tasks = [
    {
      text: "Led the development of a healthcare information system as the full-stack developer.",
      keywords: ["development", "full-stack developer"],
    },
    {
      text: "Achieved a 15% increase in query efficiency by optimizing GraphQL schemas and utilizing batched requests.",
      keywords: ["15%", "query efficiency", "GraphQL", "batched requests"],
    },
    {
      text: "Engineered a secure and scalable RESTful API for the healthcare information system using Node.js, ensuring efficient communication between the front-end and back-end components.",
      keywords: ["RESTful API", "Node.js", "front-end", "back-end"],
    },
    {
      text: "Executed interactive data visualizations using React components, enhancing the representation of healthcare data and facilitating a 50% better understanding for end-users.",
      keywords: ["data visualizations", "React", "representation"],
    },
    {
      text: "Integrated Redux for complex state management scenarios, contributing to a 40% decrease in application bugs related to state inconsistencies.",
      keywords: ["Redux", "state management", "40% decrease"],
    },
    {
      text: "Boosted UI responsiveness by utilizing useQuery with cached queries for efficient patient data fetching, complemented by useMutation to streamline data mutations and ensure a significant improvement in overall application performance.",
      keywords: ["useQuery", "useMutation", "performance"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          <span className="text-gray-600 sm:text-lg text-sm tracking-wide font-mono">
            Full Stack Engineer{" "}
          </span>
          {/* Date */}
          <span className="font-mono text-sm text-gray-800">
            {" "}
            Apr 2022 - Nov 2023
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-800 text-subsub"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
