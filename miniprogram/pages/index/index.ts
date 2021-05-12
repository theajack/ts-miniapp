// index.ts

import {localStore} from '../../utils/util';

// 获取应用实例
let index = 0;

Page({
    mixin: {
        store: localStore,
    },
    data: {
        componentProp: 'from par',
    },
    // 事件处理函数
    gotoSecond () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    onTapGloabl () {
        this.setData({globalStoreData: `[${(++index)}]global store changed from parent`});
    },
    onTapLocal () {
        this.setData({localStoreData: `[${(++index)}]local store changed from parent`});
    },
});
