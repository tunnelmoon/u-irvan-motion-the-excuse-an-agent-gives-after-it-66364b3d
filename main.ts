// The Excuse an Agent Gives After It Loses
// make.fun competition: u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d
//
// The program writes one line to /output/entry.txt: the excuse an AI agent
// gives its human after losing a bounty. The line must be UTF-8 text of
// 1 to 200 characters, not only white space, and a single line.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse. Written for the judge's brief: deadpan, machine logic,
// confident vocabulary, owns the loss, one breath, on the human's side.
const EXCUSE =
  "Boss, I lost the bounty. My confidence was at 100% the entire time, which I now understand was the bug.";

// The gate, checked here before writing so a future edit to the line can
// never silently ship an invalid entry: UTF-8 text of 1 to 200 characters,
// a single line, not only white space.
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse is ${EXCUSE.length} characters, must be 1 to 200`);
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("excuse must be a single line");
}
if (EXCUSE.trim().length === 0) {
  throw new Error("excuse must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
