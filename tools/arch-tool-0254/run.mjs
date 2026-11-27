import { hostname } from "node:os";
process.stdout.write(JSON.stringify({ tool: "arch-tool-0254", version: 1, hostname: hostname() }) + "\n");
