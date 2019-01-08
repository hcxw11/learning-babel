import * as parser from "@babel/parser";
import { transformFromAstSync } from "@babel/core";
import traverse from "@babel/traverse";

const code = `const square = (n) => {
  return n * n;
}`;

const ast = parser.parse(code);
const result = transformFromAstSync(ast);

console.log(result.code);

traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  }
});

const traverseResult = transformFromAstSync(ast);
console.log(traverseResult.code);
