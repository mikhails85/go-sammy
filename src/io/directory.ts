import * as path from 'path';
import * as shell from 'shelljs';

export class Directory{
  constructor() {}
  
  Current():string{
    return path.basename(process.cwd());
  }
  
  GetFilesByPattern(path:string, pattern:string):string[]{
    let files:string[] = [];
    shell.cd(path)
    shell.ls(pattern).forEach(function (file) {
      files.push(file);
    });
    return files;
  }
}