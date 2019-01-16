import { transformSync } from "@babel/core";
import plugins from "./plugin";
import fs from "fs";
import path from "path";

const trueBasePath = __dirname.replace("/dist", "");
const codeFilePath = path.join(trueBasePath, "temp.js");
const resultFilePath = path.join(trueBasePath, "result.js");

console.log("source code file path: ", codeFilePath);
const code = fs.readFileSync(codeFilePath).toString();

console.log("\n\ntransform before ========\n", code);
const result = transformSync(code, {
  plugins: [plugins]
});

console.log("\n\ntransform after ========\n", result.code);
const resultCode = `// 转译文件: ${codeFilePath}
// 时间: ${new Date().toLocaleString()}
// 以下是转译内容：
${result.code}`;

fs.writeFileSync(resultFilePath, resultCode);
