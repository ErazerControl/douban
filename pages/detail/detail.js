// pages/detail/detail.
import {getDetail,getComment,getTag} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if(options.title){
      var logs=new Array()
      try {
        var value = wx.getStorageSync('history')
        if (value) {
          logs=value
        }
      } catch (e) {
      }
      console.log(logs);
      var obj={'id':options.id,'title':options.title,'type':options.type}
      logs.push(obj)
      wx.setStorage({
        key: 'history',
        data: logs
      })
    }
    this.setData({
      current_id:options.id,
      current_type:options.type
    })
    var that=this
    getDetail(options.type,options.id,function(data){
      console.log(data);
      var type=data.genres.join('/')
        that.setData({
          detail:data,
          type:type
        }
        )
    })
    getTag(options.type,options.id,function(data){
      that.setData({
        tags:data
      })
    })
    getComment(options.type,options.id,0,3,function(data){
      that.setData({
        comments:data.interests,
        totalcomments:data.total
      })
    });
  },
  onMoreEvent:function(event){
    var id=event.currentTarget.dataset.id;
    var title = event.currentTarget.dataset.title;
    var type = event.currentTarget.dataset.type;
    var thumbnail=event.currentTarget.dataset.thumbnail;
    var rate=event.currentTarget.dataset.rate;
    wx.navigateTo({
      url: '../comments/comments?id='+id+'&title='+title+'&type='+type+'&thumbnail='+thumbnail+'&rate='+rate,
    })
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