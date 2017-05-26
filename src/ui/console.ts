import * as chalk from 'chalk';
import * as clear from 'clear';
import * as figlet from 'figlet';

export class ConsoleManager {
  constructor() {}

  ClearUI() {
    clear();
  }

  WriteLogo() {
    console.log(
      chalk.green(
        figlet.textSync('Go', {
          font: 'Ogre',
          horizontalLayout: 'default',
          verticalLayout: 'default'
        })
      )
    );
    console.log(
      chalk.green(
        figlet.textSync('       Sammy !', {
          font: 'Ogre',
          horizontalLayout: 'default',
          verticalLayout: 'default'
        })
      )
    );
  }

  WriteInfo(info: string) {
    console.log(
      chalk.blue(
        info
      )
    );
  }

}