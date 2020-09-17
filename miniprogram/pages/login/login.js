// miniprogram/pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentPage: 0,
        adminImg: '../../scr/img/icon/check-f.png',
        checkBtnColor: 'grey',
        isUser: true,
        switchIcon: "pullright",
        switchLabel: "注册"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    switchSwiper: function (e) {
        let label = this.data.currentPage == 0 ? '登陆' : '注册'
        let icon = this.data.currentPage == 0 ? 'pullleft' : 'pullright'
        let index = this.data.currentPage == 0 ? 1 : 0
        this.setData({
            switchLabel: label,
            currentPage: index,
            switchIcon: icon
        })
    },

    switchIndex: function (e) {
        this.setData({
            switchLabel : e.detail.current == 0 ? '注册' : '登陆',
            currentPage: e.detail.current,
            switchIcon: e.detail.current == 0 ? 'pullright' : 'pullleft'
        })
    },

    checkAdmin: function(e){
        let color = this.data.checkBtnColor == 'grey' ? 'blue' : 'grey'
        this.setData({
            checkBtnColor : color
        })
    },

    login: function(e){
        wx.switchTab({
          url: '../user/shop/shop',
        })
    },

    adminLogin:function(e){
        wx.navigateTo({
          url: '../management/index/index',
        })
    },

    goUser: function(e) {
        this.setData({
            isUser : true
        })
    },

    goAdmin: function(e) {
        this.setData({
            isUser : false
        })
    }

})