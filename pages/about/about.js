// pages/about/about.js
Page({
  data: {
    list:['衣服','手机','电脑']
  },
  handleTap(){
    console.log('按钮发生点击~~')
  },
  handleTouchStart(){
    console.log('handleTouchStart')
  },
  handleTouchEnd(){
    console.log('handleTouchEnd')
  },
  handleTouchMove(){
    console.log('handleTouchMove')
  },
  handleTouchCancle(){
    console.log('handleTouchCancle')
  },
  handleLongPress(){
    console.log('handleLongPress')
  },

  // 事件对象
  // changedTouches与touches的区别与联系
  touchend(event){
    console.log(event)
    console.log(event.changedTouches) // [{}]记录的是改变的触摸点
    console.log(event.touches) // []记录的是触摸点
  },
  // currentTarget和Target的区别与联系
  // 单击内部的inner此时外部outer的事件也会触发，此时
  // currentTarget：触发事件的对象；Target：产生事件的对象
  outer(event){
    console.log('outer',event)
  },
  inner(event){
    console.log('inner',event)
  },
  // 事件传递参数
  itemClick(event){
    // console.log(event)
    // var {id,name} = event.currentTarget.dataset;
    // console.log(id,name)
    // 使用事件委托提高效率
    var {id,name} = event.target.dataset;
    console.log(id,name)

  },
  // 事件冒泡和事件捕捉
  tapView1(){
    console.log('view1冒泡')
  },
  captureView1(){
    console.log('view1捕捉');
  },
  tapView2(){
    console.log('view2冒泡')
  },
  captureView2(){
    console.log('view2捕捉');
  },
  tapView3(){
    console.log('view3冒泡')
  },
  captureView3(){
    console.log('view3捕捉');
  }
})