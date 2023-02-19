const path = require("path");

module.exports = {
  launch: {
    userDataDir: path.join(process.cwd(), ".puppeteer-cache"),
  },
};
