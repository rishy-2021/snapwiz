import { Button } from "antd";
import FloatingReview from "../modules/floating-reviews";

const HeadshotGenerate = () => {
   return (
    <div className="w-full flex flex-col items-center pt-10 bg-black pb-10">
        <div className="lg:w-1/2 flex flex-col items-center mt-4 md:mt-8 lg:mt-10">
        <p className="text-4xl md:text-5xl lg:text-6xl text-white text-center font-bold leading-tight px-5">
            <span className="text-orange-500 mr-2 lg:mr-5">15,596,223+</span>AI
            <br />
            headshots generated</p>
        <p className="text-gray-300 text-center text-xl tracking-wider my-8">Read what people are saying about their new headshots</p>
        <Button shape="round" size="large" type="text" className="bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500 mb-10 font-semibold text-white" >Create yours now</Button>
        </div>
        <FloatingReview />
    </div>
  );
};

export default HeadshotGenerate;
