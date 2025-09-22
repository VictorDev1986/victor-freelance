import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Removido base para Netlify - no es necesario
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
