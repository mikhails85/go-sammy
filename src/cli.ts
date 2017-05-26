import { ConsoleManager } from './ui/console';
import { Directory } from './io/directory';
class App {
  
   ui:ConsoleManager;
   directory:Directory;

   constructor() {
      this.ui = new ConsoleManager();   
      this.directory = new Directory();
   }

   public Run(){
     this.ui.ClearUI();
     this.ui.WriteLogo();
     this.ui.WriteInfo('Current Directory:'+this.directory.Current());
   }
}

let app = new App();
app.Run();