const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function getMovieList(count,callback){
  wx.request({
  url:'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
  data:{
    count:7
  },
  success:function(data){
    console.log(data);
    callback(data.data)
  }
})
}
function getTvList(count,callback){
  wx.request({
  url:'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items',
  data:{
    count:7
  },
  success:function(data){
    console.log(data);
    callback(data.data)
  }
})
}
function getShowList (count,callback){
  wx.request({
  url:'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items',
  data:{
    count:7
  },
  success:function(data){
    console.log(data);
    callback(data.data)
  }
})
}
function getDetail(type,id,callback){
  var movieDetail="https://m.douban.com/rexxar/api/v2/movie/";
  var tvDetail="https://m.douban.com/rexxar/api/v2/tv/";
  var showDetail= "https://m.douban.com/rexxar/api/v2/tv/";
  if(type=='movie'){
    var url=movieDetail;
  }
  else if(type=='tv'){
    var url=tvDetail;
  }
  else{
    var url=showDetail;
  }
  wx.request({
    url:url+id,
    success:function(res){
      callback(res.data);
    }
  })
}
module.exports = {
  formatTime: formatTime,
  getMovieList:getMovieList,
  getShowList:getShowList,
  getTvList:getTvList,
  getDetail:getDetail
}
