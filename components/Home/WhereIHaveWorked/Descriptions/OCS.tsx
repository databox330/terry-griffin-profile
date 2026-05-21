import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function OCS() {
  const tasks = [
    {
      text: "Developed an entertainment SaaS product, integrating React and Angular for dynamic front-end experiences and Django for robust server-side functionality.",
      keywords: ["SaaS", "React", "Angular", "Django"],
    },
    {
      text: "Utilized Pandas for data manipulation and analysis, ensuring efficient handling of large datasets within the platform.",
      keywords: ["Pandas", "data manipulation", "analysis"],
    },
    {
      text: "Worked on tasks such as frame extraction, object detection, scene segmentation, and video enhancement to deliver a rich and interactive user experience.",
      keywords: ["frame extraction", "object detection", "scene segmentation", "video enhancement"],
    },
    {
      text: "Implemented MLOps practices on Google Vertex AI, setting up automated pipelines for model training, evaluation, and deployment, ensuring efficient and reproducible workflows.",
      keywords: ["MLOps", "Google Vertex AI" , "workflows"],
    },
    {
      text: "Improved front-end performance, by employing efficient bundling strategies with Webpack and code-splitting techniques in React.",
      keywords: ["bundling strategies", "code-splitting techniques"],
    },
    
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-600 sm:text-lg text-sm tracking-wide font-mono">
          Full Stack Engineer          </span>
          {/* Date */}
          <span className="font-mono text-sm text-gray-800">Oct 2018 - Jun 2020</span>
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
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
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
