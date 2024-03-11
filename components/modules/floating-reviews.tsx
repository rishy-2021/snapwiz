"use client"
import { useState } from "react";
import { Card, Image } from "antd";

const FloatingReview = () => {
    const [state, setState] = useState<number[]>([1, 2, 3, 4, 5]);

    const onMoveForward = () => {
      const val = state.map((val) => val + 1);
      setState(val);
    };
    const onMoveBackward = () => {
      const val = state.map((val) => (val !== 1 ? val - 1 : val));
      setState(val);
    };
   return (
    <div className="w-full flex items-center justify-center flex-row px-5 overflow-hidden">
      {state.map((val, idx) => (
        <div className="flex flex-col mt-5" key={idx}>
         <Card
         hoverable
         style={{ width: 325 }}
         className={`bg-zinc-950 border rounded-3xl ${(val % 2 === 0) && "mt-20 mx-5"}`}
         key={idx}
       >
        <div className="flex items-center justify-start">
        <Image
            src={`https://hotpot.ai/images/site/ai/headshot_maker/style_gallery/${val}.png`}
            alt="image"
            className="border-2 rounded-full"
            key={idx}
            width={50}
            height={50}
            preview={false}
          />
          <div className="flex flex-col items-start ml-2">
            <p className="text-lg font-semibold text-white">Sammy C.</p>
            <p className="text-md font-semibold text-white opacity-70 -mt-1">Real Estate Agent</p>
          </div>
        </div>
        <p className="text-white text-lg leading-tight my-3 p-1">Very happy. Some were hilarious, but now I better understand what to do next time.</p>
          <Image
            src={`https://hotpot.ai/images/site/ai/headshot_maker/style_gallery/${val}.png`}
            alt="image"
            className="rounded-xl"
            key={idx}
            preview={false}
          />
       </Card>
       <br />
       <Card
         hoverable
         style={{ width: 325 }}
         className={`bg-zinc-950 border rounded-3xl ${(val % 2 === 0) && "mt-5 mx-5"}`}
       >
        <div className="flex items-center justify-start">
        <Image
            src={`https://hotpot.ai/images/site/ai/headshot_maker/style_gallery/${val+7}.png`}
            alt="image"
            className="border-2 rounded-full"
            key={idx}
            width={50}
            height={50}
            preview={false}
          />
          <div className="flex flex-col items-start ml-2">
            <p className="text-lg font-semibold text-white">Sammy C.</p>
            <p className="text-md font-semibold text-white opacity-70 -mt-1">Real Estate Agent</p>
          </div>
        </div>
        <p className="text-white text-lg leading-tight my-3 p-1">Very happy. Some were hilarious, but now I better understand what to do next time.</p>
          <Image
            src={`https://hotpot.ai/images/site/ai/headshot_maker/style_gallery/${val+7}.png`}
            alt="image"
            className="rounded-xl"
            key={idx}
            preview={false}
          />
       </Card>
        </div>
      ))}
    </div>
  );
};

export default FloatingReview;
