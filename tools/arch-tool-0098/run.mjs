import { hostname } from "node:os";
process.stdout.write(JSON.stringify({ tool: "arch-tool-0098", version: 1, hostname: hostname() }) + "\n");
