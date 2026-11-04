// Downloads the Unsplash photos listed in images.json into public/images and writes the photo table in CREDITS.md.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..");
const images = JSON.parse(readFileSync(join(here, "images.json"), "utf8"));
const out = join(root, "public", "images");
mkdirSync(out, { recursive: true });

for (const img of images) {
  const file = join(out, `${img.name}.jpg`);
  if (existsSync(file)) continue;
  const url = `https://images.unsplash.com/${img.id}?w=2200&q=78&fm=jpg&fit=max`;
  execFileSync("curl", ["-sS", "-L", "--fail", "--retry", "4", "-o", file, url], { stdio: "inherit" });
  console.log("saved", img.name);
}

const rows = images
  .map(
    (i) =>
      `| \`public/images/${i.name}.jpg\` | ${i.shows} | ${i.by} | [Unsplash](https://unsplash.com/photos/${i.slug}) | Unsplash License |`,
  )
  .join("\n");

writeFileSync(
  join(root, "CREDITS.md"),
  `# Credits

## Photographs

All photographs are real, free-licence stock pictures from Unsplash, used under the [Unsplash License](https://unsplash.com/license). None is AI-generated.
They stand in for Diorteda's own photography. They do not show Diorteda's shops, stock or team, so swap in the shop's own photos before launch.

| File | Shows | Photographer | Source | Licence |
| --- | --- | --- | --- | --- |
${rows}

## Typefaces

- Google Sans, SIL Open Font License 1.1, self-hosted through \`next/font\`
`,
);
