var path = require('path');
globals={};
module.exports=globals;



globals.rootFilename=require.main.filename;
globals.rootmoduleFoldername="pfprototype.io";
globals.rootDirectory=function(){
    return path.dirname(globals.rootFilename)+"/";
}
globals.nodeModuleDirectory=function(){
    return globals.rootDirectory()+"node_modules/";
}
globals.rootModuleDirectory=function(){
    return globals.nodeModuleDirectory()+globals.rootmoduleFoldername+"/";
}