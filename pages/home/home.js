// pages/home/home.js
// 获取全局共享的数据
var app = getApp();
console.log(app)
Page({
// 2.初始化数据
  data: {
    message: 'hello world!',
    students:[
      {id:1001,age:18,name:'张三'},
      {id:1002,age:19,name:'李四'},
      {id:1003,age:20,name:'王五'}
    ],
    counter: 0
  },
  // 1.在生命周期函数里面发生网络请求
  onLoad(){
    wx.request({
      // 如果在小程序里面直接使用ip（不是域名的那种）可能会报错，解决：在“详情”勾选上不校验合法域名
      url: 'http://123.207.32.32:8000/recommend', 
      success:(res)=>{
        console.log(res)
      }
    })
  },
  // 3.事件监听
  handleAdd(){
    // 注意下面的写法是错误的，微信小程序没有向vue那样进行数据的双向绑定，数据改变页面不会改变和react很像
    // this.data.counter += 1
    // 正确写法
    this.setData({
      counter: this.data.counter+1
    })
    console.log('+',this.data.counter)
  },
  handleSubtract(){
    // this.data.counter -= 1
    this.setData({
      counter: this.data.counter-1
    })
    console.log('-',this.data.counter);
  },
  getUserInfo(event){
    console.log(event)
  },
  // 4.其他事件监听
  // 页面滚动监听
  onPageScroll(){
    // console.log('滚动')
  },
// 页面滚动到底部监听
onReachBottom(){
  console.log('滚动到页面底部时触发')
},
// 下拉刷新页面
onPullDownRefresh(){
  console.log('下拉刷新')
}
})