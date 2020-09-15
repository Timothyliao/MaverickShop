const db = wx.cloud.database();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        categories: "", //商品列表
        inputShowed: false, //初始文本框不显示内容
        starArray: [] //
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        db.collection("commodity")
            .get({
                success: res => {
                    this.setData({
                        categories: res.data
                    })
                }
            })
    },
    // 使文本框进入可编辑状态
    showInput: function () {
        this.setData({
            inputShowed: true //设置文本框可以输入内容
        });
    },
    // 取消搜索
    hideInput: function () {
        this.setData({
            inputShowed: false
        });
    },
    //
    getDetail: function(e){
        console.log(e);
    }
})