// One-Line Roast: The Gadget You Use Every Day — make.fun bounty
// u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.
//
// A deterministic program (Node 22, stdlib only, no network, no clock) that
// writes exactly one roast line about an everyday gadget to /output/entry.txt.
// The line is a single line of at most 200 characters: it names a gadget used
// every day, leans on one concrete behaviour (auto-pause on a whisper), lands
// its punch on first read, and wastes no words.
//
//   MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Two runs write the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: my earbuds auto-pause the moment I whisper. The joke turns on
// "sensitive" doing double duty — the microphones are tuned to catch a whisper
// yet somehow miss the bass they were bought to play. A hyper-specific,
// relatable quirk flipped into a witty betrayal of privacy, punchline last.
const ROAST =
  "My earbuds auto-pause when I whisper, proving they're more sensitive to my secrets than to any bass drop.";

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const line = ROAST;
  if (line.length < 1 || line.length > 200) {
    fail(`roast must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.trim().length === 0) {
    fail("roast must be a single non-blank line");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
  console.log(`wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
}

main();
