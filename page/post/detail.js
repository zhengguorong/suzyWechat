var postServer = require('../../server/post.js');

Page({
    data:{
        post:[]
    },
    onLoad:function(params){
        
        var that=this;
        postServer.getPostById(params.id,function(res){
            that.data.post=res
        })
    },
    onReady:function(){
        wx.setNavigationBarTitle({title:'详情'})
    }
    
});
