// pages/show/show.js
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
  onLoad: function (options) {
    console.log(options)
    console.log(options.id)
    this.getPet(options.id);
  },

  getPet(id) {
    const page = this;
    let header = wx.getStorageSync('header')
    wx.request({
      url: `${app.globalData.baseUrl}/pets/${id}`,
      method: 'GET',
      header,
      success(res) {
        console.log(res.data)
        page.setData({ pet: res.data.pet,
        count: res.data.booking_count })
        console.log(res.data.booking_count)
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
  goToForm() {
    wx.navigateTo({
      url: '../form/form',
    })
  },

  goToBook: function (e) {
    console.log(e.currentTarget.dataset.id)
    let header = wx.getStorageSync('header')
    const petId = e.currentTarget.dataset.id
    // const { id } = this.options
    // if (id) this.updatePet(id, data)
    this.createBooking(petId, header)
    // wx.navigateTo({
    //   url: '/pages/landing/landing',
    // })
  },

  createBooking(petId, header) {
    wx.request({
      // url: 'http://localhost:3000/api/v1/pets',
      url: `${app.globalData.baseUrl}/pets/${petId}/bookings`,
      method: 'POST',
      header: header,
      success(res) {
        console.log(res.data)
        wx.navigateTo({
          url: `/pages/bookings/bookings?id=${res.data.id}`,
        })
        console.log(res);
      }
    })
  },

  goToBookings() {
    wx.navigateTo({
      url: '../profile/profile',
    })
  }
})