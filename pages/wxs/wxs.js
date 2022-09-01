// pages/wxs/wxs.js
Page({
  data: {
    price:34.7890866
  },
  returnFix(value){
    return value.toFix(2)
  }
})