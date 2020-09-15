// miniprogram/pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        txLabel: '登陆',
        currentPage: 0,
        adminImg: '../../scr/img/icon/check-f.png'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    switchSwiper: function (e) {
        let label = this.data.currentPage == 0 ? '注册' : '登陆'
        let index = this.data.currentPage == 0 ? 1 : 0
        this.setData({
            txLabel: label,
            currentPage: index
        })
    },

    switchIndex: function (e) {
        this.setData({
            txLabel : e.detail.current == 0 ? '登陆' : '注册',
            currentPage: e.detail.current
        })
    },

    checkAdmin: function(e){
        let url = this.data.adminImg == '../../scr/img/icon/check-f.png' ? '../../scr/img/icon/checked-f.png' : '../../scr/img/icon/check-f.png'
        this.setData({
            adminImg : url
        })
    },

    login: function(e){
        wx.switchTab({
          url: '../shop/shop',
        })
    }

})