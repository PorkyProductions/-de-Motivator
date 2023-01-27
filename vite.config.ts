import { svelte } from "@sveltejs/vite-plugin-svelte";
import { type UserConfig } from "vite";
const config: UserConfig = {
  plugins: [svelte()],
  appType: "mpa",
  base: "/",
  css: {
    devSourcemap: true,
  },
  build: {
    target: "es2017",
    emptyOutDir: false,
    cssCodeSplit: true,
    sourcemap: true,
    minify: "esbuild",
    rollupOptions: {
      treeshake: "recommended",
      input: {
        index: "index.html",
        fourOhFour: "./404.html",
        fiveHundred: "./500.html",
        login: "./login.html",
        signUp: "./signUp.html",
        list: "./list.html",
        credits: "./credits.html",
        // DMV1: './dmv1.html',
      },
      output: {
        dir: "out",
      },
    },
  },
};
export default config
