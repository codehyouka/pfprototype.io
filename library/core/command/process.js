"use strict"

class initloader{
    
   constructor() {
  
    
    }

    
    getProcessActivity(){
        var pr_arry=[];
        var pr_list=[];
        process.argv.forEach(function (val, index, array) {
        //    console.log(index + ': ' + val);
            if (index<=1) {
                //code
                pr_arry[index]=val;
            }else{
                pr_list.push(val);
            }
        
          });
        return {
            "node_folder":pr_arry[0],
            "main_arg":pr_arry[1],
             "arg":pr_list,
        };
    }
    
}

module.exports=new initloader;