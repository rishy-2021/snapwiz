import { Card } from "antd";
import { FC } from "react";

const PrivacyCard: FC<{ src: string; titile: string; description: string }> = ({
  src,
  titile,
  description,
}) => {
  return (
    <Card
      className="lg:w-10/12 md:w-3/4 mx-auto"
      style={{
        borderRadius: 20,
        padding: 1,
        background:
          "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)",
        marginBottom: 20,
      }}
      cover={
        <video
          src={src}
          autoPlay={true}
          muted
          playsInline
          loop
          style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
        />
      }
    >
      <div className="w-3/4 mx-auto text-white text-lg">
        <p className="font-extrabold text-2xl text-center">{titile}</p>
        <p className="text-center text-gray-400">{description}.</p>
      </div>
    </Card>
  );
};

export default PrivacyCard;
