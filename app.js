// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    const app = this
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        wx.request({
          url: `${app.globalData.baseUrl}/login`,
          method: "POST",
          data: { code: res.code }, // pass code in request body
        success(loginRes) {
          console.log({loginRes}) // { data: { headers: { "X-USER-TOKEN": <User Token> }, user: <User Object> }, ... }
          wx.setStorageSync('header', loginRes.data.headers)
          wx.setStorageSync('user', loginRes.data.user)
          // app.globalData.user = loginRes.data.user
          // app.globalData.header = loginRes.data.headers

        }, 
        fail(loginError) {
          console.log({loginError})
        }
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    header: null,
    user: null,
    // baseUrl: 'http://localhost:3000/api/v1'
  baseUrl: 'https://rent-a-pet-chelsea-holman.herokuapp.com/api/v1'
  }
})
