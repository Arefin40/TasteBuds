import { useEffect, useState } from "react";

import Header from "@components/Header";
import HeroSection from "@components/HeroSection";
import Newletter from "@components/Newletter";
import Footer from "@components/Footer";
import RecipeSection from "@components/RecipeSection";

export default () => {
   // States
   const [data, setData] = useState([]);

   // Fetching recipe data
   useEffect(() => {
      fetch("/src/utils/data.json")
         .then((response) => response.json())
         .then((data) => setData(data.recipes));
   }, []);

   // Components
   return (
      <>
         <Header />

         <main className="px-5 mt-5 mb-16 lg:mt-0 lg:px-0 mx-auto container grid gap-y-16 lg:gap-y-24">
            <HeroSection />
            <RecipeSection recipes={data} />
            <Newletter />
         </main>

         <Footer />
      </>
   );
};
