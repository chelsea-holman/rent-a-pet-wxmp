// pages/form/form.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    image_url: []
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
    let header = wx.getStorageSync('header')
    const data = e.detail.value
    const { id } = this.options
    if (id) this.updatePet(id, data)
    if (!id) this.createPet(data, header)
    wx.navigateTo({
      url: '/pages/landing/landing',
    })
  },


  createPet(data, header) {
    const url = app.globalData.baseUrl;
    let page = this;
    wx.request({
      url: `${app.globalData.baseUrl}/pets`,
      method: 'POST',
      data: data,
      header: header,
      success(res) {
        // send photo to backend
        console.log(res)
        wx.uploadFile({
          url: `${url}/pets/${res.data.id}/upload`,
          filePath: page.data.image_url[0],
          name: 'file',
          header: header,
          success(res) {
            console.log('this is for upload file', res)
          },
          fail(err) {
            console
            console.log(err)
          }
        })

        
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
          url: '/pages/landing/landing',
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

  },

  uploadImage(){
    let that = this
    wx.chooseMedia({
      count: 9,
      mediaType:['image','video'],
      sourceType:['album','camera'],
      maxDuration:30,
      camera: 'back',
      success:(res)=>{
        console.log(res.tempFiles[0].tempFilePath);
        that.setData({
          image_url: that.data.image_url.concat(res.tempFiles[0].tempFilePath)
          // image_url: res.tempFiles[0].tempFilePath,
        })
      }
    })
  }


})