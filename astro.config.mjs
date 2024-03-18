import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  site: "https://xouleater.github.io",
  base: '/GuiaTEC',
  adapter: node({
    mode: "standalone"
  })
});