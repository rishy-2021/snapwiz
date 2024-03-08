import { Button, Divider } from "antd";
import VideoAndImage from "./video-and-image";

const FirstStep = () => {
  return (
    <>
      <div className="w-1/3 flex flex-col items-center py-3 py-5">
        <p className="bg-orange-400 w-12 h-12 flex justify-center items-center rounded-full text-white font-semibold">
          1
        </p>
        <Divider
          className="bg-gradient-to-b from-orange-500 via-orange-200 to-orange-50 h-10 w-1"
          type="vertical"
        />
        <p className="text-5xl text-center font-bold leading-tight px-5">
          Upload a few photos
        </p>
        <p className="text-gray-500 text-center text-xl tracking-wide mt-5">
          Our AI headshot generator only requires 6 photos of you to create
          anazing headshots!
        </p>
      </div>
      <VideoAndImage />
    </>
  );
};

export default FirstStep;
