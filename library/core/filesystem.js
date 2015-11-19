var fs=require("fs");
var utilss=require("./utils_init");
module.exports=FileSystem;

function FileSystem(args) {
    //code
    console.log(utilss.rootDirectory());
    console.log("FileSystem:");
}

FileSystem.prototype.createFile=function(files,contents){

  fs.access(utilss.rootDirectory()+"/"+files, fs.R_OK | fs.W_OK, function (err) {
          if (err) {
            
        fs.writeFile(utilss.rootDirectory()+files, contents, function(err) {
           if(err) {
        
         return console.log(err);
             }else{
           console.log("Generating a filename:"+files);
          }
    
   
            }); 
          }
    });

    
}

FileSystem.prototype.generateFromSample=function(files){
    var main=this;
//    var files_array=
   
   (function(files){
        var files_split=files.split(".");
    if (files_split.length!=2) {
        //code
        return false;
    }
    var file_sample=files_split[0];
   fs.readFile(utilss.rootModuleDirectory()+"library/sample/"+file_sample+".test", 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }else{
        console.log(data);
        main.createFile(files,data);
      }
      
        });
   })(files_split);
    
}