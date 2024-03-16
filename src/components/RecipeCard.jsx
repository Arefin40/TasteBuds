import Button from "@components/Button";
import prettifyTime from "@utils/prettifyTime";
import { Calory, Time } from "@icons";

export default ({ recipe, addToPreparing }) => {
   let { name, image, description, ingredients, preparing_time, calories } =
      recipe;

   return (
      <div className="p-6 border rounded-2xl grid gap-y-2 lg:gap-y-4">
         <img
            src={image}
            className="max-h-full w-full rounded-xl object-cover aspect-video"
         />

         <div className="mt-2 grid gap-y-4">
            <h1 className="font-bold text-xl text-black">{name}</h1>
            <p>{description}</p>
         </div>

         <div className="lg:border-y lg:pt-6 lg:pb-4">
            <h2 className="lg:text-black lg:text-lg lg:font-semibold">
               Ingredients: {ingredients.length}
            </h2>
            <ul className="hidden mt-2 lg:grid gap-y-1 list-inside list-image-recipe marker:text-xl">
               {ingredients.slice(0, 3).map((ingredient, index) => (
                  <li key={index} className="space-x-2">
                     <span>{ingredient}</span>
                  </li>
               ))}
            </ul>
         </div>

         <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-2">
               <Time />
               <span>{prettifyTime(preparing_time)}</span>
            </div>
            <div className="flex items-center gap-x-2">
               <Calory />
               <span>{calories} calories</span>
            </div>
         </div>

         <Button
            onClick={() => addToPreparing(recipe)}
            className="mt-2 justify-self-start"
         >
            Want to Cook
         </Button>
      </div>
   );
};
