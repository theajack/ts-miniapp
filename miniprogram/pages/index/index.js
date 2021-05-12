"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var index = 0;
Page({
    mixin: {
        store: util_1.localStore,
    },
    data: {
        componentProp: 'from par',
    },
    gotoSecond: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    onTapGloabl: function () {
        this.setData({ globalStoreData: "[" + (++index) + "]global store changed from parent" });
    },
    onTapLocal: function () {
        this.setData({ localStoreData: "[" + (++index) + "]local store changed from parent" });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlDQUE0QztBQUc1QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFFZCxJQUFJLENBQUM7SUFDRCxLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsaUJBQVU7S0FDcEI7SUFDRCxJQUFJLEVBQUU7UUFDRixhQUFhLEVBQUUsVUFBVTtLQUM1QjtJQUVELFVBQVU7UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFFLGNBQWM7U0FDdEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELFdBQVc7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsZUFBZSxFQUFFLE1BQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxzQ0FBbUMsRUFBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUNELFVBQVU7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLE1BQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxxQ0FBa0MsRUFBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXHJcblxyXG5pbXBvcnQge2xvY2FsU3RvcmV9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbmxldCBpbmRleCA9IDA7XHJcblxyXG5QYWdlKHtcclxuICAgIG1peGluOiB7XHJcbiAgICAgICAgc3RvcmU6IGxvY2FsU3RvcmUsXHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGNvbXBvbmVudFByb3A6ICdmcm9tIHBhcicsXHJcbiAgICB9LFxyXG4gICAgLy8g5LqL5Lu25aSE55CG5Ye95pWwXHJcbiAgICBnb3RvU2Vjb25kICgpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJyxcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvblRhcEdsb2FibCAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtnbG9iYWxTdG9yZURhdGE6IGBbJHsoKytpbmRleCl9XWdsb2JhbCBzdG9yZSBjaGFuZ2VkIGZyb20gcGFyZW50YH0pO1xyXG4gICAgfSxcclxuICAgIG9uVGFwTG9jYWwgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7bG9jYWxTdG9yZURhdGE6IGBbJHsoKytpbmRleCl9XWxvY2FsIHN0b3JlIGNoYW5nZWQgZnJvbSBwYXJlbnRgfSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19