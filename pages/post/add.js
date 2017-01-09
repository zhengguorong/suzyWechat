var postServer = require('../../server/post.js')
var http = require('../../utils/http.js')
Page({
    data: {
        imageList: []
    },
    onReady: function () {
        wx.setNavigationBarTitle({ title: '添加文章' })
    },
    savePost: function (e) {
        let context = e.detail.value.context
        let title = e.detail.value.title
        if (!context) {
            wx.showToast({
                title: '内容不能为空',
                duration: 2000
            })
            return
        }
        //判断是否已经选择图片图片
        if (this.data.imageList.length == 0) {
            wx.showToast({
                title: '请先选择图片',
                duration: 2000
            })
            return
        }
        wx.showToast({
            title: '图片上传中',
            icon: 'loading',
            duration: 10000,
            mask: true
        })
        http.uploadFile(this.data.imageList[0]).then(data => {
            let jData = JSON.parse(data)
            let post = { title: title, content: context, author: 'rong', pic: jData.file[0].path }
            postServer.addPost(post).then((data) => {
                wx.navigateBack();
                wx.hideToast()
            })
        })

    },
    chooseImage: function () {
        var that = this
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                that.setData({
                    imageList: res.tempFilePaths,
                })

            }
        })
    },
    previewImage: function (e) {
        var current = e.target.dataset.src
        wx.previewImage({
            current: current,
            urls: this.data.imageList
        })
    }

});
