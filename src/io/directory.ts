import * as path from 'path';

export class Directory{
  constructor() {}
  
  Current():string{
    return path.basename(process.cwd());
  }
}