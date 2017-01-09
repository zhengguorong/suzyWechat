var postServer = require('../../server/post.js');

Page({
    data: {
        postList: [],
        baseUrl: getApp().baseUrl,
        curPage: 1
    },
    onPullDownRefresh: function () {
        this.getFirstPage()
        wx.showToast({
            title:'刷新成功',
            icon: 'success',
            duration: 2000
        })
    },
    onLoad: function () {
        this.getFirstPage()
    },
    toDetail: () => {
        wx.navigateTo({ url: "detail" });
    },
    toAddPost: () => {
        wx.navigateTo({ url: "add" })
    },
    getFirstPage: function (page = 1, count = 5) {
        postServer.getPosts(page, count).then(data => {
            for (var key in data) {
                data[key].createTime = this.formateCreateTime(data[key].createTime)
            }
            this.setData({ postList: data, curPage: page })
            wx.stopPullDownRefresh()
        })
    },
    getNextPage: function () {
        postServer.getPosts(++this.data.curPage, 5).then(data => {
            for (var key in data) {
                data[key].createTime = this.formateCreateTime(data[key].createTime)
            }
            let postList = this.data.postList.concat(data)
            this.setData({ postList: postList })
        })
    },
    formateCreateTime: function (time) {
        let createDate = new Date(parseInt(time))
        let createTime = createDate.getHours() + ':' + createDate.getMinutes()
        return createTime
    }
});
