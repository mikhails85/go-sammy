"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var console_1 = require("../ui/console");
var media_1 = require("./routes/media");
var html_1 = require("./routes/html");
require("reflect-metadata");
require("zone.js/dist/zone-node");
var platform_server_1 = require("@angular/platform-server");
var core_1 = require("@angular/core");
var app_server_module_ngfactory_1 = require("./wwwroot/app/app.server.module.ngfactory");
var fs_1 = require("fs");
var path_1 = require("path");
var HttpServer = (function () {
    function HttpServer() {
        this.ui = new console_1.ConsoleManager();
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    HttpServer.prototype.api = function () { };
    HttpServer.prototype.config = function () {
        core_1.enableProdMode();
        var template = fs_1.readFileSync(path_1.join(__dirname, 'wwwroot', 'index.html')).toString();
        this.app.engine('html', function (_, options, callback) {
            var opts = { document: template, url: options.req.url };
            platform_server_1.renderModuleFactory(app_server_module_ngfactory_1.AppServerModuleNgFactory, opts)
                .then(function (html) { return callback(null, html); });
        });
        this.app.set('view engine', 'html');
        this.app.set('views', 'src/web/wwwroot');
        this.app.get('*.*', express.static(path_1.join(__dirname, 'wwwroot')));
    };
    HttpServer.prototype.routes = function () {
        var router;
        router = express.Router();
        media_1.MediaRoutes.create(router);
        html_1.HtmlRoutes.create(router);
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
