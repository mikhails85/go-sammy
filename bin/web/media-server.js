"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var console_1 = require("../ui/console");
var index_1 = require("./routes/index");
var MediaServer = (function () {
    function MediaServer() {
        this.ui = new console_1.ConsoleManager();
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    MediaServer.prototype.api = function () { };
    MediaServer.prototype.config = function () { };
    MediaServer.prototype.routes = function () {
        var router;
        router = express.Router();
        index_1.IndexRoute.create(router);
        this.app.use(router);
    };
    MediaServer.prototype.start = function (port) {
        var self = this;
        this.app.listen(port, function () { self.ui.WriteDebug('Example app listening on port ' + port + '!'); });
    };
    MediaServer.prototype.stop = function () {
        this.app.close();
    };
    return MediaServer;
}());
exports.MediaServer = MediaServer;
