const { resolve } = require("path");

const PWD = process.cwd();

export default {
  root: resolve(PWD, "src"),
  publicDir: resolve(PWD, "public"),
  build: {
    outDir: resolve(PWD, "build"),
  },
};
