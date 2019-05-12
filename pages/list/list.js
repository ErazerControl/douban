// pages/list/list.js
import {getMovieList,getTvList,getShowList} from '../../utils/util';
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
    console.log(options)
    var type=options.type;
    var that=this;
    wx.setNavigationBarTitle({
      title: options.title,
      success: function(res) {
        // success
      }
    })
    options.title
    wx.showLoading({
      title: '加载中',
    });
    if(type=='movie')
    {
      getMovieList(1000,function(res){
        if(res.subject_collection_items.length%3==2){
          res.subject_collection_items.push(null)
        }
        that.setData({
          List:res.subject_collection_items,
          Title:res.subject_collection.name
        })
        wx.hideLoading()
      })
    }
   else if(type=='tv')
   {
    getTvList(1000,function(res){
      if(res.subject_collection_items.length%3==2){
        res.subject_collection_items.push(null)
      }
      that.setData({
        List:res.subject_collection_items,
        Title:res.subject_collection.name
      })
      wx.hideLoading()
    }) 
   } 
   else{
    getShowList(1000,function(res){
      if(res.subject_collection_items.length%3==2){
        res.subject_collection_items.push(null)
      }
      that.setData({
        List:res.subject_collection_items,
        Title:res.subject_collection.name
      })
      wx.hideLoading()
    }) 
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