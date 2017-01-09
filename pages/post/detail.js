var postServer = require('../../server/post.js');

Page({
    data: {
        post: {},
        baseUrl: getApp().baseUrl
    },
    onLoad: function (params) {
        postServer.getPostById(params.id).then(data => {
            this.setData({ post: data })
        })
    },
    onReady: () => {
        wx.setNavigationBarTitle({ title: '详情' })
    }

});
