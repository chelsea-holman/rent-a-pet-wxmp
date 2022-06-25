// pages/landing/landing.js
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
  
      // Get api data
      wx.request({
        // url: "http://localhost:3000/api/v1/pets",
        url: "https://rent-a-pet-chelsea-holman.herokuapp.com/api/v1/pets",
        method: 'GET',
        success(res) {
          const pets = res.data;
          console.log(res)
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

  }
})