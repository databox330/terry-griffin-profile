import React from "react";
import { motion } from "framer-motion";
import Powerschool from "./Descriptions/Adaptive";
import Adaptive from "./Descriptions/Adaptive";
import Esplanade from "./Descriptions/Esplanade";
import OCS from "./Descriptions/OCS";
import Merlino from "./Descriptions/Merlino";
import Akselsoft from "./Descriptions/Akselsoft";
import Orpheus from "./Descriptions/Orpheus";

export default function WhereIHaveWorked() {
  const barRef = React.useRef<HTMLDivElement>(null);

  const GetDescription = () => {
    switch (DescriptionJob) {
      case "Adaptive":
        return <Adaptive />;
      case "Esplanade":
        return <Esplanade />;
      case "OCS":
        return <OCS />;
      case "Merlino":
        return <Merlino />;
      case "Akselsoft":
        return <Akselsoft />;
      case "Orpheus":
        return <Orpheus />;
      default:
        return <Akselsoft />; // Default to Akselsoft
    }
  };

  const [DescriptionJob, setDescriptionJob] = React.useState("Akselsoft"); // Set initial state to Akselsoft

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-gray-300"
    >
      <section className="flex flex-row items-center">
        <span className="text-gray-800 opacity-85 font-bold tracking-wider text-[30px] px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
        justify-center md:justify-center items-center md:items-start gap-10"
      >
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {GetDescription()}
      </section>
    </div>
  );
}

interface CompanyButtonProps {
  ButtonOrderOfcompanyNameBackgroundColorGreen: number;
  CompanyName: string;
  BarPosition: number;
  BarAvobePosition: number;
  DescriptionJob: string;
  CompanyNameBackgroundColorGreen: boolean[];
  setDescriptionJob: React.Dispatch<React.SetStateAction<string>>;
}

const CompaniesBar: React.FC<{ setDescriptionJob: React.Dispatch<React.SetStateAction<string>> }> = (props) => {
  const [barPosition, setBarPosition] = React.useState<number>(0); // Set initial position to 0
  const [barAbovePosition, setBarAbovePosition] = React.useState<number>(1);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] =
    React.useState<boolean[]>([true, false, false, false, false, false]);

  const CompanyButton: React.FC<CompanyButtonProps> = (props) => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(
            props.CompanyNameBackgroundColorGreen
          );
        }}
        className={`flex-none md:text-left hover:text-white
             hover:bg-gray-400 text-[1rem] rounded-xl px-1 py-1.5 text-center mb-2 drop-shadow-md
             md:pl-6 md:px-4 md:w-300 w-300 duration-500
             ${
               companyNameBackgroundColorGreen[
                 props.ButtonOrderOfcompanyNameBackgroundColorGreen
               ]
                 ? "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-[1rem] px-1 py-1.5 text-center mb-2 drop-shadow-md" 
                 : "text-gray-800"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className="flex flex-col md:flex-row w-screen lg:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
    >
      <div
        className="hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[240px] translate-y-1 md:w-0.5 
        rounded md:order-1 order-2"
      >
        <motion.div
          animate={{ y: barPosition }}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-16 rounded bg-AAsecondary`}
        ></motion.div>
      </div>
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0">
        <div className="flex flex-row md:flex-col">
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="Akselsoft"
            BarPosition={0}
            BarAvobePosition={0}
            DescriptionJob="Akselsoft"
            CompanyNameBackgroundColorGreen={[
              true,
              false,
              false,
              false,
              false,
              false,
              false
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="Esplanade"
            BarPosition={40}
            BarAvobePosition={61}
            DescriptionJob="Esplanade"
            CompanyNameBackgroundColorGreen={[
              false,
              true,
              false,
              false,
              false,
              false,
              false
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={2}
            CompanyName="Adaptive"
            BarPosition={80}
            BarAvobePosition={122}
            DescriptionJob="Adaptive"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              true,
              false,
              false,
              false,
              false
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={3}
            CompanyName="OCS"
            BarPosition={120}
            BarAvobePosition={183}
            DescriptionJob="OCS"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              false,
              true,
              false,
              false,
              false
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={4}
            CompanyName="Merlino"
            BarPosition={160}
            BarAvobePosition={244}
            DescriptionJob="Merlino"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              false,
              false,
              true,
              false
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={5}
            CompanyName="Orpheus"
            BarPosition={200}
            BarAvobePosition={305}
            DescriptionJob="Orpheus"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              false,
              false,
              false,
              true
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div
            animate={{ x: barAbovePosition }}
            className="w-[128px] h-0.5 rounded bg-AAsecondary"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};