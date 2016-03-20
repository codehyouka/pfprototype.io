"use strict"
var express=require("express");
class initloader{
    
    constructor(){
        this.i_port=3000;
        this.i_host="127.0.0.1";
    }
    
    setPort(port){
        this.i_port=port;
    }
    getPort(){
        return this.i_port;
    }
    setHost(host){
        this.i_host=host;
    }
    getHost(host){
        return this.i_host;
    }
    get getExpressModule(){
        return express;
    }
    
}

module.exports=new initloader;