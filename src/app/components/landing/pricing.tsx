import PricingCard from "../modules/pricing-card";

const Pricing = () => {
   return (
    <div className="w-full flex flex-col items-center py-3 mt-20">
        <div className="w-1/2 flex flex-col items-center">
        <p className="text-6xl text-center font-bold leading-tight px-5">
            <span className="text-blue-500">Premium quality</span> without the premium price</p>
        <p className="text-center text-xl tracking-wider my-8">Update your LinkedIn profile picture, boost your job application rate, or upgrade your company’s website with our tailored AI headshot plans.</p>
        <PricingCard />
        </div>
    </div>
  );
};

export default Pricing;
