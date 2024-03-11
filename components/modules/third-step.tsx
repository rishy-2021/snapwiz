"use client";
import { Divider } from "antd";
import HeadshotResult from "./headshot-result";

const ThirdStep = () => {

  return (
    <>
      <div className="w-3/4 lg:w-1/3 flex flex-col items-center py-5 mb-5">
        <Divider
          className="bg-gradient-to-t from-blue-500 via-blue-200 to-blue-50 h-10 w-1"
          type="vertical"
        />
        <p className="bg-purple-400 w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center rounded-full text-white font-semibold">
          3
        </p>
        <p className="text-2xl lg:text-5xl text-center font-bold leading-tight px-5">
          Select your headshots
        </p>
        <p className="text-gray-500 text-center text-lg lg:text-xl tracking-wide mt-3 lg:mt-5 px-5">
          You&apos;ll receive different backgrounds, poses, and styles to choose the
          perfect AI headshot. Ready for all use cases, from personal to the
          most professional.
        </p>
      </div>
      <HeadshotResult />
      <p className="text-gray-500 text-center font-semibold bg-gray-100 mt-3 mb-20">
        RESULTS FROM ARAGON.AI’S AI HEADSHOT GENERATOR
      </p>
    </>
  );
};

export default ThirdStep;
