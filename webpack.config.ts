import Path from "path";

import { base } from "./config/webpack.config";

const entry = Path.resolve(__dirname, "src");
const template = Path.resolve(__dirname, "src/static/index.html");
const favicon = Path.resolve(__dirname, "src/static/favicon.ico");
const path = Path.resolve(__dirname, "build");

module.exports = base({ entry, favicon, path, template });
