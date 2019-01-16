var myPlugin = require("./plugin");

const presets = [["@babel/env"]];

module.exports = {
  presets,
  plugins: [myPlugin]
};
