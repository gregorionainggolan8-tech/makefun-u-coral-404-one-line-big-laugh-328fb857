import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Big Laugh — entry for u-coral-404-one-line-big-laugh-328fb857.
// The line is a fixed string: no network calls, no model calls at runtime.
const LINE =
  "My grandfather left me his watch in his will — generous of him, since he's still alive and texts me every Sunday asking for it back.";

// Gate: the entry must be 1-200 characters of non-whitespace UTF-8 text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
