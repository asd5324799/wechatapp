//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false,
    userInfo: {},
    swiperCurrent: 0,
    selectCurrent: 0,
    categories: [],
    activeCategoryId: 0,
    goods: [],
    scrollTop: "0",
    loadingMoreHidden: true,
    hasNoCoupons: true,
    coupons: [],
    searchInput: '',
  },
  tabClick: function(e) {
    this.setData({
      activeCategoryId: e.currentTarget.id
    });
    this.getGoodList(this.data.activeCategoryId);
  },
  // 事件处理函数
  swiperchange: function(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  toDetailTap: function(e) {
    // wx.navigateTo({
    //   url: "/pages/goods-details/index?id="+e.currentTarget.dataset.id,
    // })
  },
  tapBanner: function(e) {
    // if(e.currentTarget.dataset.id != 0) {
    //   wx.navigateTo({
    //     url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id,
    //   })
    // }
  },
  bindTypeTap: function(e) {
    this.setData({
      selectCurrent: e.index
    })
  }
})
