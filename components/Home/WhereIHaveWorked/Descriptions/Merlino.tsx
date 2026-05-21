import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Merlino() {
  const tasks = [
    {
      text: "Utilized Python for statistical analysis, resulting in a commendable 31% increase in the effectiveness of marketing campaigns.",
      keywords: ["Python", "31%", "effectiveness"],
    },
    {
      text: "Automated repetitive tasks and workflows by developing custom scripts and utilities in Python, saving over 100 hours in manual work annually.",
      keywords: ["Automated", "saving over 100 hours"],
    },
    {
      text: "Implemented nine interactive Power BI dashboards using Excel datasets and effectively conveyed data findings to stakeholders through visually appealing PowerPoint presentations.",
      keywords: ["Power BI", "Excel", " PowerPoint presentations"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-600 sm:text-lg text-sm tracking-wide font-mono">
            Marketing Data Analyst{" "}
          </span>
          {/* Date */}
          <span className="font-mono text-sm text-gray-800">
            Jun 2016 - Sep 2018
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
