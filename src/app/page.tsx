import Activity from "./components/landing/activity";
import HeadshotGenerate from "./components/landing/headshot-generate";
import ImageCard from "./components/landing/image-card";
import ImageCarosol from "./components/landing/image-carosol";
import Pricing from "./components/landing/pricing";
import StepsOfUsing from "./components/landing/setps-of-using";
import TagLine from "./components/landing/tagline";
import TrustedByCompanies from "./components/landing/trusted-by-companies";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center mb-20">
      <TagLine />
      <ImageCard />
      <TrustedByCompanies />
      <StepsOfUsing />
      <HeadshotGenerate />
      <Pricing />
      <TrustedByCompanies />
      <Activity />
    </div>
  );
}
