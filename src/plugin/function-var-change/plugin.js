// 全局变量也会受到影响
// let paramName;
// const MyVisitor = {
//   FunctionDeclaration(path) {
//     const param = path.node.params[0];
//     paramName = param.name;
//     param.name = "x";
//   },

//   Identifier(path) {
//     if (path.node.name === paramName) {
//       path.node.name = "x";
//     }
//   }
// };

// 使用递归的方式来转化变量名，全局变量不会受到影响
const updateParamNameVisitor = {
  Identifier(path) {
    console.log("Identifier", path.node.name, this);
    if (path.node.name === this.paramName) {
      path.node.name = "x";
    }
  }
};

const MyVisitor = {
  FunctionDeclaration(path) {
    console.log("FunctionDeclaration");
    const param = path.node.params[0];
    const paramName = param.name;
    param.name = "x";

    path.traverse(updateParamNameVisitor, { paramName });
  }
};

module.exports = function({ types: babelTypes }) {
  return {
    visitor: MyVisitor
  };
};
