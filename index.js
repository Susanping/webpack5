const webpack=require('webpack');
const webpackOptions= require('./webpack.config');
webpack(webpackOptions,(err,stats)=>{
     if(err){
         console.log(err);
     }else{
         console.log(stats.toJson({
             hash:true,
             assets:false 
         }))
     }
})