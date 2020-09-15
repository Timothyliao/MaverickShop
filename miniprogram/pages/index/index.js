const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj: ""
  }, 

  getinfo:function(e){
    // 2. 构造查询语句
    // collection 方法获取一个集合的引用
    // where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等），具体见文档查看支持列表
    // get 方法会触发网络请求，往数据库取数据
    db.collection('commodity').get({
      success: res=> {
        console.log(res.data)
        this.setData({
          dataObj: res.data
        })
     }
    })
  },

  addinfo:function(e){
    db.collection('commodity').add({
        data:{
          author: '刘刚',
          img: 'http://img3m0.ddimg.cn/94/30/25578130-1_b_9.jpg',
          intorduce: '微信小程序可以实现App软件的原生交互操作效果，无需安装卸载，解放用户手机内存。商家使用微信小程序也可以被更多用户找到自己的产品，成为有利的宣传。 《微信小程序开发图解案例教程》助你3步学会微信小程序设计：Step1图、文、代码、视频快速理解小程序基本原理和应用方法； Step2海量案例，边练边学；Step3综合实战，感受真实商业项目制作过程； 平台支撑，免费赠送资源 1.全部案例源代码、素材、*终文件2.全书电子教案 3.全书配套1399分钟高清精讲视频教程，手机扫码看或登录人邮学院免费观看 4.赠送8大类商业案例1332分钟视频课程',
          name: '微信小程序开发图解案例教程',
          press: '人民邮电出版社',
          price: 65.00,
          star: 4,
          time: new Date('2019-01-01'),
          title: [
            '附精讲视频',
            '第2版',
            '鸟哥教你从入门到精通',
            '微信小程序开发快速入门',
            '1399分钟基础与案例精讲+1332分钟商业案例详解',
            '海量商业案例',
            '边练边学',
            '图文快速理解基本方法',
            '详细代码说明',
            '一看就懂'
          ]
        },
        success: res => {
          console.log(res)
        }
      }
    )
  }

})