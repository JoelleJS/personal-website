import { defineConfig } from "vite";

import { createHtmlPlugin } from "vite-plugin-html";
import VitePluginInjectPreload from "vite-plugin-inject-preload";

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      entry: "src/main.js",
      inject: {
        data: {
          title: "Full-Stack DevOps Engineer | Joëlle van Essen",
          url: "https://joelle.v-essen.nl",
        },
      },
    }),
    VitePluginInjectPreload({
      files: [
        {
          match: /bootstrap-icons-[a-z0-9]*\.woff2$/,
          attributes: {
            as: "font",
            type: "font/woff2",
          },
        },
      ],
    }),
  ],
});
