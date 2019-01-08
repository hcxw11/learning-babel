import { parse } from "@babel/parser";
import generate from "@babel/generator";

const a = "var a = 1;";
const b = "var b = 2;";
const astA = parse(a, { sourceFilename: "a.js" });
const astB = parse(b, { sourceFilename: "b.js" });
const ast = {
  type: "Program",
  body: [].concat(astA.program.body, astB.program.body)
};

const result = generate(
  ast,
  { sourceMaps: true },
  {
    "a.js": a,
    "b.js": b
  }
);

const { code, map } = result;

console.log(code, map);
