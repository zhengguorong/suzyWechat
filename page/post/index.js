var postServer = require('../../server/post.js');

Page({
    data:{
        postList:[]
    },
    onLoad:function(){
        var that=this;
        postServer.getPosts(1,10,function(res){
            that.data.postList=res;
        })
    },
    toDetail:function(){
        wx.navigateTo({url:"detail"});
    },
    toAddPost:function(){
        wx.navigateTo({url:"add"})
    }
});
