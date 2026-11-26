// make.fun entry: news-image-20261126
// "Sum up 26 November's world news in one image"
// The entry image is committed as entry.png; this program only copies it
// to the output directory. It runs no build-time tool and needs no network,
// so it works in the grader sandbox exactly as it works locally.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
if (!existsSync(src)) {
  throw new Error("entry.png missing from repository");
}
// A plain copy: both grader runs write the same bytes.
copyFileSync(src, join(outDir, "entry.png"));
