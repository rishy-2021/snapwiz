import { Image } from "antd";

const VideoAndImage = () => {
  return (
    <div className="w-1/2 flex items-center justify-around py-5">
      <Image
        src={
          "https://img.freepik.com/premium-vector/vector-social-media-logos-icons-set_810135-33.jpg?w=1380"
        }
        alt="social-media"
        width={350}
        height={250}
        preview={false}
      />
      <video
        src="https://www.aragon.ai/images/features/upload-photos.mp4"
        autoPlay={true}
        muted
        playsInline
        loop
        width={250}
        // height={100}
        style={{ border:"10px solid lightgray" , borderRadius:50}}
      />
      <Image
        src={
          "https://img.freepik.com/premium-vector/vector-social-media-logos-icons-set_810135-33.jpg?w=1380"
        }
        alt="social-media"
        width={350}
        height={250}
        className="aspect-square"
        preview={false}
      />
    </div>
  );
};

export default VideoAndImage;
