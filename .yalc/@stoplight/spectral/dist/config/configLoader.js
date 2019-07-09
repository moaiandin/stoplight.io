"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("@stoplight/path");
const fs = require("fs");
const config_1 = require("../types/config");
const DEFAULT_RULESET_FILE = /^\.?spectral\.(?:ya?ml|json)$/;
exports.createEmptyConfig = () => ({
    encoding: 'utf8',
    format: config_1.OutputFormat.STYLISH,
    verbose: false,
});
exports.getDefaultRulesetFile = (directory) => {
    return new Promise(resolve => {
        fs.readdir(directory, (err, files) => {
            if (err === null) {
                for (const file of files) {
                    if (DEFAULT_RULESET_FILE.test(file)) {
                        resolve(path_1.join(directory, file));
                        return;
                    }
                }
            }
            resolve(null);
        });
    });
};
//# sourceMappingURL=configLoader.js.map