import RecipeCard from "@components/RecipeCard";
import Table from "@components/Table";

export default ({
   recipes,
   preparing,
   cooking,
   addToPreparing,
   sendForCooking,
}) => {
   return (
      <section>
         <header className="mb-6 lg:mb-12 text-center grid gap-y-4 lg:gap-y-6 justify-items-center">
            <h1 className="font-bold text-3xl lg:text-4xl text-black">
               Our Recipes
            </h1>
            <p className="max-w-3xl lg:text-lg">
               Discover a diverse array of delectable dishes curated to inspire
               your inner chef. From quick meals to gourmet delights, get
               everything you need in one place.
            </p>
         </header>

         <main className="grid lg:grid-cols-recipe gap-6 items-start">
            <div className="grid lg:grid-cols-2 gap-6">
               {recipes.map((recipe) => (
                  <RecipeCard
                     key={recipe.id}
                     recipe={recipe}
                     addToPreparing={addToPreparing}
                  />
               ))}
            </div>

            <div className="py-6 grid gap-y-8 rounded-2xl border content-start sticky top-0">
               <Table
                  name="Want to cook"
                  recipes={preparing}
                  sendForCooking={sendForCooking}
               />
               <Table readOnly name="Currently cooking" recipes={cooking} />
            </div>
         </main>
      </section>
   );
};
