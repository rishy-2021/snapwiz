"use client";
import { Button, Image } from "antd";
import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const ImageCard = () => {
  const [state, setState] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  const onMoveForward = () => {
    const val = state.map((val) =>(val < 12 ? val + 1 : val));
    setState(val);
  };
  const onMoveBackward = () => {
    const val = state.map((val) => (val !== 1 ? val - 1 : val));
    setState(val);
  };

  return (
    <div className="relative mt-5">
      <div className="w-100vw flex justify-evenly flex-wrap md:flex-nowrap flex-row h-500 px-5">
        {state.map((val, idx) => (
          <div className="lg:mr-1.5">
            <Image
              src={`https://hotpot.ai/images/site/ai/headshot_maker/style_gallery/${val}.png`}
              className="border-2 !w-36 lg:!w-auto rounded-xl"
              key={idx}
            />
          </div>
        ))}
      </div>
      <Button
        disabled={state.includes(1)}
        icon={<FaChevronCircleLeft size={25} />}
        className="absolute inset-y-1/2 left-0 bg-green-200 -mt-4"
        size="large"
        onClick={onMoveBackward}
      />
      <Button disabled={state.includes(12)}
        icon={<FaChevronCircleRight size={25} />}
        className="absolute inset-y-1/2 right-0 -mt-4 bg-green-200"
        size="large"
        onClick={onMoveForward}
      />
    </div>
  );
};

export default ImageCard;
