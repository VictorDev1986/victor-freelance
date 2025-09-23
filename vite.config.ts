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
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
        },
        // División adicional automática por carpeta de páginas
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        chunkFileNames: (chunkInfo: any) => {
          if (chunkInfo.facadeModuleId?.includes('/pages/')) {
            return 'assets/pages/[name]-[hash].js';
          }
          return 'assets/[name]-[hash].js';
        },
      },
    },
  },
});
