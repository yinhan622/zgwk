// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    userListInfo: [{
      icon: '../img/iconfont-dingdan.png',
      text: '我的订单',
      isunread: true,
      unreadNum: 2
    }, {
        icon: '../img//iconfont-card.png',
      text: '我的代金券',
      isunread: false,
      unreadNum: 2
    }, {
        icon: '../img/iconfont-icontuan.png',
      text: '我的拼团',
      isunread: true,
      unreadNum: 1
    }, {
        icon: '../img/iconfont-shouhuodizhi.png',
      text: '收货地址管理'
    }, {
        icon: '../img/iconfont-kefu.png',
      text: '联系客服'
    }, {
        icon: '../img/iconfont-help.png',
      text: '常见问题'
    }]

  },

  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})