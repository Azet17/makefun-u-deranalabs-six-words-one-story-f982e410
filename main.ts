import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six Words, One Story — make.fun entry
// A complete story in exactly six words: a lifetime of waiting,
// ended in one quiet sentence.
const STORY = "She waited decades. He never returned.";

// Self-check: the gate requires exactly six words and 1-60 UTF-8 chars.
// Fail loudly instead of submitting a story that cannot pass.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`Story must be exactly 6 words, got ${words.length}: ${STORY}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`Story must be 1-60 characters, got ${STORY.length}`);
}

const outputDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), STORY, "utf8");
console.log(`Wrote ${STORY.length} chars to ${join(outputDir, "entry.txt")}`);
