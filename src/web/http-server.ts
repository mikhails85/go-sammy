import * as express from "express";
import * as path from "path";
import { ConsoleManager } from '../ui/console';
import { MediaRoutes } from "./routes/media";
import { HtmlRoutes } from "./routes/html";
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import { AppServerModuleNgFactory } from './wwwroot/aot/app/app.server.module.ngfactory'
import { readFileSync } from 'fs';
import { join } from 'path';


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

  private config() {
    enableProdMode();
    let template = readFileSync(join(__dirname, 'wwwroot', 'index.html')).toString();
    this.app.engine('html', (_, options, callback) => {
      const opts = { document: template, url: options.req.url };

      renderModuleFactory(AppServerModuleNgFactory, opts)
        .then(html => callback(null, html));
    });
    this.app.set('view engine', 'html');
    this.app.set('views', 'src/web/wwwroot')

    this.app.get('*.*', express.static(join(__dirname, 'wwwroot')));
  }

  private routes() {
    let router: express.Router;
    router = express.Router();
    
    MediaRoutes.create(router);
    HtmlRoutes.create(router);
    
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