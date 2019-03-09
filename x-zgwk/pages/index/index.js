//index.js
//获取应用实例
const app = getApp()
Page({

  data: {
    list:[],
    navlist:[]
  },
  loadMore:function(){
    wx.request({
      url: 'http://127.0.0.1:6220/imagelist',
      success:(res)=>{
        this.setData({
          list:res.data
        })
      }
    })
  },
  loadMoreNav:function(){
    wx.request({
      url: 'http://127.0.0.1:6220/icons',
      success:(res)=>{
        this.setData({
          navlist:res.data
        })
      }
    })
  },
  handleJump: function (e) {
    var id = e.target.dataset.id;
    if (id == 1) {
      wx.navigateTo({
        url: '/pages/shoplist/shoplist'
      });
    }
  },
  onLoad: function (options) {
    this.loadMore();
    this.loadMoreNav();
  },

  
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