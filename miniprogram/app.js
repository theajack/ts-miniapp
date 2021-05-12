"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mp-mixin");
wx.mixin({
    data: {
        globalData2: 'globalData2'
    },
    store: {
        globalData: 'globalData'
    },
});
App({
    globalData: {},
    onLaunch: function () {
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (res) {
                console.log(res.code);
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0JBQWtCO0FBR2xCLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDTCxJQUFJLEVBQUU7UUFDRixXQUFXLEVBQUUsYUFBYTtLQUM3QjtJQUNELEtBQUssRUFBRTtRQUNILFVBQVUsRUFBRSxZQUFZO0tBQzNCO0NBQ0osQ0FBQyxDQUFDO0FBR0gsR0FBRyxDQUFhO0lBQ1osVUFBVSxFQUFFLEVBQUU7SUFDZCxRQUFRO1FBRUosSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUdoQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ0wsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUxQixDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnbXAtbWl4aW4nO1xyXG5cclxuXHJcbnd4Lm1peGluKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBnbG9iYWxEYXRhMjogJ2dsb2JhbERhdGEyJ1xyXG4gICAgfSxcclxuICAgIHN0b3JlOiB7XHJcbiAgICAgICAgZ2xvYmFsRGF0YTogJ2dsb2JhbERhdGEnXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbi8vIGFwcC50c1xyXG5BcHA8SUFwcE9wdGlvbj4oe1xyXG4gICAgZ2xvYmFsRGF0YToge30sXHJcbiAgICBvbkxhdW5jaCAoKSB7XHJcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcclxuICAgICAgICBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXTtcclxuICAgICAgICBsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSk7XHJcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKTtcclxuXHJcbiAgICAgICAgLy8g55m75b2VXHJcbiAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0pOyJdfQ==