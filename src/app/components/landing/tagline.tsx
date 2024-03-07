import { Button } from "antd";

const TagLine = () => {
   return (
    <div className="w-1/2 flex flex-col items-center py-3 py-5">
        <p className="bg-red-50 py-1 px-5 rounded-full text-orange-500 font-semibold my-10">15,596,223+ AI HEADSHOTS GENERATED</p>
        <p className="text-6xl text-center font-bold leading-tight px-5">The Most Realistic AI Headshot Generator Ever.</p>
        <p className="text-lightgray text-center text-xl tracking-wider mt-5">Get professional AI headshots in minutes with our new AI headshot generator. Save hundreds of dollars and hours of your time. Built by AI researchers.</p>
        <Button shape="round" size="large" type="text" className="bg-amber-300 my-5 font-semibold text-white" >Create yours now</Button>
    </div>
  );
};

export default TagLine;
