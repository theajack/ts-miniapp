// logs.ts
// const util = require('../../utils/util.js')
let index = 0;
Page({
    data: {
        logs: [],
    },
    gotoIndex () {
        wx.navigateTo({url: '/pages/index/index'});
    },
    onTapGloabl () {
        this.setData({globalStoreData: `[${(++index)}]global store changed from second page`});
    },
});
