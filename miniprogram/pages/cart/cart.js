// miniprogram/pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        totalPrice: 0.00, //总价
        checkImg: '../../scr/img/icon/check.png',
        checkLabel: '全选'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    // 全选
    checkAll: function(e){
        let img = this.data.checkImg == '../../scr/img/icon/check.png' ? '../../scr/img/icon/checked.png' : '../../scr/img/icon/check.png'
        let label = this.data.checkLabel == '全选' ? '取消全选' : '全选'
        this.setData({
            checkImg: img,
            checkLabel: label
        })
    }
})