import { transformSync } from "@babel/core";
import plugins from "./simple-example/plugin";

const code = `
    // index.js
    let bad = true;
  `;

console.log("transform before ========\n", code);

const result = transformSync(code, {
  plugins: [plugins]
});

console.log("transform after ========\n", result.code);
