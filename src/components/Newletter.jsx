export default () => {
   return (
      <section className="px-8 py-12 grid gap-y-8 justify-items-center rounded-2xl bg-green-100">
         <div className="grid gap-y-3 justify-items-center text-center">
            <h1 className="font-extrabold text-4xl text-neutral-800">
               Subscribe to our newsletter
            </h1>
            <p className="text-lg">
               Daily Cooking tips and recipes to your inbox!
            </p>
         </div>

         <div className="flex w-full max-w-lg">
            <input
               type="email"
               name="email"
               id="email"
               placeholder="Enter your email"
               className="h-14 px-8 w-full outline-none rounded-l-full text-lg  border-r-0 border-green-200"
            />
            <button className="h-14 px-8 rounded-r-full bg-green-500 text-white font-medium text-lg">
               JOIN
            </button>
         </div>
      </section>
   );
};
