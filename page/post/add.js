var postServer = require( '../../server/post.js' );

Page( {
    data: {
        selectedImg: ""
    },
    onLoad: function( params ) {

    },
    onReady: function() {
        wx.setNavigationBarTitle( { title: '添加文章' })
    },
    savePost:function(){
        wx.navigateBack();
    },
    chooseImage: function() {
        var that = this
        wx.chooseImage( {
            count: 1, // 默认9
            sizeType: [ 'original', 'compressed' ], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: [ 'album', 'camera' ], // 可以指定来源是相册还是相机，默认二者都有
            success: function( res ) {
                console.log( res )
                that.setData( {
                    imageList: res.tempFilePaths
                })
            }
        })
    },
    previewImage: function( e ) {
        var current = e.target.dataset.src
        wx.previewImage( {
            current: current,
            urls: this.data.imageList
        })
    }

});
