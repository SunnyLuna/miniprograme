
var helloData ={
name :'滚犊子'
}
Page({

  /**
   * 页面的初始数据
   */
 
  data:{
    name:'开始'
  },
  changeName: function (e) {
    var a= this 
    console.log(a);
    a.__viewData__.name=helloData.name;
    wx.request({
      url: 'http://localhost:8080/hello',
      header: {
        'content-type': 'application/json' // 默认值
      },
    
      success(res) {
        a.setData({
          name: res.data,
        })
      }
    })
  },

  goScan:function(e){
        wx.navigateTo({
          url: '../scans/scans',
        })
  },

  goNetwork:function(e){
    wx.navigateTo({
      url: '../network/network',
    })
  }
});