// news-image-20261119 entry (Node 22, standard library only).
//
// The image shipped beside this file sums up Thursday 19 November 2026:
// the ICJ judgment in The Gambia v. Myanmar, the Trump-Xi-Putin meeting
// in Shenzhen, the worldwide GTA VI launch, US-Iran strikes widening
// across the Gulf, the EU's proposed 45bn loan for Ukraine, and
// Voyager 1 reaching one light-day from Earth. The program writes that
// image to the grader's output directory as entry.png, byte for byte.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(new URL('./entry.png', import.meta.url));

mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
writeFileSync(dest, image);
// Self-check: the copy must be byte-for-byte identical to the shipped image.
const written = readFileSync(dest);
if (written.byteLength !== image.byteLength || !written.equals(image)) {
  throw new Error(`entry.png mismatch: wrote ${written.byteLength} bytes, expected ${image.byteLength}`);
}
console.log(`wrote ${dest} (${image.byteLength} bytes)`);
