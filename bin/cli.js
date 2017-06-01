"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("./ui/console");
var directory_1 = require("./io/directory");
var http_server_1 = require("./web/http-server");
var App = (function () {
    function App() {
        this.ui = new console_1.ConsoleManager();
        this.directory = new directory_1.Directory();
        this.server = new http_server_1.HttpServer();
    }
    App.prototype.Run = function () {
        this.ui.ClearUI();
        this.ui.WriteLogo();
        this.ui.WriteInfo('Current Directory:' + this.directory.Current());
        this.server.start(8800);
    };
    return App;
}());
var app = new App();
app.Run();
