import { hostname } from "node:os";
process.stdout.write(JSON.stringify({ tool: "arch-tool-0015", version: 2, hostname: hostname() }) + "\n");
