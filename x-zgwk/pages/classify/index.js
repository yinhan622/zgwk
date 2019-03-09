const App=getApp()
Page({

  data: {
    rows:[],
    navRightItems: [],
    curNav: 1,
    curIndex: 0
  },
  zgList:function(){
    wx.request({
      url: 'http://127.0.0.1:6220/zglist',
      success:(res)=>{
      console.log(res);
        this.setData({
          rows:res.data,
          navRightItems: res.data

        })
      }
    })
  },
  onLoad: function (options) {
    this.zgList();
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

  },
  switchRightTab: function (e) {
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})