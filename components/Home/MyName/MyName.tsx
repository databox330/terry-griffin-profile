import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Img from "../../smallComp/image/Img";
import Image from "next/image";
export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();

  const techStack = [
    "Node",
    "Nest",
    "React",
    "Next",
    "Github",
    "Aws",
    "Jira",
    "Docker",
    "Python",
    "CSharp",
  ];

  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52 bg-gradient-to-r from-indigo-600 via-BBdarkblue to-indigo-600 "
    >
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.5,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-black font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Terry Griffin
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.6,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.6,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-white font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Bridging innovation and practicality.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.7,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.7,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="text-white font-Header text-primary mt-10 tracking-wider"
      >
        Global-minded full-stack software engineer with years of experience
        working in a bunch of different fields like eCommerce, fintech,
        blockchain, data management and building SaaS.
      </motion.h3>
      <div className="flex flex-row items-center space-x-4">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="mt-12"
      >
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="mt-12"
      >
        <div
          className="contra-hire-me-button "
          data-analyticsuserid="ad2fb51b-9934-486d-91aa-b82399cdaa50"
          data-theme="dark"
          data-username="waison_lee_t9rek3mz"
        ></div>
        <script
          async
          src="https://contra.com/static/embed/sdk.js"
        ></script>
      </motion.div>
      </div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 10.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className="mt-12"
      >
        {/* <div className="flex flex-wrap">
          {[
            
          ].map((tech) => (
            <img
              key={tech}
              className="w-12 h-12 m-2"
              src={`/${tech}.png`}
              alt={`${tech} logo`}
            />
          ))}
        </div> */}

        <div className="flex flex-wrap">
          {techStack.map((tech) => (
            <Image
              key={tech}
              className="w-20 h-20 m-10"
              src={`/techicon/${tech}.png`} // Path to your image
              alt={`${tech} logo`} // Alt text for accessibility
              width={100} // Set your desired width
              height={100} // Set your desired height
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
