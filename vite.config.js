import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// The CSP in index.html blocks the inline <style> tags and scripts Vite injects
// in dev mode, so strip it for `npm run dev` only. Production builds keep it.
const stripCspInDev = {
  name: "strip-csp-in-dev",
  apply: "serve",
  transformIndexHtml: (html) =>
    html.replace(/<meta http-equiv="Content-Security-Policy"[\s\S]*?>/, ""),
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [stripCspInDev, svgr(), react()],
});
