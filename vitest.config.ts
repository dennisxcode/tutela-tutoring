import { defineConfig } from "vitest/config";
import path from "node:path";

// Vitest 4 runs on Vite 8, which transforms with oxc rather than esbuild, and
// handles JSX itself. The old setup added @vitejs/plugin-react, but that plugin
// pinned its own Vite 5 — so its JSX transform was never applied to the files
// Vitest actually loaded, and every .tsx suite failed to parse. Configuring oxc
// directly is both the fix and one fewer dependency; the plugin is now removed
// rather than left alongside the oxc config, where it does nothing.
//
// `jsx.runtime` has to be set here because tsconfig.json declares
// `"jsx": "preserve"`, which Next requires and which leaves JSX untransformed.
export default defineConfig({
  oxc: { jsx: { runtime: "automatic", importSource: "react" } },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, ".") },
  },
});
