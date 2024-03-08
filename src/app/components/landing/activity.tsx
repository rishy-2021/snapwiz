import { Divider } from "antd";

const Activity = () => {
   return (
    <div className="w-full py-10 flex flex-row justify-around items-center py-5 border-y">
     <div className="lg:w-7/12 flex flex-row justify-around items-center">
     <div className="flex items-end justify-end flex-col">
        <p className="text-6xl font-bold">350K+</p>
        <p className="text-gray-500 mt-3">ARAGON.AI USERS</p>
        </div>
        <Divider type="vertical" className="h-20 w-0.5  bg-gray-200" />
        <div className="flex items-end justify-end flex-col">
        <p className="text-6xl font-bold">1.4M+</p>
        <p className="text-gray-500 mt-3">MONTHLY HEADSHOT</p>
        </div>
        <Divider type="vertical" className="h-20 w-0.5  bg-gray-200" />
        <div className="flex items-end justify-end flex-col">
        <p className="text-6xl font-bold">195K+</p>
        <p className="text-gray-500 mt-3">CUSTOMER HOURS SAVED</p>
        </div>
     </div>
    </div>
  );
};

export default Activity;
