const postServer = require('../../server/post.js')
const http = require('../../utils/http.js')
const broadcast = require("../../libs/broadcast")

Page({
    data: {},
    saveComment: function (e) {
        let context = e.detail.value.context
        let comment = {pId:this.data.id, author: 'rong', content: context}
        postServer.addComment(comment).then(data => {
            wx.navigateBack();
        })
    },
    onLoad: function (params) {
        this.setData({ id: params.id })
    },
})