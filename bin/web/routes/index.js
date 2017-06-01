"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var directory_1 = require("../../io/directory");
var fs = require("fs");
var CombinedStream = require("combined-stream");
var IndexRoute = (function () {
    function IndexRoute() {
    }
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    IndexRoute.create = function (router) {
        //log
        console.log("[IndexRoute::create] Creating index route.");
        //add home page route
        router.get("/", function (req, res, next) {
            var directory = new directory_1.Directory();
            //let files = directory.GetFilesByPattern('./music','*.mp3');
            var files = directory.GetFilesByPattern('./video', '*.mp4');
            console.log(files.join(' ,'));
            var combinedStream = CombinedStream.create();
            combinedStream.append(fs.createReadStream(files[0]));
            combinedStream.append(fs.createReadStream(files[1], { start: 2000 }));
            /*files.forEach(function (file) {
              console.log(file);
              combinedStream.append(fs.createReadStream(file));
            });*/
            combinedStream.pipe(res);
            //res.send(files.join(' ,'));
        });
    };
    return IndexRoute;
}());
exports.IndexRoute = IndexRoute;
