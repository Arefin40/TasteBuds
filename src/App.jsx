import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Header from "@components/Header";
import HeroSection from "@components/HeroSection";
import Newletter from "@components/Newletter";
import Footer from "@components/Footer";
import RecipeSection from "@components/RecipeSection";

export default () => {
   // States
   const [data, setData] = useState([]);
   const [preparing, setPreparing] = useState([]);
   const [cooking, setCooking] = useState([]);

   // Fetching recipe data
   useEffect(() => {
      fetch("/src/utils/data.json")
         .then((response) => response.json())
         .then((data) => setData(data.recipes));
   }, []);

   /** Adds a recipe to the preparing table. */
   const addToPreparing = (recipe) => {
      if (preparing.includes(recipe)) {
         toast.error("Already preparing", {
            style: {
               borderRadius: "10px",
               background: "#333",
               color: "#fff",
            },
         });
         return;
      }
      if (cooking.includes(recipe)) {
         toast.error("Already cooking");
         return;
      }
      setPreparing([...preparing, recipe]);
   };

   /** Sends the recipe for cooking. */
   const sendForCooking = (recipe) => {
      const filteredRecipes = preparing.filter(({ id }) => id !== recipe.id);
      setPreparing(filteredRecipes);
      setCooking([...cooking, recipe]);
   };

   // Components
   return (
      <>
         <Toaster />
         <Header />

         <main className="px-5 mt-5 mb-16 lg:mt-0 lg:px-0 mx-auto container grid gap-y-16 lg:gap-y-24">
            <HeroSection />
            <RecipeSection
               recipes={data}
               preparing={preparing}
               cooking={cooking}
               addToPreparing={addToPreparing}
               sendForCooking={sendForCooking}
            />
            <Newletter />
         </main>

         <Footer />
      </>
   );
};
