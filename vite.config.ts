import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

const aliases = [
  "components",
  "types",
  "constant",
  "utils",
  "context",
  "hooks",
  "images",
  "utils",
  "pages",
];

export default defineConfig({
  base: "/",
  plugins: [react(), viteTsconfigPaths()],
  server: {
    open: true,
    port: 3001,
  },
  resolve: {
    alias: aliases.map((alias) => ({
      find: `@${alias}`,
      replacement: resolve(__dirname, `src/${alias}`),
    })),
  },
});
