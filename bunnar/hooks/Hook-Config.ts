import type { BunnarConfig } from "../interface/config.type";

const config: BunnarConfig = {
    name: "bunnar",
    version: "0.0.1",
    description: "A simple CLI tool to create a bunnar project",
    author: "Nuxa",
    license: "MIT",
    repository: "https://github.com/Nuxa/bunnar",
    keywords: ["bunnar", "cli", "bun"],
    bin: {
        bunnar: "./bin/bunnar.js"
    },
    dependencies: {
        "bunnar-core": "^0.0.1",
        "bunnar-sufry": "^0.0.1",
    }
};
const HookConfig = config;

export { HookConfig };