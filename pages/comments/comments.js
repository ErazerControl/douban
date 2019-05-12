// pages/comments/comments.js
import {getComment} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start:1,
    count:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var that=this;
    this.setData({
      thumbnail:options.thumbnail,
      title:options.title,
      rate:options.rate,
      type:options.type,
      id:options.id
    })
    getComment(this.data.type,this.data.id,this.data.start,this.data.count,function(data){
      that.setData({
        comments:data.interests,
        totalcomments:data.total
      })
    })
  },
  onLastEvent:function(){
    var that=this;
    if(this.data.start>8){
      var start=this.data.start-10;
      this.setData({
        start:start,
        lastloading:true
      })
    }
    getComment(this.data.type,this.data.id,this.data.start,this.data.count,function(data){
      that.setData({
        comments:data.interests,
        totalcomments:data.total,
        lastloading:false
      }) 
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    })
    
  },
  onAfterEvent:function(){
      var that=this;
      var start=this.data.start+10;
      this.setData({
        start:start,
        nextloading:true
      })
      console.log(this.data.start);
      getComment(this.data.type,this.data.id,this.data.start,this.data.count,function(data){
        that.setData({
          comments:data.interests,
          totalcomments:data.total,
          nextloading:false
        })
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 300
        })
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
    
  }
})