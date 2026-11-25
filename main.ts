// make.fun entry news-image-20261124 — "one image, one day of news".
//
// The front page is prepared offline and committed as entry.png next to this
// file (1024x1024, JPEG payload, comfortably under the 1 MiB cap). This
// program has no rendering step: it validates the asset and copies it into
// $MAKEFUN_OUTPUT_DIR (default /output) as entry.png. Copying the same bytes
// every time is what keeps repeated runs byte-identical.

import { copyFile, mkdir, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SIZE_LIMIT = 1_048_576;

async function main() {
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const source = join(scriptDir, "entry.png");
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const destination = join(outputDir, "entry.png");

  const { size } = await stat(source);
  if (size > SIZE_LIMIT) {
    throw new Error(`entry.png is ${size} bytes, over the ${SIZE_LIMIT} byte limit`);
  }

  await mkdir(outputDir, { recursive: true });
  await copyFile(source, destination);
  console.log(`entry.png (${size} bytes) -> ${destination}`);
}

await main();
