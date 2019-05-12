// components/search-bar/search-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mode:{
      type:String,
      value:'1'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInputEvent:function(event){
      console.log('子组件触发事件');
      this.triggerEvent('userInputEvent', {value: event.detail.value})
    }
  },
  
})
