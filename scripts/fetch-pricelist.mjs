/* eslint-env node */
// Fetches the latest price list CSV published on Marketino and saves it as
// src/data/pricelist.json, which the /prices page renders.
//
// Runs automatically before `npm run build`. Marketino doesn't allow browsers
// to read its files from other sites (no CORS header), so this has to happen
// at build time. If Marketino can't be reached, the existing JSON is kept and
// the build continues with the last known prices.

import { readFile, writeFile } from "node:fs/promises";

const PAGE_URL =
  process.env.PRICELIST_PAGE_URL ||
  "https://cjenik.marketino.hr/olea-obrt-za-usluge-vl-luka-majstorovic-novalja-mociscak-14-rkc2zz7ydt";
const OUT_FILE = new URL("../src/data/pricelist.json", import.meta.url);

// Splits CSV text into rows of fields, handling quoted fields with commas.
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += c;
    }
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((f) => f.trim() !== ""));
}

const toNumber = (value) => {
  const n = parseFloat(String(value).replace(",", "."));
  return Number.isFinite(n) ? n : null;
};

// Marketino names files like ..._20261016_0000_usluge.csv; newest name wins.
function findLatestCsvUrl(html) {
  const links = [...html.matchAll(/(?:href|src)\s*=\s*["']([^"']+\.csv)["']/gi)]
    .map((m) => new URL(m[1].replace(/&amp;/g, "&"), PAGE_URL + "/").href)
    .filter((url) => /_usluge\.csv$/i.test(url));
  const stamp = (url) => url.match(/_(\d{8}_\d{4})_[^/]*\.csv$/)?.[1] ?? "";
  return links.sort((a, b) => stamp(b).localeCompare(stamp(a)))[0] ?? null;
}

function toPricelist(rows, csvUrl) {
  const [header, ...body] = rows;
  const anchorDate =
    header.find((h) => /SIDRENA/i.test(h))?.match(/\d{1,2}\.\d{1,2}\.\d{4}/)?.[0] ??
    null;

  return {
    pageUrl: PAGE_URL,
    csvUrl,
    anchorDate,
    fetchedAt: new Date().toISOString(),
    items: body.map(([name, price, salePrice, saleName, anchorPrice]) => ({
      name: name.trim(),
      price: toNumber(price),
      salePrice: toNumber(salePrice),
      saleName: saleName?.trim() || null,
      anchorPrice: toNumber(anchorPrice),
    })),
  };
}

async function main() {
  const pageRes = await fetch(PAGE_URL);
  if (!pageRes.ok) throw new Error(`price list page returned ${pageRes.status}`);
  const csvUrl = findLatestCsvUrl(await pageRes.text());
  if (!csvUrl) throw new Error("no _usluge.csv link found on the price list page");

  const csvRes = await fetch(csvUrl);
  if (!csvRes.ok) throw new Error(`CSV returned ${csvRes.status}`);
  const pricelist = toPricelist(parseCsv(await csvRes.text()), csvUrl);
  if (pricelist.items.length === 0) throw new Error("CSV has no price rows");

  // Only rewrite the file when the prices changed, so builds don't create
  // noise in git just because the fetch time moved.
  const previous = await readFile(OUT_FILE, "utf8").then(JSON.parse, () => null);
  const same =
    previous &&
    JSON.stringify(previous.items) === JSON.stringify(pricelist.items) &&
    previous.anchorDate === pricelist.anchorDate &&
    previous.csvUrl === pricelist.csvUrl;
  if (same) {
    console.log(`Price list unchanged (${pricelist.items.length} items).`);
    return;
  }

  await writeFile(OUT_FILE, JSON.stringify(pricelist, null, 2) + "\n");
  console.log(`Price list updated from ${csvUrl} (${pricelist.items.length} items).`);
}

main().catch((err) => {
  console.warn(`WARNING: could not update price list: ${err.message}`);
  console.warn("Building with the last saved prices in src/data/pricelist.json.");
});
