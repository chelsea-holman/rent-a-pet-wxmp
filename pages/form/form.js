// pages/form/form.js
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
    console.log(options);
    // this.fetchPet(options.id)
  },

  // fetchPet(petId) {
  //   const page = this;
  //   wx.request({
  //     url: `http://localhost:3000/api/v1/pets/${petId}`,
  //     method: 'GET',
  //     success(res) {
  //       console.log(res);
  //       page.setData({ pet: res.data.pet });
  //     }
  //   })
  // },

  submit: function (e) {
    console.log(e)
    const data = e.detail.value
    const { id } = this.options
    if (id) this.updatePet(id, data)
    if (!id) this.createPet(data)
  },

  createPet(data) {
    wx.request({
      url: 'http://localhost:3000/api/v1/pets',
      method: 'POST',
      data,
      success(res) {
        wx.navigateTo({
          url: '/pages/landing/landing',
        })
        console.log(res);
      }
    })
  },

  updatePet(id, data) {
    wx.request({
      url: `http://localhost:3000/api/v1/pets/${id}`,
      method: 'PUT',
      data,
      success(res) {
        wx.navigateTo({
          url: '/pages/pets/pets',
        })
        console.log(res);
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

  }
})