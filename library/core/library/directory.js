"use strict"

var fs=require("fs");
var path=require("path");

class Directory{
    constructor(file){
        this.files_m=file
   //?     this.file_path=fs.lstatSync(file);
        //http://stackoverflow.com/questions/15630770/node-js-check-if-path-is-file-or-directory
    }
    isFileExist(){
   //?    return this.file_path.isFile(); 
    }
    getPath(){
        return path.dirname(this.files_m);
    }
}

module.exports=new Directory;