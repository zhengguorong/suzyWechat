var postServer = require('../../server/post.js');

Page({
    data: {
        post: {},
        baseUrl: getApp().baseUrl,
        params: {}
    },
    onPullDownRefresh: function () {
        this.getPostDetail(this.data.params.id)
        wx.showToast({
            title: '刷新成功',
            icon: 'success',
            duration: 2000
        })
    },
    onLoad: function (params) {
        this.setData({ params: params })
        this.getPostDetail(params.id)
    },
    getPostDetail: function (id) {
        postServer.getPostById(id).then(data => {
            this.setData({ post: data })
            wx.stopPullDownRefresh()
        })
    },
    onReady: () => {
        wx.setNavigationBarTitle({ title: '详情' })
    }

});
