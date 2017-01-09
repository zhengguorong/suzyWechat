var postServer = require('../../server/post.js');

Page({
    data: {
        postList: [],
        baseUrl : getApp().baseUrl
    },
    onLoad: function () {
        postServer.getPosts(1, 10).then(data => {
            this.setData({ postList: data.slice(0, 2) })
        })
    },
    toDetail: () => {
        wx.navigateTo({ url: "detail" });
    }
});
