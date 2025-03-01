import { Button, Image } from "antd";
import PrivacyCard from "../modules/privacy-card";

const Privacy = () => {
  return (
    <div className="w-full lg:flex flex-col justify-center items-center py-10 mt-10" style={{background: "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)"}}>
      <div className="lg:w-1/3 flex flex-col items-center py-10">
        <p className="text-5xl  lg:text-6xl text-center text-white font-bold lg:font-extrabold leading-tight px-5">
          <span className="text-violet-800">Privacy first</span> to protect your
          data
        </p>
        <p className="text-gray-400 text-center text-xl tracking-wider my-5">
          Aragon.ai will never sell your information.
        </p>
        <Button
          shape="round"
          size="large"
          type="text"
          className="bg-violet-800 my-5 h-12 font-semibold text-white"
        >
          Create yours now
        </Button>
      </div>
      <div className="lg:w-4/6 grid lg:grid-cols-2 mx-auto px-2">
          <PrivacyCard
            src="https://www.shutterstock.com/shutterstock/videos/1101867265/preview/stock-footage-cyber-security-and-digital-computer-protection-with-padlock-symbol-digital-concept-network-cyber.webm"
            titile="Advanced Encryption"
            description="Your data deserves the best protection. We encrypt all sensitive user data."
          />
          <PrivacyCard
            src="https://www.shutterstock.com/shutterstock/videos/1107112209/preview/stock-footage-cyber-security-animation-a-shield-with-lock-icon-hi-tech-style-seamless-loop-video-advanced.webm"
            titile="Advanced Encryption"
            description="Your data deserves the best protection. We encrypt all sensitive user data."
          />
          <PrivacyCard
            src="https://www.shutterstock.com/shutterstock/videos/1089209771/preview/stock-footage-secure-payment-online-digital-wallet-mobile-wallet-safety-business-man-with-computer-vpn-virtual.webm"
            titile="Advanced Encryption"
            description="Your data deserves the best protection. We encrypt all sensitive user data."
          />
          <PrivacyCard
            src="https://www.shutterstock.com/shutterstock/videos/1107112209/preview/stock-footage-cyber-security-animation-a-shield-with-lock-icon-hi-tech-style-seamless-loop-video-advanced.webm"
            titile="Advanced Encryption"
            description="Your data deserves the best protection. We encrypt all sensitive user data."
          />
      </div>
      <p className="lg:w-1/4 md:w-2/3 md:mx-auto text-lg font-semibold text-center text-white mt-10 px-10">&quot;I love Aragon.ai! It created some excellent photos for me.&quot;</p>
      <div className="flex items-center justify-center mt-5">
        <Image
            src={`https://hotpot.ai/images/site/ai/headshot_maker/style_gallery/5.png`}
            alt="profile"
            className="border border-slate-200 rounded-full"
            width={40}
            height={40}
            preview={false}
          />
          <div className="flex flex-col items-start ml-2">
            <p className="text-md font-semibold text-gray-400">Sammy C.</p>
            <p className="text-sm font-semibold text-gray-500">Executive, Doordash</p>
          </div>
        </div>
    </div>
  );
};

export default Privacy;
