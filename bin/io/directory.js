"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var Directory = (function () {
    function Directory() {
    }
    Directory.prototype.Current = function () {
        return path.basename(process.cwd());
    };
    return Directory;
}());
exports.Directory = Directory;
