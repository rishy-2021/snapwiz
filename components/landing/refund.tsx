import { Button } from "antd";
import MovingImageRight from "../modules/moving-image-right";
import MovingImageLeft from "../modules/moving-image-left";

const Refund = () => {
  return (
    <div className="lg:w-3/5 flex items-center justify-center my-20">
      <div className="w-1/3 relative">
      <MovingImageLeft />
      </div>
      <div className="w-10/12 mx-auto flex flex-col items-center py-5 lg:pr-20">
        <p className="text-5xl lg:text-6xl text-center font-bold leading-tight lg:px-5">
        <span className="text-cyan-500">Money-back</span> Guarantee</p>
        <p className="text-gray-600 text-center text-xl tracking-wider mt-5 px-5 leading-normal">
        Try Aragon.ai with confidence. Not completely satisfied? Let us know within 7 days of purchase for a full refund.
        </p>
        <Button
          shape="round"
          size="large"
          type="text"
          className="bg-black my-5 font-semibold text-white h-12"
        >
          Create yours headshots
        </Button>
      </div>
      <div className="w-1/3 relative">
        <MovingImageRight />
      </div>
    </div>
  );
};

export default Refund;
