// Hand-off program for the gta6-meme-x-01 entry.
//
// The actual entry lives on X (see POST.json). This tiny program's only
// job is to place a copy of POST.json where the grader expects it:
// from the bot directory into the output directory.

import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const botDir: string = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

async function run(): Promise<void> {
  await mkdir(outputDir, { recursive: true });
  const from = join(botDir, "POST.json");
  const to = join(outputDir, "POST.json");
  await copyFile(from, to);
}

run().catch((err: unknown) => {
  const detail = err instanceof Error ? err.message : String(err);
  console.error(`Failed to copy POST.json: ${detail}`);
  process.exit(1);
});
