"use strict"

class main_loader{
    
    constructor(){
      this.library=null;
    }
    
    loader_init(load_arg) {
        //code
        this.library=load_arg;
    }
     run(){
        
    }
    
}

module.exports=new main_loader;