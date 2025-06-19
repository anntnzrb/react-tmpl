import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom"))
              return "react";
            if (id.includes("@tanstack")) return "tanstack";
            if (id.includes("effect")) return "effect";
            return "vendor";
          }
          return undefined;
        },
      },
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    minify: "esbuild",
  },
});
