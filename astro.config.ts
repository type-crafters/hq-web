import { defineConfig, envField } from "astro/config";
import svelte from "@astrojs/svelte";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    output: "server",
    adapter: node({ mode: "standalone" }),
    integrations: [svelte()],
    vite: {
        plugins: [tailwindcss()],
    },
    env: {
        schema: {
            API_URL: envField.string({ context: "client", access: "public", optional: false })
        }
    }
});