import prettifyTime from "@utils/prettifyTime";
import TableRow from "@components/TableRow";
import { Calory, Time } from "@icons";

export default ({ name, readOnly, recipes = [], sendForCooking }) => {
   const columns = readOnly ? "grid-cols-cooking" : "grid-cols-preparing";

   let totalTime = 0;
   let totalCalories = 0;
   if (readOnly) {
      recipes.forEach(({ preparing_time, calories }) => {
         totalTime += preparing_time;
         totalCalories += calories;
      });
   }

   return (
      <div>
         <h1 className="pb-4 mx-16 mb-6 font-bold text-2xl text-center text-black border-b">
            {name}: {recipes.length || 0}
         </h1>

         <div
            className={`px-6 py-4 grid gap-x-4 ${columns} items-center font-bold text-neutral-800`}
         >
            <h1 className="col-start-2">Name</h1>
            <span className="text-center">Time</span>
            <span className="text-center">Calories</span>
         </div>

         <div className="grid">
            {recipes.map((recipe, index) => (
               <TableRow
                  key={recipe.id}
                  serial={index + 1}
                  readOnly={readOnly}
                  recipe={recipe}
                  onAction={() => sendForCooking(recipe)}
               />
            ))}

            {readOnly && (
               <div className="px-6 mt-2 flex gap-x-5 gap-y-1 items-center justify-center flex-wrap">
                  <div className="flex items-center gap-x-2 flex-shrink-0">
                     <Time />
                     <h1>Total time:</h1>
                     <span className="font-bold text-neutral-800">
                        {prettifyTime(totalTime)}
                     </span>
                  </div>
                  <div className="flex items-center gap-x-2 flex-shrink-0">
                     <Calory />
                     <h1>Total calories:</h1>
                     <span className="font-bold text-neutral-800">
                        {totalCalories} calories
                     </span>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};
