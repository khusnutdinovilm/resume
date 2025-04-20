import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],

  base: process.env.NODE_ENV === "production" ? "/resume/" : "/",

  resolve: {
    alias: {
      "assets/": fileURLToPath(new URL("./src/assets/", import.meta.url)),
      "styles/": fileURLToPath(new URL("./src/styles/", import.meta.url)),
      "composable/": fileURLToPath(new URL("./src/composable/", import.meta.url)),
      "ui/": fileURLToPath(new URL("./src/components/ui/", import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        additionalData: `
          @use "styles/variables/index.scss" as v;
          @use "styles/mixins/index.scss" as mx;
        `,
      },
    },
  },
});
