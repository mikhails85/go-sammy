import { ConsoleManager } from './ui/console';

class App {
  
   ui:ConsoleManager;

   constructor() {
      this.ui = new ConsoleManager();     
   }

   public Run(){
     this.ui.ClearUI();
     this.ui.WriteLogo();
   }
}

let app = new App();
app.Run();