import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link } from "react-scroll";
const MobileMenu = props => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={props.rotate ? { x: "0" } : { x: "100%" }}
        transition={{ x: { duration: 0.3 } }}
        className="w-full fixed h-screen flex md:hidden duration-300 z-20"
      >
        <div
          onClick={() => closeMenu()}
          className="w-1/4 h-full backdrop-blur-sm bg-MobileNavColor/30 hover:cursor-pointer"
        ></div>
        <div
          className="w-3/4 h-full bg-red-400 flex flex-col 
        justify-center items-center space-y-8 "
        >
          <Link
            to="aboutSection"
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-white text-xs">01.</span>
            <span
              className="text-white  text-sm sm:text-base
             hover:text-white hover:cursor-pointer duration-300"
            >
              About
            </span>
          </Link>
          <Link
            to="WhereIhaveWorkedSection"
            spy={true}
            smooth={true}
            offset={-250}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-xs hover:cursor-pointer">02.</span>
            <span
              className="text-white text-sm sm:text-base
             hover:text-AAsecondary hover:cursor-pointer duration-300"
            >
              Experience
            </span>
          </Link>
          <Link
            to="SomethingIveBuiltSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-xs ">03.</span>
            <span
              className="text-white  text-sm sm:text-base
             hover:text-AAsecondary hover:cursor-pointer duration-300"
            >
              Work
            </span>
          </Link>
          <Link
            to="GetInTouchSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-xs ">04.</span>
            <span
              className="text-white text-sm sm:text-base
             hover:text-blue hover:cursor-pointer duration-300"
            >
              Contact
            </span>
          </Link>
          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
            <button
              className="rounded border   border-white
           hover:bg-white py-2 sm:py-4 px-5 sm:px-10 text-xs text-pink"
            >
              Resume
            </button>
          </a>
        </div>
      </motion.div>
    </>
  );
};
export default MobileMenu;
