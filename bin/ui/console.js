"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require("chalk");
var clear = require("clear");
var figlet = require("figlet");
var ConsoleManager = (function () {
    function ConsoleManager() {
    }
    ConsoleManager.prototype.ClearUI = function () {
        clear();
    };
    ConsoleManager.prototype.WriteLogo = function () {
        console.log(chalk.green(figlet.textSync('Go', {
            font: 'Ogre',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        })));
        console.log(chalk.green(figlet.textSync('       Sammy !', {
            font: 'Ogre',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        })));
    };
    ConsoleManager.prototype.WriteInfo = function (info) {
        console.log(chalk.blue(info));
    };
    return ConsoleManager;
}());
exports.ConsoleManager = ConsoleManager;
