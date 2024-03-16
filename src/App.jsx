import Header from "@components/Header";
import HeroSection from "@components/HeroSection";
import Newletter from "@components/Newletter";
import Footer from "@components/Footer";

export default () => {
   return (
      <>
         <Header />

         <main className="px-5 mt-5 mb-16 lg:mt-0 lg:px-0 mx-auto container grid gap-y-16 lg:gap-y-24">
            <HeroSection />
            <Newletter />
         </main>

         <Footer />
      </>
   );
};
