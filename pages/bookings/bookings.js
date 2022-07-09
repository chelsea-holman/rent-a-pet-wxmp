// pages/bookings/bookings.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    console.log(options)
    console.log(options.id)
    this.getBooking(options.id);
  },

  getBooking(id) {
    const page = this;
    let header = wx.getStorageSync('header')
    wx.request({
      url: `${app.globalData.baseUrl}/bookings/${id}`,
      method: 'GET',
      header,
      success(res) {
        page.setData({ booking: res.data })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }, 

  seePets() {
    wx.navigateTo({
      url: '../landing/landing',
    })
  }, 

  seeBookings() {
    wx.navigateTo({
      url: '../profile/profile',
    })
  }
})