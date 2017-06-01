import * as express from "express";
import * as path from "path";
import { ConsoleManager } from '../ui/console';
import { MediaRoutes } from "./routes/media";

export class HttpServer {
  
  private app: express.Application;
  private ui:ConsoleManager;
  
  constructor() {
    this.ui = new ConsoleManager();
    this.app = express();
    this.config();
    this.routes();
    this.api();    
  }

  private api() {}

  private config() {}

  private routes() {
    let router: express.Router;
    router = express.Router();
    
    MediaRoutes.create(router);

    this.app.use(router);
  }

  public start(port:number):void
  {   
    this.app.listen(port,() => {this.ui.WriteDebug('Example app listening on port '+port+'!');});
  }

  public stop ():void{
    this.app.close();
  }

}