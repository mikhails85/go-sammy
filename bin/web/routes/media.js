"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var directory_1 = require("../../io/directory");
var fs = require("fs");
var CombinedStream = require("combined-stream");
var MediaRoutes = (function () {
    function MediaRoutes() {
    }
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    MediaRoutes.create = function (router) {
        router.get("/media/", function (req, res, next) {
            var directory = new directory_1.Directory();
            var files = directory.GetFilesByPattern('./music', '*.mp3');
            console.log(files.join(' ,'));
            var combinedStream = CombinedStream.create();
            files.forEach(function (file) {
                console.log(file);
                combinedStream.append(fs.createReadStream(file));
            });
            combinedStream.pipe(res);
            //res.send(files.join(' ,'));
        });
    };
    return MediaRoutes;
}());
exports.MediaRoutes = MediaRoutes;
