"use strict";
var index = 0;
Page({
    data: {
        logs: [],
    },
    gotoIndex: function () {
        wx.navigateTo({ url: '/pages/index/index' });
    },
    onTapGloabl: function () {
        this.setData({ globalStoreData: "[" + (++index) + "]global store changed from second page" });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNkLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxFQUFFO0tBQ1g7SUFDRCxTQUFTO1FBQ0wsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEdBQUcsRUFBRSxvQkFBb0IsRUFBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELFdBQVc7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsZUFBZSxFQUFFLE1BQUksQ0FBQyxFQUFFLEtBQUssQ0FBQywyQ0FBd0MsRUFBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxvZ3MudHNcclxuLy8gY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWwuanMnKVxyXG5sZXQgaW5kZXggPSAwO1xyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBsb2dzOiBbXSxcclxuICAgIH0sXHJcbiAgICBnb3RvSW5kZXggKCkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDogJy9wYWdlcy9pbmRleC9pbmRleCd9KTtcclxuICAgIH0sXHJcbiAgICBvblRhcEdsb2FibCAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtnbG9iYWxTdG9yZURhdGE6IGBbJHsoKytpbmRleCl9XWdsb2JhbCBzdG9yZSBjaGFuZ2VkIGZyb20gc2Vjb25kIHBhZ2VgfSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19