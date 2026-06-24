import { fileURLToPath } from "node:url";
import { defineConfig, mergeConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

const tanstackStartDefaults = {
  importProtection: {
    behavior: "error",
    client: {
      files: ["**/server/**"],
      specifiers: ["server-only"],
    },
  },
};

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart(
      mergeConfig(tanstackStartDefaults, {
        server: { entry: "server" },
      }),
    ),
    react(),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  css: {
    transformer: "lightningcss",
  },
  server: {
    host: "::",
    port: 8080,
  },
});
