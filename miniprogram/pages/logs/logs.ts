// logs.ts
// const util = require('../../utils/util.js')
import {formatTime} from '../../utils/util';
let index = 0;
Page({
    data: {
        logs: [],
    },
    onTap () {
        this.setData({globalData: 'new from log' + (++index)});
    },
    gotoIndex () {
        wx.navigateTo({url: '/pages/index/index'});
    },
    onLoad () {
        // this.setData({
        //     logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        //         return {
        //             date: formatTime(new Date(log)),
        //             timeStamp: log
        //         };
        //     }),
        // });
        console.log('onload');
    },
    onUnload () {
        console.log('onunload');
    },
    onShow () {
        console.log('onShow');
    },
    onHide () {
        console.log('onHide');
    }
});
