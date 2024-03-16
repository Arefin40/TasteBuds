export default ({ active }) => {
   return (
      <nav
         className={`fixed top-16 inset-x-0 lg:static lg:block bg-white border lg:border-0 shadow-md lg:shadow-none ${
            active ? "block" : "hidden"
         }`}
      >
         <ul className="py-12 lg:py-0 grid lg:flex items-center gap-x-12 gap-y-5 justify-items-center lg:text-lg">
            <li className="cursor-pointer hover:text-emerald-600">Home</li>
            <li className="cursor-pointer hover:text-emerald-600">Recipes</li>
            <li className="cursor-pointer hover:text-emerald-600">About</li>
            <li className="cursor-pointer hover:text-emerald-600">Search</li>
         </ul>
      </nav>
   );
};
