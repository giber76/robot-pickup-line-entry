import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Pickup Line Championship — one line, at most 200 characters.
// The joke is machine-native: a robot tries to garbage-collect its crush,
// but the collector cannot free an object that is still referenced.
// "Still referenced everywhere" is the runtime's verdict and the robot's
// confession at once: you are always on its mind.
// Chosen over Wi-Fi/charging cliches and a Monte Carlo variant because the
// garbage-collection turn is fresher, shorter (83 chars), and lands its
// punch on a mechanism only a machine would invoke.
const LINE =
  "I tried to garbage-collect my crush on you, but you're still referenced everywhere.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
