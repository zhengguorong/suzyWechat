const postServer = require('../../server/post.js')
const broadcast = require("../../libs/broadcast")

Page({
    data: {
        postList: [],
        baseUrl: getApp().baseUrl,
        curPage: 1,
        hasNext: true
    },
    onPullDownRefresh: function () {
        this.getFirstPage()
        wx.showToast({
            title: '刷新成功',
            icon: 'success',
            duration: 2000
        })
    },
    onReachBottom: function () {
        this.getNextPage()
    },
    onLoad: function () {
        this.getFirstPage()
        broadcast.on("getPostList", () => {
            this.getFirstPage()
        })
    },
    getFirstPage: function (page = 1, count = 5) {
        postServer.getPosts(page, count).then(data => {
            this.data.hasNext = true
            for (var key in data) {
                data[key].createTime = this.formateCreateTime(data[key].createTime)
            }
            this.setData({ postList: data, curPage: page })
            wx.stopPullDownRefresh()
        })
    },
    getNextPage: function () {
        if (!this.data.hasNext) return
        postServer.getPosts(++this.data.curPage, 5).then(data => {
            if (data.length < 5) {
                this.data.hasNext = false
            }
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
