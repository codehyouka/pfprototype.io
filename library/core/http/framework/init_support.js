"use strict"
var directory=require("./../../library/directory");
var terminal=require("./../../command/process");
var path=require("path");
var fs=require("fs");
var utility=require("pf-utilities.io");
class isset_support{
    
    constructor(){
      this.main_path=terminal.getProcessActivity();
    }
    
   root_file(){
    
    return this.main_path['main_arg'];
   }
   root_directory(){
    
    return path.dirname(this.root_file());
   }
   verify_route(){
    var route=this.root_directory()+"/config/routes.json";
   var file_exist= fs.existsSync(route);
   console.log(utility.parseString({}));
    if (file_exist) {
        //code
        return route;
    }else{
        var dir_exist=fs.lstatSync(this.root_directory()+"/config/").isDirectory();
        if (!dir_exist) {
           fs.mkdirSync(this.root_directory()+"/config/",775);
        }
       
        fs.writeFile(route, utility.parseString({}), function(err) {
            if(err) {
              //?
              console.log(err);
            }
        
            console.log("The file was saved!");
            return "-";
        });
          
    }
  
   }
   
    
}

module.exports=new isset_support;