var postServer = require('../../server/post.js');

Page({
    data:{
        postList:[]
    },
    onLoad:function(){
        var that=this;
        postServer.getPosts(1,10,function(res){
            that.data.postList=res.slice(0,2);
        })
    },
    toDetail:function(){
        wx.navigateTo({url:"detail"});
    }
});
