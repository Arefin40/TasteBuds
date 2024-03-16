import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
   resolve: {
      alias: {
         "@assets": resolve(__dirname, "./src/assets"),
         "@components": resolve(__dirname, "./src/components"),
         "@icons": resolve(__dirname, "./src/icons"),
         "@utils": resolve(__dirname, "./src/utils"),
      },
   },
   plugins: [react()],
});
