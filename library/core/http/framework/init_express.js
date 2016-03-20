"use strict"


var init_support=require("./init_support");
class main_loader{
    
    constructor(){
      this.library=null;
    }
    
    
    loader_init(load_arg) {
        //code
        this.library=load_arg;
    }
    run(){
        var route_ini=init_support.verify_route();
        console.log(route_ini);
    }
   
    
}

module.exports=new main_loader;