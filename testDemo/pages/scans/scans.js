// pages/scans.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name :'开始'
  },
  goBack:function(e){
    wx.navigateBack({
      
    })
  },
  goScan:function(e){
    wx.scanCode({
      success:(res) =>{
        console.log(res)
           var data = this
           data.setData({
             name:res.result
           })
      }
    })
  }
 
})