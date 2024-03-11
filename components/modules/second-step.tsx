import { Divider, Image } from "antd";

const SecondStep = () => {
  return (
    <>
      <div className="w-3/4 lg:w-1/3 flex flex-col items-center py-5">
      <Divider
          className="bg-gradient-to-t from-blue-500 via-blue-200 to-blue-50 h-10 w-1"
          type="vertical"
        />
        <p className="bg-blue-400 w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center rounded-full text-white font-semibold">
          2
        </p>
        <Divider
          className="bg-gradient-to-b from-blue-500 via-blue-200 to-blue-50 h-10 w-1"
          type="vertical"
        />
        <p className="text-2xl lg:text-5xl text-center font-bold leading-tight px-5">
        Our AI gets to work
        </p>
        <p className="text-gray-500 text-center text-lg lg:text-xl tracking-wide mt-3 lg:mt-5 px-5">
        We use cutting-edge technology built by AI researchers from Meta and Microsoft to create your headshots.
        </p>
      </div>
      <Image
        src={
          "https://www.designer-daily.com/wp-content/uploads/2023/12/before-after.png"
        }
        alt="social-media"
        // width={600}
        // height={350}
        preview={false}
        // style={{ border:"8px solid cyan" , borderRadius:50, marginTop:10,}}
        className="!w-11/12 md:!w-9/12 lg:!w-1/2 mx-auto border-4 lg:border-8 border-cyan-400 rounded-3xl"
      />
    </>
  );
};

export default SecondStep;
