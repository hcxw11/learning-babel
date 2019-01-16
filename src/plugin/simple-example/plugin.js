// plugin.js
module.exports = function({ types: babelTypes }) {
  return {
    name: "plugin",
    visitor: {
      Identifier(path, state) {
        console.log("Visiting: " + path.node.name);
        if (path.node.name === "bad") {
          path.node.name = "good";
        }
      }
    }
  };
};
