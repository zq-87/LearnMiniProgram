// pages/wxml/wxml.js
Page({
  data: {
    message: '你好小程序！！！',
    age:19,
    nowTime: new Date().toLocaleString(),
    firstname: 'zhang',
    lastname: 'san',
    isActive: false,

    isShow:true,
    score: 0
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      },1000)
    })
  },
  switchColor(){
    console.log(this.data.isActive)
   this.setData({
    isActive: !this.data.isActive
   })
  },
  switchIshow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  getScore(event){
      console.log(event.detail.value)
      this.setData({
        score: event.detail.value
      })
  }
})