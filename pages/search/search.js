// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var logs=new Array()
    try {
      var value = wx.getStorageSync('history')
        this.setData({
          logs:value
        });
      } 
    catch (e) {
      console.log('没有历史纪录')
    }
    
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
  onClearEvent:function(event){
    var that=this;
    wx.removeStorage({
      key: 'history',
      success(res) {
        that.setData({
          logs:''
        })
        wx.showToast({
          title: '清除历史记录成功',
          icon: 'success',
          duration: 2000
        })
        
      }
    })
  },
  searchInfo:function(event){
    console.log('父组件触发')
    console.log(event.detail.value);
    var q=event.detail.value;
    var that=this;
    if(q){
      wx.request({
        url:"https://m.douban.com/rexxar/api/v2/search?type=movie&q=" + q,
        success:function(res){
          console.log(res.data.subjects)
          that.setData({
            log:q,
            searchList:res.data.subjects
          })
        }
      })
    }
   
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