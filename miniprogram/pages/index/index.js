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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlDQUE0QztBQUc1QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFFZCxJQUFJLENBQUM7SUFDRCxLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsaUJBQVU7S0FDcEI7SUFDRCxJQUFJLEVBQUU7UUFDRixhQUFhLEVBQUUsVUFBVTtLQUM1QjtJQUVELFVBQVU7UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFFLGNBQWM7U0FDdEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELFdBQVc7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsZUFBZSxFQUFFLE1BQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxzQ0FBbUMsRUFBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUNELFVBQVU7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLE1BQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxxQ0FBa0MsRUFBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG5cbmltcG9ydCB7bG9jYWxTdG9yZX0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XG5cbi8vIOiOt+WPluW6lOeUqOWunuS+i1xubGV0IGluZGV4ID0gMDtcblxuUGFnZSh7XG4gICAgbWl4aW46IHtcbiAgICAgICAgc3RvcmU6IGxvY2FsU3RvcmUsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGNvbXBvbmVudFByb3A6ICdmcm9tIHBhcicsXG4gICAgfSxcbiAgICAvLyDkuovku7blpITnkIblh73mlbBcbiAgICBnb3RvU2Vjb25kICgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnLFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIG9uVGFwR2xvYWJsICgpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtnbG9iYWxTdG9yZURhdGE6IGBbJHsoKytpbmRleCl9XWdsb2JhbCBzdG9yZSBjaGFuZ2VkIGZyb20gcGFyZW50YH0pO1xuICAgIH0sXG4gICAgb25UYXBMb2NhbCAoKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7bG9jYWxTdG9yZURhdGE6IGBbJHsoKytpbmRleCl9XWxvY2FsIHN0b3JlIGNoYW5nZWQgZnJvbSBwYXJlbnRgfSk7XG4gICAgfSxcbn0pO1xuIl19