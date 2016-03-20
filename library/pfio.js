"use strict"
var init=require("./init");
var terminal=require("./core/command/terminal");
var httpserver=require("./core/http/httpserver");


//--
//var init_terminal=require("./core/command/framework/terminal");
//var init_httpserver=require("./core/http/framework/init_express");
//--
var glb_var={};
glb_var['command']=false;
glb_var['http']=false;


var library_init={
   "command":{
      "libary":   require("./core/command/framework/terminal"),
      "support":   terminal,
      },
   "http":{
      "libary":   require("./core/http/framework/init_express"),
      "support":   httpserver,
      }
}
module.exports={
      command:function(){
      //?   terminal.setActive();
         glb_var['command']=true;
      //?   console.log(terminal.getProcessActivity());
      },
      http:function(){
          glb_var['http']=true;
         return httpserver;
      },
      run:function(){
         console.log(glb_var);
         for(var it in glb_var){
            var it_val=glb_var[it];
            if (it_val) {
               var main_c=library_init[it].libary;
               main_c.loader_init(library_init[it].support);
               main_c.run();
            }
         }
      }
};

