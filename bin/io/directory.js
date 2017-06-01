"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var shell = require("shelljs");
var Directory = (function () {
    function Directory() {
    }
    Directory.prototype.Current = function () {
        return path.basename(process.cwd());
    };
    Directory.prototype.GetFilesByPattern = function (path, pattern) {
        var files = [];
        shell.cd(path);
        shell.ls(pattern).forEach(function (file) {
            files.push(file);
        });
        return files;
    };
    return Directory;
}());
exports.Directory = Directory;
