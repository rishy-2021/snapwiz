import { Button } from "antd";

const TagLine = () => {
   return (
    <div className="lg:w-1/2 flex flex-col items-center lg:py-5">
        <p className="bg-red-50 py-1 text-sm lg:text-base px-5 rounded-full text-orange-500 font-semibold my-10">15,596,223+ AI HEADSHOTS GENERATED</p>
        <p className="text-2xl md:text-5xl lg:text-6xl text-center font-bold leading-tight px-5">The Most Realistic AI Headshot Generator Ever.</p>
        <p className="text-lightgray text-center text-base md:text-lg lg:text-xl tracking-wider mt-5 px-5">Get professional AI headshots in minutes with our new AI headshot generator. Save hundreds of dollars and hours of your time. Built by AI researchers.</p>
        <Button shape="round" size="large" className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 my-5 font-semibold text-white" >Create yours now</Button>
    </div>
  );
};

export default TagLine;
