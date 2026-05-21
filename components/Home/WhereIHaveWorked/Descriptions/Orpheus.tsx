import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Merlino() {
    const tasks = [
        {
            text: "Improved server-side logic for multiple projects, aligning with industry best practices in backend development with Node.js.",
            keywords: ["server-side", "backend", "Node.js"],
        },
        {
            text: "Engaged in database administration tasks, writing optimized SQL queries for PostgreSQL and schema design for MongoDB and Neo4j.",
            keywords: ["SQL","PostgreSQL","MongoDB","Neo4j"],
        },
        {
            text: "Integrated numerous third-party services and APIs on .NET to extend app functionalities, including payment processing, social media interactions, and geolocation services.",
            keywords: ["third-party services" , "APIs" ],
        },
       
    ];

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    {/* Title */}
                    <span className="text-gray-600 sm:text-lg text-sm tracking-wide font-mono">
                    Research Assistant | Software Intern                    </span>
                    {/* Date */}
                    <span className="font-mono text-sm text-gray-800">Jun 2015 - Jun 2016</span>
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
