// pages/landing/landing.js
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
    let page = this;
    let header = wx.getStorageSync('header')
    console.log(header)
      // Get api data
      wx.request({
        url: `${app.globalData.baseUrl}/pets`,
        // url: "https://rent-a-pet-chelsea-holman.herokuapp.com/api/v1/pets",
        method: 'GET',
        header: header,
        
        success(res) {
          console.log(res)
          const pets = res.data;
          // Update local data
          page.setData({
            pets: pets
          });
  
          wx.hideToast();
        }
      });
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

  goToPet(e) {
  
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../show/show?id=${id}`,
    })
  },
  goToForm() {
    wx.navigateTo({
      url: '../form/form',
    })
  }
})