App({
  onLaunch: function () {
    wx.login({
      success:  (res) =>{
        wx.getUserInfo({
          success: (res) =>{
            let author = res.userInfo.nickName
            this.author = author
          }
        })
      }
    })
  },
  baseUrl: 'https://bm.limesoftware.cn',
})
