import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Adaptive() {
  const tasks = [
    {
      text: "Created a comprehensive Tokenomics model and authored a detailed white paper outlining the vision, features, and benefits of the NFT marketplace.",
      keywords: ["Tokenomics model"],
    },
    {
      text: "Engaged in database administration tasks, writing optimized SQL queries for PostgreSQL and schema design for MongoDB and Neo4j.",
      keywords: ["PostgreSQL", "Neo4j"],
    },
    {
      text: "Developed of the NFT marketplace for RD Land Coin, seamlessly integrating Unity WebGL to create an immersive user experience that captivated and delighted users.",
      keywords: ["NFT", "RD Land Coin", "Unity WebGL"],
    },
    {
      text: "Improved 40% of security of the smart contract by auditing using Hardhat Unit Testing and Vulnerability Attack Testing.",
      keywords: ["40%", "Hardhat", "Vulnerability Attack"],
    },
    {
      text: "Implemented Online Payment using Bitfinex payment API to support the purchase using Crypto.",
      keywords: ["Bitfinex", "payment API", "Crypto"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-600 sm:text-lg text-sm tracking-wide font-mono">
            Blockchain Full Stack Engineer (Remote)
          </span>
          {/* Date */}
          <span className="font-mono text-sm text-gray-800">
            Jun 2020 - Apr 2022
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
