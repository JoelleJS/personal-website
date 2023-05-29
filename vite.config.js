import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import legacy from '@vitejs/plugin-legacy'
import VitePluginInjectPreload from 'vite-plugin-inject-preload'

export default defineConfig({
  plugins: [
    legacy(),
    createHtmlPlugin({
      minify: true,
      entry: "src/main.js",
      inject: {
        data: {
          title: "Full-Stack DevOps Engineer | Joëlle van Essen",
          url: "https://joelle.v-essen.nl",
          description: "Java en JavaScript developer in de omgeving Friesland en Groningen"
        },
      },
    }),
    VitePluginInjectPreload({
      files: [
        {
          match: /index-[a-z-0-9]*\.css$/,
          attributes: {
            as: 'style',
          }
        }
      ],
      injectTo: 'head-prepend'
    })
  ],
});
