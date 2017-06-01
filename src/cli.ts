import { ConsoleManager } from './ui/console';
import { Directory } from './io/directory';
import { HttpServer } from './web/http-server';
class App {
  
   ui:ConsoleManager;
   directory:Directory;
   server:HttpServer; 
   constructor() {
      this.ui = new ConsoleManager();   
      this.directory = new Directory();
      this.server = new HttpServer();
   }

   public Run(){
     this.ui.ClearUI();
     this.ui.WriteLogo();
     this.ui.WriteInfo('Current Directory:'+this.directory.Current());
     this.server.start(8800);
   }
}

let app = new App();
app.Run();