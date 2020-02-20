var data = require('../../data/local');
var http = require("../../models/http")
Page({
  data: {
    banners:[],
    indicatorDots:true,
    indicatorColor:"rgba(11, 44, 66, .6)",
    active:"#C20C0C",
    postList:[]
  },
  onLoad:async function (options) {
    var {bannerUrl,postList} = data;
    var res = await http(bannerUrl);
    var banners  = res.data.banners.slice(0,3);
    this.setData({
      banners,
      postList
    })
  }
})