/*
 * @Author: chenzhongsheng
 * @Date: 2022-12-29 21:38:42
 * @Description: Coding something
 */
import 'mp-mixin';

wx.mixin({
    data: {
        globalData: 'globalData'
    },
    store: {
        globalStoreData: 'globalStoreData'
    },
    onLoad (e) {
        console.log('onLoad', e);
    },
    onShow () {
        console.log('onShow - 页面显示');
    },
    onShareAppMessage () {
        console.log('分享');
    }
});

// app.ts
App<IAppOption>({
    globalData: {},
    onLaunch () {
    // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);

        // 登录
        wx.login({
            success: res => {
                console.log(res.code);
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            },
        });
    },
});