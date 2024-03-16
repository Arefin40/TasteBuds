import { useState } from "react";
import prettifyTime from "@utils/prettifyTime";
import Button from "@components/Button";

export default ({ serial, recipe, readOnly, onAction }) => {
   const { name, preparing_time, calories } = recipe;
   const columns = readOnly ? "grid-cols-cooking" : "grid-cols-preparing";

   return (
      <div
         className={`px-6 py-4 grid gap-x-4 ${columns} items-center odd:bg-gray-100`}
      >
         <h1>{serial}</h1>
         <h1>{name}</h1>
         <span className="text-center">{prettifyTime(preparing_time)}</span>
         <span className="text-center">{calories}</span>
         {!readOnly && <Button onClick={onAction}>Cook</Button>}
      </div>
   );
};
