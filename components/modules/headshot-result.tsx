import { Button, Image } from "antd";
import { useEffect, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import useScreenSize from "../global/useResizeHook";

const HeadshotResult = () => {
    const screenSize = useScreenSize();
    const [state, setState] = useState<number[]>([]);

    const onMoveForward = () => {
      const val = state.map((val) => (val < 15 ?val + 1 : val));
      setState(val);
    };

    const onMoveBackward = () => {
      const val = state.map((val) => (val !== 1 ? val - 1 : val));
      setState(val);
    };

    console.log(screenSize.width, "widthh--------")

    useEffect(()=>{
      if(screenSize.width < 768){
        setState([1,2])
      } else if (screenSize.width < 992){
        setState([1, 2, 3, 4])
      }else {
        setState([1,2, 3, 4, 5, 6])
      }
    },[screenSize.width])

   return (
    <div className="lg:w-2/3 flex items-center justify-center relative">
    <div className="w-11/12 flex items-center justify-center flex-row lg:px-5">
      {state.map((val, idx) => (
        <div className="lg:mr-1.5 mx-auto" key={idx}>
          <Image
            src={`https://hotpot.ai/images/site/ai/headshot_maker/style_gallery/${val}.png`}
            alt="image"
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
            alt="image"
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
      className="absolute inset-y-1/2 left-0 md:left-5 -mt-4"
      size="large"
      onClick={onMoveBackward}
    />
    <Button
      disabled={state.includes(15)}
      icon={<FaChevronCircleRight size={25} />}
      className="absolute inset-y-1/2 right-0 md:right-5 -mt-4"
      size="large"
      onClick={onMoveForward}
    />
  </div>
  );
};

export default HeadshotResult;
