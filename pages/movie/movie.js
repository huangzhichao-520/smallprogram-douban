const http = require('../../utils/http')
Page({
  data: {
    movies:{}
  },
  async onLoad() {
    var storageData = wx.getStorageSync('movies')
    if(storageData){
      this.setData({
        movies:storageData
      })
    }else{
      var movies = {}
      var top250 = await http.getTop250();
      var inTheathers = await http.getInTheaters();
      var comingSoon = await http.getComingSoon();
      console.log(top250.data.subjects);
    }
  }
})