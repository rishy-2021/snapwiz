"use client";
import { Button, Divider, Image } from "antd";
import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const ThirdStep = () => {
  const [state, setState] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  const onMoveForward = () => {
    const val = state.map((val) => val + 1);
    setState(val);
  };
  const onMoveBackward = () => {
    const val = state.map((val) => (val !== 1 ? val - 1 : val));
    setState(val);
  };
  return (
    <>
      <div className="w-1/3 flex flex-col items-center py-3 py-5 mb-5">
        <Divider
          className="bg-gradient-to-t from-blue-500 via-blue-200 to-blue-50 h-10 w-1"
          type="vertical"
        />
        <p className="bg-blue-400 w-12 h-12 flex justify-center items-center rounded-full text-white font-semibold mb-5">
          3
        </p>
        <p className="text-5xl text-center font-bold leading-tight px-5">
          Select your headshots
        </p>
        <p className="text-gray-500 text-center text-xl tracking-wide mt-5">
          You'll receive different backgrounds, poses, and styles to choose the
          perfect AI headshot. Ready for all use cases, from personal to the
          most professional.
        </p>
      </div>
      <div className="w-2/3 flex items-center justify-center relative">
        <div className="w-11/12	flex justify- flex-row px-5">
          {state.map((val, idx) => (
            <div className="mr-1.5">
              <Image
                src={`https://hotpot.ai/images/site/ai/headshot_maker/style_gallery/${val}.png`}
                className="border-2 rounded-xl"
                key={idx}
                width={175}
                height={175}
                preview={false}
              />
              <Image
                src={`https://hotpot.ai/images/site/ai/headshot_maker/style_gallery/${
                  val + 7
                }.png`}
                className="border-2 rounded-xl"
                key={idx}
                width={175}
                height={175}
                preview={false}
              />
            </div>
          ))}
        </div>
        <Button
          icon={<FaChevronCircleLeft size={25} />}
          disabled={state.includes(1)}
          className="absolute inset-y-1/2 left-0 -mt-4"
          size="large"
          onClick={onMoveBackward}
        />
        <Button
          icon={<FaChevronCircleRight size={25} />}
          className="absolute inset-y-1/2 right-0 -mt-4"
          size="large"
          onClick={onMoveForward}
        />
      </div>
      <p className="text-gray-500 text-center font-semibold bg-gray-100 mt-3 mb-20">
        RESULTS FROM ARAGON.AI’S AI HEADSHOT GENERATOR
      </p>
    </>
  );
};

export default ThirdStep;
