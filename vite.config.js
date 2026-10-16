import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { readFileSync } from "node:fs";

// The CSP in index.html blocks the inline <style> tags and scripts Vite injects
// in dev mode, so strip it for `npm run dev` only. Production builds keep it.
const stripCspInDev = {
  name: "strip-csp-in-dev",
  apply: "serve",
  transformIndexHtml: (html) =>
    html.replace(/<meta http-equiv="Content-Security-Policy"[\s\S]*?>/, ""),
};

const escapeAttr = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");

// Puts the price list links into the plain HTML so crawlers that don't run
// JavaScript can find them: <link rel="alternate"> tags in the head, and
// fallback links inside #root that React replaces once the app loads.
// Reads src/data/pricelist.json, which scripts/fetch-pricelist.mjs refreshes
// before each build.
const pricelistLinks = {
  name: "pricelist-links",
  transformIndexHtml(html) {
    const { pageUrl, csvUrl } = JSON.parse(
      readFileSync(new URL("./src/data/pricelist.json", import.meta.url), "utf8")
    );
    const page = escapeAttr(pageUrl);
    const csv = escapeAttr(csvUrl);
    return html
      .replace(
        "</head>",
        `  <link rel="alternate" type="text/html" href="${page}" title="Cjenik usluga" />\n` +
          `  <link rel="alternate" type="text/csv" href="${csv}" title="Cjenik usluga (CSV)" />\n` +
          "</head>"
      )
      .replace(
        '<div id="root"></div>',
        `<div id="root"><a href="${page}">Cjenik usluga</a> <a href="${csv}">Cjenik usluga (CSV)</a></div>`
      );
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [stripCspInDev, pricelistLinks, svgr(), react()],
});
