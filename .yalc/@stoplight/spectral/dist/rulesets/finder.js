"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path = require("@stoplight/path");
const fs = require("fs");
const map_1 = require("./map");
const SPECTRAL_SRC_ROOT = path.join(__dirname, '..');
function findRuleset(from, to) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const mapped = map_1.rulesetsMap.get(to);
        if (mapped !== void 0) {
            to = mapped;
        }
        if (path.isURL(to) || path.isAbsolute(to)) {
            return to;
        }
        if (path.isURL(from)) {
            return path.join(from, '..', to);
        }
        try {
            const targetPath = path.join(from, '..', to);
            if (yield exists(targetPath)) {
                return targetPath;
            }
        }
        catch (_a) {
        }
        if (SPECTRAL_SRC_ROOT.length > 0 && SPECTRAL_SRC_ROOT !== '/') {
            try {
                const targetPath = path.join(SPECTRAL_SRC_ROOT, to.replace('@stoplight/spectral/', './'));
                if (yield exists(targetPath)) {
                    return targetPath;
                }
            }
            catch (_b) {
            }
        }
        try {
            return require.resolve(to);
        }
        catch (_c) {
            return path.join('https://unpkg.com/', to.replace('@stoplight/spectral', '@stoplight/spectral@4.0.0-beta.9'));
        }
    });
}
exports.findRuleset = findRuleset;
function exists(uri) {
    return new Promise(resolve => {
        fs.access(uri, fs.constants.F_OK, err => {
            resolve(err === null);
        });
    });
}
//# sourceMappingURL=finder.js.map