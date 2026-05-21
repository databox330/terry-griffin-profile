import React from "react";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import YoutubeIcon from "../../Icons/YoutubeIcon";
type Props={href:string,Icon:React.FC<{className:string}>}
const ClickableIcon = (props:Props) => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon
        className={
          "w-5 h-5 text-gray-300 hover:text-AAsecondary transition duration-800 fill-current hover:cursor-pointer "
        }
      />
    </a>
  );
};

export default function Fotter(props:{link:string,className:string}) {
  return (
      <div className={` ${props.className} bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4 `}>
        {/* // ? Reach me at */}
        <div className="flex flex-row space-x-8">
          <ClickableIcon
            href={"https://github.com/databox330"}
            Icon={GithubIcon}
          />
          <ClickableIcon
            href={"https://www.linkedin.com/in/terry-lee-griffin-27340b410/"}
            Icon={LinkedinIcon}
          />
          <ClickableIcon
            href={"#"}
            Icon={InstagramIcon}
          />
          <ClickableIcon
            href={"#"}
            Icon={YoutubeIcon}
          />
        </div>
        <a href={props.link} className="" target={"_blank"} rel="noreferrer">
          <div
            className="group flex flex-col font-mono justify-center items-center  text-gray-300 
    text-sm  space-y-2  "
          >
            <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
              Designed & Built by Terry Griffin
            </span>

            <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
              <GithubIcon
                className={
                  "w-4 h-4 text-gray-300 fill-current group-hover:text-AAsecondary duration-800"
                }
              />
              <span className="">Source code - Github</span>
            </span>
          </div>
        </a>
      </div>
  );
}
