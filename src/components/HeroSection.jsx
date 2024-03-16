import Banner from "@assets/Banner.jpg";
import Button from "@components/Button";

export default () => {
   return (
      <section className="py-16 lg:py-32 px-5 lg:px-0 bg-banner text-center grid justify-items-center bg-center bg-cover text-white rounded-3xl">
         <h1 className="max-w-4xl text-5xl lg:text-[3.25rem] font-extrabold lg:leading-snug">
            Discover an exceptional cooking class tailored for you!
         </h1>

         <p className="mt-6 mb-10 max-w-3xl text-lg text-neutral-300">
            Explore a world of culinary wonders with our collection of
            mouthwatering recipes crafted to elevate your cooking experience.
         </p>

         <div className="max-w-full gap-y-4 grid grid-cols-hero-buttons gap-x-6 justify-center">
            <Button size="large">Explore Now</Button>
            <Button secondary size="large">
               Our Feedback
            </Button>
         </div>
      </section>
   );
};
