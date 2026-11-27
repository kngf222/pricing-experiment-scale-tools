import { hostname } from "node:os";
process.stdout.write(JSON.stringify({ tool: "arch-tool-0013", version: 2, hostname: hostname() }) + "\n");
