"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var console_1 = require("../ui/console");
var media_1 = require("./routes/media");
var HttpServer = (function () {
    function HttpServer() {
        this.ui = new console_1.ConsoleManager();
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    HttpServer.prototype.api = function () { };
    HttpServer.prototype.config = function () { };
    HttpServer.prototype.routes = function () {
        var router;
        router = express.Router();
        media_1.MediaRoutes.create(router);
        this.app.use(router);
    };
    HttpServer.prototype.start = function (port) {
        var _this = this;
        this.app.listen(port, function () { _this.ui.WriteDebug('Example app listening on port ' + port + '!'); });
    };
    HttpServer.prototype.stop = function () {
        this.app.close();
    };
    return HttpServer;
}());
exports.HttpServer = HttpServer;
