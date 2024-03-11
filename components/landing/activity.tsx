import { Divider } from "antd";

const Activity = () => {
   return (
    <div className="w-full py-10 flex flex-col lg:flex-row justify-around items-center py-5 border-y">
     <div className="lg:w-7/12 w-full flex flex-col lg:flex-row justify-around">
     <div className="flex w-full items-center justify-center flex-col">
        <p className="text-6xl font-bold">350K+</p>
        <p className="text-gray-500 mt-3">ARAGON.AI USERS</p>
        </div>
        <Divider type="vertical" className="hidden lg:block h-20 w-0.5  bg-gray-200" />
        <Divider type="horizontal" className="lg:hidden h-0.5 bg-gray-100" />
        <div className="flex w-full items-center justify-center flex-col">
        <p className="text-6xl font-bold">1.4M+</p>
        <p className="text-gray-500 mt-3">MONTHLY HEADSHOT</p>
        </div>
        <Divider type="vertical" className="hidden lg:block h-20 w-0.5  bg-gray-200" />
        <Divider type="horizontal" className="lg:hidden h-0.5 bg-gray-100" />
        <div className="flex w-full items-center justify-center flex-col">
        <p className="text-6xl font-bold">195K+</p>
        <p className="text-gray-500 mt-3">CUSTOMER HOURS SAVED</p>
        </div>
     </div>
    </div>
  );
};

export default Activity;
