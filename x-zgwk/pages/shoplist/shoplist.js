// pages/shoplist/shoplist.js
Page({

  data: {
    rows: [],
    pno: 0,
    pageSize: 7
  },
 
  loadMore: function () {
    //显示加载动画
    wx.showLoading({
      title: '正在加载数据...',
    })
    //1.获取两个参数pno pageSize
    var p = this.data.pno + 1;
    var ps = this.data.pageSize;
    wx.request({
      url: 'http://127.0.0.1:6220/shoplist',
      data: { pno: p, pageSize: ps },
      success: (res) => {
        //保存返回数据并且拼接操作
        var nrows = this.data.rows.concat(res.data.data)
        this.setData({
          rows: nrows,
          pno: p
        });
        //卸载动画
        setTimeout(function () {
          wx.hideLoading();
        }, 100)
      }
    })

    //2.发送ajax请求获取美食列表
    //3.将数据保存rows中
  },
  onLoad: function (options) {
    this.loadMore();
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})