const fs = require("fs");
const path = require("path");
function config() {
    const masterConfigFile = path.join(dirname, "master.config.js");
    const localConfigFile = path.join(dirname, "local.config.js");
    if (fs.existsSync(localConfigFile)) {
        return require("./local.config");
    } else if (fs.existsSync(masterConfigFile)) {
        return require("./master.config");
    }
}
const c = config();
module.exports = c;