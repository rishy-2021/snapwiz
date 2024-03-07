import AutoPlay from "./components/landing/image-carosol";
import TagLine from "./components/landing/tagline";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      <TagLine />
      <AutoPlay />
    </div>
  );
}
