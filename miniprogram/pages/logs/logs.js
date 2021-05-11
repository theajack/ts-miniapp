"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        logs: [],
    },
    onTap: function () {
        this.setData({ globalData: 'new from log' });
    },
    gotoIndex: function () {
        wx.navigateTo({ url: '/pages/index/index' });
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return {
                    date: util_1.formatTime(new Date(log)),
                    timeStamp: log
                };
            }),
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5Q0FBNEM7QUFFNUMsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLEVBQUU7S0FDWDtJQUNELEtBQUs7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsVUFBVSxFQUFFLGNBQWMsRUFBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELFNBQVM7UUFDTCxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsTUFBTSxFQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBVztnQkFDcEQsT0FBTztvQkFDSCxJQUFJLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDL0IsU0FBUyxFQUFFLEdBQUc7aUJBQ2pCLENBQUM7WUFDTixDQUFDLENBQUM7U0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9ncy50c1xuLy8gY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWwuanMnKVxuaW1wb3J0IHtmb3JtYXRUaW1lfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcblxuUGFnZSh7XG4gICAgZGF0YToge1xuICAgICAgICBsb2dzOiBbXSxcbiAgICB9LFxuICAgIG9uVGFwICgpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtnbG9iYWxEYXRhOiAnbmV3IGZyb20gbG9nJ30pO1xuICAgIH0sXG4gICAgZ290b0luZGV4ICgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J30pO1xuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGxvZ3M6ICh3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdKS5tYXAoKGxvZzogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogZm9ybWF0VGltZShuZXcgRGF0ZShsb2cpKSxcbiAgICAgICAgICAgICAgICAgICAgdGltZVN0YW1wOiBsb2dcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgIH0sXG59KTtcbiJdfQ==