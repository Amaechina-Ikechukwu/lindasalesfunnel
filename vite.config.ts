import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@mui/icons-material": resolve(
        __dirname,
        "node_modules",
        "@mui/icons-material"
      ),
    },
  },
  build: {
    ssr: true,
    outDir: "dist",
    rollupOptions: {
      input: "/src/entry-client.tsx",
      output: {
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
});
