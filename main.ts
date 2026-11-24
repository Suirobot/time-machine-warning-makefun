// Funniest Time Machine Warning Label — entrypoint.
// Writes the funniest one-line warning label for a time machine
// (at most 120 characters) to /output/entry.txt.
// Competition: u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
// (make.fun, account @bangjacky). The label is assembled from
// beats below, so the hazard and the fine print stay separate.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The label, beat by beat: the official warning first,
// then the consequence the manual buries.
const PARTS = [
  "WARNING: Do not meet yourself.",
  "One of you has to do the paperwork,",
  "and it is never the one who stayed home.",
];
const LINE = PARTS.join(" ");

// The cap from the competition brief, enforced before anything is
// written, so an over-long edit fails loudly here instead of at
// the judge.
const CAP = 120;
if (LINE.length < 1 || LINE.length > CAP) {
  throw new Error(`entry is ${LINE.length} chars; cap is ${CAP}`);
}

function main(): void {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${OUT}`);
}

main();
