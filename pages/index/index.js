//index.js
//获取应用实例
const app = getApp()
import {getMovieList,getTvList,getShowList} from '../../utils/util';
Page({
  data: {
    mode:1,
    movieList:[]
  },
  onLoad: function () {
    var that=this;
    getMovieList(7,function(res){
      that.setData({
        movieList:res.subject_collection_items,
        movieTitle:res.subject_collection.name
      })
    })
    getShowList(7,function(res){
      that.setData({
        showList:res.subject_collection_items,
        showTitle:res.subject_collection.name
      })
    }) 
    getTvList(7,function(res){
      that.setData({
        tvList:res.subject_collection_items,
        tvTitle:res.subject_collection.name
      })
    }) 
  },
  searchInfo:function(event){
    console.log('父组件触发')
    console.log(event);
  }
})

