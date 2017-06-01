import { NextFunction, Request, Response, Router } from "express";
import { Directory } from '../../io/directory';
import * as fs from "fs";
import * as CombinedStream from 'combined-stream';

export class MediaRoutes {
  /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(router: Router) {    
    router.get("/media/", (req: Request, res: Response, next: NextFunction) => {
      let directory = new Directory();
      let files = directory.GetFilesByPattern('./music','*.mp3');
      
      console.log(files.join(' ,'));
      var combinedStream = CombinedStream.create();      
      files.forEach(function (file) {
        console.log(file);
        combinedStream.append(fs.createReadStream(file));
      });
      
      combinedStream.pipe(res);      
      //res.send(files.join(' ,'));
    });
  }
}