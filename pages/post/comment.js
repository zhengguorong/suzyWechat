const postServer = require('../../server/post.js')
const http = require('../../utils/http.js')
const broadcast = require("../../libs/broadcast")

Page({
    data: {},
    saveComment: function (e) {
        let context = e.detail.value.context
        if (!context) {
            wx.showModal({
                title: '提示',
                content: '评论内容不能为空',
                showCancel: false
            })
        } else {
            let comment = { pId: this.data.id, author: getApp().author, content: context }
            postServer.addComment(comment).then(data => {
                wx.navigateBack();
            })
        }
    },
    onLoad: function (params) {
        this.setData({ id: params.id })
    },
})