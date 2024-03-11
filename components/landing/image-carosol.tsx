"use client"
import { Carousel, Image } from "antd";

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const ImageCarosol = () => {
   return (
    <div className="w-full bg-red-100 text-center h-500 p-5">
    <Carousel autoplay dots={false} className="">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, idx) => (
            <Image src={`https://picsum.photos/200/300?random=${val}`} alt="image" className="bg-green-100 p-3" key={idx}/>
        ))}
  </Carousel>
  </div>
  );
};

export default ImageCarosol;
