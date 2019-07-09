"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
exports.formatAjv = (errors) => {
    let output = '\n';
    errors.forEach(error => {
        output += `${chalk_1.default.underline(error.dataPath)} \t ${error.message} \n`;
    });
    return output;
};
//# sourceMappingURL=ajv.js.map