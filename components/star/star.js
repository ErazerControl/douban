// components/star/star.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score:{
      type:Number,
      value:0,
      observer:function(newVal,oldVal,changedPath){
        this.update()
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },
  attached: function(){
    this.update()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    update:function (){
        
    var score=Math.round(this.properties.score);
    var light=parseInt(score/2);
    var half=score%2;
    var gray=5-light-half
    var rate_light=[]
    var rate_half=[]
    var rate_gray=[]
    for(var i=0;i<light;i++)
    {
      rate_light.push(i);
    }
    for(var i=0;i<half;i++)
    {
      rate_half.push(i);
    }
    for(var i=0;i<gray;i++)
    {
      rate_gray.push(i);
    }
    this.setData({
      rate_light,rate_half,rate_gray
    })
    this.setData({
      'grade':this.properties.score.toFixed(1)
    })
    }
  }
})
