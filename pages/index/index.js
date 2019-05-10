//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    mode:1,
    movieList:[]
  },
  onLoad: function () {
    var that=this;
    wx.request({
      url:'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
      data:{
        count:7
      },
      success:function(data){
        console.log(data);
        that.setData({
          movieList:data.data.subject_collection_items
        })
      }
      
    })

  }
})
