App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {// 这里也有一个参数
    console.log(options)
    // 对小程序场景进入的判断
    switch(options.scene){
      case 1001:
        console.log('xxx')
        break;
        case 1005:
        console.log('xxx')
        break;
    }
    // 这里一般会获取用户信息
    // wx.getUserInfo({
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

    // setTimeout(function(){
    //   var error = new Error()
    //   throw error
    // },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('onShow');
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('onHide');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('onError');
  },
  // 全局共享数据
  globalData:{
    name:'zq',
    age: 18
  }
}
)
