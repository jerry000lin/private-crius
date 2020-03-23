const path = require("path");
const antdVariable = require("./config/ant-design-variable");
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: antdVariable,
        javascriptEnabled: true
      }
    }
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./config/themes.less")]
    }
  }
};
