import { Facebook, Github, Instagram, Twitter } from "@icons";

export default () => {
   return (
      <footer className="sm:mb-6 text-center">
         <section className="py-14 lg:py-24 px-5 lg:px-0 mx-auto container grid gap-y-6 lg:gap-y-10 justify-items-center sm:rounded-3xl text-neutral-600 bg-gray-100">
            <h1 className="font-extrabold text-2xl lg:text-3xl text-black">
               TasteBuds
            </h1>

            <nav>
               <ul className="flex gap-x-8 lg:gap-x-12 text-lg">
                  <li className="cursor-pointer hover:text-emerald-600">
                     Home
                  </li>
                  <li className="cursor-pointer hover:text-emerald-600">
                     Recipes
                  </li>
                  <li className="cursor-pointer hover:text-emerald-600">
                     About
                  </li>
                  <li className="cursor-pointer hover:text-emerald-600">
                     Search
                  </li>
               </ul>
            </nav>

            <div className="flex items-center gap-x-8 lg:gap-x-12">
               <Twitter />
               <Facebook />
               <Instagram />
               <Github />
            </div>

            <span>&copy; 2024, All Rights Reserved.</span>
         </section>
      </footer>
   );
};
