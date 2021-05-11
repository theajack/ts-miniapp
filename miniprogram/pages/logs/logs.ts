// logs.ts
// const util = require('../../utils/util.js')
import {formatTime} from '../../utils/util';

Page({
    data: {
        logs: [],
    },
    onTap () {
        this.setData({globalData: 'new from log'});
    },
    gotoIndex () {
        wx.navigateTo({url: '/pages/index/index'});
    },
    onLoad () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map((log: string) => {
                return {
                    date: formatTime(new Date(log)),
                    timeStamp: log
                };
            }),
        });
    },
});
