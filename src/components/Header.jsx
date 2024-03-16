import { useState } from "react";
import { Account, Menu, Search } from "@icons";
import NavigationMenu from "@components/NavigationMenu";

export default () => {
   const [active, setActive] = useState(false);
   const toggleMenu = () => setActive((prevState) => !prevState);

   return (
      <header className="py-4 lg:py-12 px-5 lg:px-0 mx-auto container flex items-center justify-between border-b lg:border-0">
         <h1 className="font-extrabold text-2xl lg:text-3xl text-black">
            TasteBuds
         </h1>

         <NavigationMenu active={active} />

         <div className="flex items-center gap-x-4">
            <div className="relative hidden lg:block">
               <input
                  type="text"
                  placeholder="Search"
                  className="w-64 h-12 px-12 bg-neutral-200 rounded-full placeholder-neutral-500 text-black outline-none"
               />

               <Search className="absolute left-5 top-1/2 transform -translate-y-1/2" />
            </div>

            <div className="flex items-center gap-x-3">
               <button className="w-8 h-8 lg:w-12 lg:h-12">
                  <Account />
               </button>

               <button onClick={toggleMenu} className="lg:hidden">
                  <Menu />
               </button>
            </div>
         </div>
      </header>
   );
};
