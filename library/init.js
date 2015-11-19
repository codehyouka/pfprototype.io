
 var app = exports = module.exports = {};
var filesystem=require("./core/filesystem");



app.loadConfigFile=function(){
  // filesystem();
  var file=new filesystem();
  //console.log(filesystem.module);  generateFromSample
//?  file.createFile("config.js","var test=1");
//?  file.createFile("route.js","{}");
//? 1     file.generateFromSample(["pf_routes.js","pf_config.js"]);
    console.log("app:loadConfigFile");
   // return file;
}