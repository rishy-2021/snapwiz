import { Divider, Image } from "antd";

const SecondStep = () => {
  return (
    <>
      <div className="w-1/3 flex flex-col items-center py-3 py-5">
      <Divider
          className="bg-gradient-to-t from-blue-500 via-blue-200 to-blue-50 h-10 w-1"
          type="vertical"
        />
        <p className="bg-blue-400 w-12 h-12 flex justify-center items-center rounded-full text-white font-semibold">
          2
        </p>
        <Divider
          className="bg-gradient-to-b from-blue-500 via-blue-200 to-blue-50 h-10 w-1"
          type="vertical"
        />
        <p className="text-5xl text-center font-bold leading-tight px-5">
        Our AI gets to work
        </p>
        <p className="text-gray-500 text-center text-xl tracking-wide mt-5">
        We use cutting-edge technology built by AI researchers from Meta and Microsoft to create your headshots.
        </p>
      </div>
      <Image
        src={
          "https://www.designer-daily.com/wp-content/uploads/2023/12/before-after.png"
        }
        alt="social-media"
        width={600}
        height={350}
        preview={false}
        style={{ border:"8px solid cyan" , borderRadius:50, marginTop:10}}
      />
    </>
  );
};

export default SecondStep;
