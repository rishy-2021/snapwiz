"use client"
import { Image } from "antd";
import { useEffect, useState } from "react";

const imgArr = [
    "https://starfishteams.com/wp-content/uploads/2022/06/image-2-1030x107.png",
    "https://www.voltio.com.au/wp-content/uploads/2018/07/Voltio-Battery-Logo.png",
    "https://clearitusa.com/wp-content/uploads/2018/04/NRI_logostrip.png"
]

const TrustedByCompanies = () => {
    const [state, setState] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if(imgArr.findIndex((val)=> val === imgArr[state]) === 2){
                setState(0)
               }else {
                setState(state+1)
               }
        }, 5000);

        return () => clearInterval(interval);
    }, [state]);
   return (
    <div className="flex flex-col items-center justify-center mt-10 mb-20">
        <p className="text-gray-500 font-semibold mb-5">TRUSTED BY LEADING PROFESSIONALS</p>
            <Image src={imgArr[state]} className="" width={800} height={80} preview={false} />
  </div>
  );
};

export default TrustedByCompanies;
