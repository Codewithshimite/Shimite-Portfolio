import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures correct routing
  build: {
    outDir: "dist", // Ensures Vercel serves the correct folder
  },
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
