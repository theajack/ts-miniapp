"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._globalMixin = exports._mixinGlobal = exports.mixinCurrent = exports.mixinData = void 0;
var store_1 = require("./store");
var util_1 = require("./util");
var globalMixins;
var pageLifeTimeNames = [
    'onLoad',
    'onShow',
    'onReady',
    'onHide',
    'onShow',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onShareAppMessage',
    'onShareTimeline',
    'onAddToFavorites',
    'onPageScroll',
    'onResize',
    'onTabItemTap',
];
function mixinData(options, data) {
    if (typeof data === 'undefined')
        return;
    util_1.mapToTarget({
        data: data,
        target: options.data
    });
}
exports.mixinData = mixinData;
function mixinMethods(options, methods, type) {
    if (type === void 0) { type = 0; }
    if (!methods)
        return;
    var isComponent = type === 1;
    if (isComponent && !options.methods) {
        options.methods = {};
    }
    util_1.mapToTarget({
        data: methods,
        target: isComponent ?
            options.methods :
            options
    });
}
function mixinLifeTimes(options, mixin) {
    var leftTimes = util_1.pick(mixin, pageLifeTimeNames);
    util_1.mapToTarget({
        data: leftTimes,
        target: options
    });
}
function mixinComponentLifeTimes(options, mixin) {
    var leftTimes = mixin.lifetimes;
    if (leftTimes) {
        if (!options.lifetimes) {
            options.lifetimes = {};
        }
        util_1.mapToTarget({
            data: leftTimes,
            target: options.lifetimes
        });
    }
    var pageLiftTimes = mixin.pageLifetimes;
    if (pageLiftTimes) {
        if (!options.pageLifetimes) {
            options.pageLifetimes = {};
        }
        util_1.mapToTarget({
            data: pageLiftTimes,
            target: options.pageLifetimes
        });
    }
}
function mixinCurrent(_a) {
    var options = _a.options, mixin = _a.mixin, _b = _a.global, global = _b === void 0 ? false : _b, _c = _a.type, type = _c === void 0 ? 0 : _c, storeTool = _a.storeTool;
    if (typeof mixin === 'undefined') {
        mixin = options.mixin;
    }
    if (typeof mixin === 'undefined') {
        return options;
    }
    mixin = util_1.deepClone(mixin);
    if (type === 0) {
        mixinLifeTimes(options, mixin);
    }
    else if (type === 1) {
        mixinComponentLifeTimes(options, mixin);
    }
    mixinData(options, mixin.data);
    mixinMethods(options, mixin.methods, type);
    store_1.injectStore({ options: options, mixinStore: mixin.store, global: global, storeTool: storeTool });
    return options;
}
exports.mixinCurrent = mixinCurrent;
function _mixinGlobal(_a) {
    var options = _a.options, type = _a.type, storeTool = _a.storeTool;
    return mixinCurrent({
        options: options,
        mixin: globalMixins,
        global: true,
        type: type,
        storeTool: storeTool
    });
}
exports._mixinGlobal = _mixinGlobal;
function _globalMixin(mixin) {
    globalMixins = mixin;
    store_1.checkGlobalMixinStore(mixin.store);
}
exports._globalMixin = _globalMixin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl4aW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtaXhpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFVQSxpQ0FBMkQ7QUFFM0QsK0JBQW9EO0FBRXBELElBQUksWUFBMEIsQ0FBQztBQUUvQixJQUFNLGlCQUFpQixHQUFHO0lBQ3RCLFFBQVE7SUFDUixRQUFRO0lBQ1IsU0FBUztJQUNULFFBQVE7SUFDUixRQUFRO0lBQ1IsVUFBVTtJQUVWLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVU7SUFDVixjQUFjO0NBQ2pCLENBQUM7QUFFRixTQUFnQixTQUFTLENBQUUsT0FBb0IsRUFBRSxJQUFZO0lBQ3pELElBQUksT0FBTyxJQUFJLEtBQUssV0FBVztRQUFFLE9BQU87SUFDeEMsa0JBQVcsQ0FBQztRQUNSLElBQUksTUFBQTtRQUNKLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSTtLQUN2QixDQUFDLENBQUM7QUFDUCxDQUFDO0FBTkQsOEJBTUM7QUFFRCxTQUFTLFlBQVksQ0FDakIsT0FBdUMsRUFDdkMsT0FBeUIsRUFDekIsSUFBb0M7SUFBcEMscUJBQUEsRUFBQSxRQUFvQztJQUVwQyxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU87SUFDckIsSUFBTSxXQUFXLEdBQUcsSUFBSSxNQUEwQixDQUFDO0lBQ25ELElBQUksV0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtRQUNqQyxPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztLQUN4QjtJQUNELGtCQUFXLENBQUM7UUFDUixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNoQixPQUE0QixDQUFDLE9BQTBCLENBQUMsQ0FBQztZQUMxRCxPQUFPO0tBQ2QsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUNuQixPQUFvQixFQUNwQixLQUFpQztJQUVqQyxJQUFNLFNBQVMsR0FBRyxXQUFJLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFFakQsa0JBQVcsQ0FBQztRQUNSLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLE9BQU87S0FDbEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsdUJBQXVCLENBQzVCLE9BQXlCLEVBQ3pCLEtBQWlDO0lBRWpDLElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFFbEMsSUFBSSxTQUFTLEVBQUU7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQUM7UUFDakQsa0JBQVcsQ0FBQztZQUNSLElBQUksRUFBRSxTQUFTO1lBQ2YsTUFBTSxFQUFFLE9BQU8sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztLQUNOO0lBRUQsSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztJQUMxQyxJQUFJLGFBQWEsRUFBRTtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7U0FBQztRQUN6RCxrQkFBVyxDQUFDO1lBQ1IsSUFBSSxFQUFFLGFBQWE7WUFDbkIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhO1NBQ2hDLENBQUMsQ0FBQztLQUNOO0FBQ0wsQ0FBQztBQUVELFNBQWdCLFlBQVksQ0FBRSxFQVk3QjtRQVhHLE9BQU8sYUFBQSxFQUNQLEtBQUssV0FBQSxFQUNMLGNBQWMsRUFBZCxNQUFNLG1CQUFHLEtBQUssS0FBQSxFQUNkLFlBQXVCLEVBQXZCLElBQUkseUJBQW1CLEVBQ3ZCLFNBQVMsZUFBQTtJQVFULElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO1FBQzlCLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0tBQ3pCO0lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLEVBQUU7UUFDOUIsT0FBTyxPQUFPLENBQUM7S0FDbEI7SUFFRCxLQUFLLEdBQUcsZ0JBQVMsQ0FBQyxLQUFLLENBQStCLENBQUM7SUFFdkQsSUFBSSxJQUFJLE1BQXFCLEVBQUU7UUFDM0IsY0FBYyxDQUFDLE9BQXNCLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDakQ7U0FBTSxJQUFJLElBQUksTUFBMEIsRUFBRTtRQUN2Qyx1QkFBdUIsQ0FBQyxPQUEyQixFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQy9EO0lBQ0QsU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTNDLG1CQUFXLENBQUMsRUFBQyxPQUFPLFNBQUEsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLFFBQUEsRUFBRSxTQUFTLFdBQUEsRUFBQyxDQUFDLENBQUM7SUFFbkUsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQWpDRCxvQ0FpQ0M7QUFFRCxTQUFnQixZQUFZLENBQUUsRUFRN0I7UUFQRyxPQUFPLGFBQUEsRUFDUCxJQUFJLFVBQUEsRUFDSixTQUFTLGVBQUE7SUFNVCxPQUFPLFlBQVksQ0FBQztRQUNoQixPQUFPLFNBQUE7UUFDUCxLQUFLLEVBQUUsWUFBWTtRQUNuQixNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksTUFBQTtRQUNKLFNBQVMsV0FBQTtLQUNaLENBQUMsQ0FBQztBQUNQLENBQUM7QUFoQkQsb0NBZ0JDO0FBRUQsU0FBZ0IsWUFBWSxDQUFFLEtBQW1CO0lBQzdDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDckIsNkJBQXFCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFIRCxvQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHRhY2tjaGVuXHJcbiAqIEBEYXRlOiAyMDIxLTA1LTAxIDE5OjMyOjQyXHJcbiAqIEBMYXN0RWRpdG9yczogdGhlYWphY2tcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMSAyMjo0NToyMVxyXG4gKiBARmlsZVBhdGg6IFxcbXAtbWl4aW5cXHNyY1xcbWl4aW4udHNcclxuICogQERlc2NyaXB0aW9uOiBDb2Rpbmcgc29tZXRoaW5nXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtUQVJHRVRfVFlQRX0gZnJvbSAnLi9jb25zdGFudCc7XHJcbmltcG9ydCB7Y2hlY2tHbG9iYWxNaXhpblN0b3JlLCBpbmplY3RTdG9yZX0gZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7SUNvbXBvbmVudE9wdGlvbiwgSUdsb2JhbE1peGluLCBJSnNvbiwgSUxvY2FsTWl4aW4sIElQYWdlT3B0aW9ufSBmcm9tICcuL3R5cGUnO1xyXG5pbXBvcnQge2RlZXBDbG9uZSwgbWFwVG9UYXJnZXQsIHBpY2t9IGZyb20gJy4vdXRpbCc7XHJcblxyXG5sZXQgZ2xvYmFsTWl4aW5zOiBJR2xvYmFsTWl4aW47XHJcblxyXG5jb25zdCBwYWdlTGlmZVRpbWVOYW1lcyA9IFtcclxuICAgICdvbkxvYWQnLFxyXG4gICAgJ29uU2hvdycsXHJcbiAgICAnb25SZWFkeScsXHJcbiAgICAnb25IaWRlJyxcclxuICAgICdvblNob3cnLFxyXG4gICAgJ29uVW5sb2FkJyxcclxuXHJcbiAgICAnb25QdWxsRG93blJlZnJlc2gnLFxyXG4gICAgJ29uUmVhY2hCb3R0b20nLFxyXG4gICAgJ29uU2hhcmVBcHBNZXNzYWdlJyxcclxuICAgICdvblNoYXJlVGltZWxpbmUnLFxyXG4gICAgJ29uQWRkVG9GYXZvcml0ZXMnLFxyXG4gICAgJ29uUGFnZVNjcm9sbCcsXHJcbiAgICAnb25SZXNpemUnLFxyXG4gICAgJ29uVGFiSXRlbVRhcCcsXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5EYXRhIChvcHRpb25zOiBJUGFnZU9wdGlvbiwgZGF0YT86IElKc29uKSB7XHJcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcbiAgICBtYXBUb1RhcmdldCh7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICB0YXJnZXQ6IG9wdGlvbnMuZGF0YVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1peGluTWV0aG9kcyAoXHJcbiAgICBvcHRpb25zOiBJUGFnZU9wdGlvbiB8IElDb21wb25lbnRPcHRpb24sXHJcbiAgICBtZXRob2RzPzogSUpzb248RnVuY3Rpb24+LFxyXG4gICAgdHlwZTogVEFSR0VUX1RZUEUgPSBUQVJHRVRfVFlQRS5QQUdFXHJcbikge1xyXG4gICAgaWYgKCFtZXRob2RzKSByZXR1cm47XHJcbiAgICBjb25zdCBpc0NvbXBvbmVudCA9IHR5cGUgPT09IFRBUkdFVF9UWVBFLkNPTVBPTkVOVDtcclxuICAgIGlmIChpc0NvbXBvbmVudCAmJiAhb3B0aW9ucy5tZXRob2RzKSB7XHJcbiAgICAgICAgb3B0aW9ucy5tZXRob2RzID0ge307XHJcbiAgICB9XHJcbiAgICBtYXBUb1RhcmdldCh7XHJcbiAgICAgICAgZGF0YTogbWV0aG9kcyxcclxuICAgICAgICB0YXJnZXQ6IGlzQ29tcG9uZW50ID9cclxuICAgICAgICAgICAgKG9wdGlvbnMgYXMgSUNvbXBvbmVudE9wdGlvbikubWV0aG9kcyBhcyBJSnNvbjxGdW5jdGlvbj4gOlxyXG4gICAgICAgICAgICBvcHRpb25zXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWl4aW5MaWZlVGltZXMgKFxyXG4gICAgb3B0aW9uczogSVBhZ2VPcHRpb24sXHJcbiAgICBtaXhpbjogSUdsb2JhbE1peGluIHwgSUxvY2FsTWl4aW5cclxuKSB7XHJcbiAgICBjb25zdCBsZWZ0VGltZXMgPSBwaWNrKG1peGluLCBwYWdlTGlmZVRpbWVOYW1lcyk7XHJcbiAgXHJcbiAgICBtYXBUb1RhcmdldCh7XHJcbiAgICAgICAgZGF0YTogbGVmdFRpbWVzLFxyXG4gICAgICAgIHRhcmdldDogb3B0aW9uc1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1peGluQ29tcG9uZW50TGlmZVRpbWVzIChcclxuICAgIG9wdGlvbnM6IElDb21wb25lbnRPcHRpb24sXHJcbiAgICBtaXhpbjogSUdsb2JhbE1peGluIHwgSUxvY2FsTWl4aW5cclxuKSB7XHJcbiAgICBjb25zdCBsZWZ0VGltZXMgPSBtaXhpbi5saWZldGltZXM7XHJcblxyXG4gICAgaWYgKGxlZnRUaW1lcykge1xyXG4gICAgICAgIGlmICghb3B0aW9ucy5saWZldGltZXMpIHtvcHRpb25zLmxpZmV0aW1lcyA9IHt9O31cclxuICAgICAgICBtYXBUb1RhcmdldCh7XHJcbiAgICAgICAgICAgIGRhdGE6IGxlZnRUaW1lcyxcclxuICAgICAgICAgICAgdGFyZ2V0OiBvcHRpb25zLmxpZmV0aW1lc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhZ2VMaWZ0VGltZXMgPSBtaXhpbi5wYWdlTGlmZXRpbWVzO1xyXG4gICAgaWYgKHBhZ2VMaWZ0VGltZXMpIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMucGFnZUxpZmV0aW1lcykge29wdGlvbnMucGFnZUxpZmV0aW1lcyA9IHt9O31cclxuICAgICAgICBtYXBUb1RhcmdldCh7XHJcbiAgICAgICAgICAgIGRhdGE6IHBhZ2VMaWZ0VGltZXMsXHJcbiAgICAgICAgICAgIHRhcmdldDogb3B0aW9ucy5wYWdlTGlmZXRpbWVzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkN1cnJlbnQgKHtcclxuICAgIG9wdGlvbnMsXHJcbiAgICBtaXhpbixcclxuICAgIGdsb2JhbCA9IGZhbHNlLFxyXG4gICAgdHlwZSA9IFRBUkdFVF9UWVBFLlBBR0UsXHJcbiAgICBzdG9yZVRvb2wsXHJcbn06IHtcclxuICAgIG9wdGlvbnM6IElQYWdlT3B0aW9uIHwgSUNvbXBvbmVudE9wdGlvbjtcclxuICAgIG1peGluPzogSUdsb2JhbE1peGluIHwgSUxvY2FsTWl4aW47XHJcbiAgICBnbG9iYWw/OiBib29sZWFuO1xyXG4gICAgdHlwZT86IFRBUkdFVF9UWVBFO1xyXG4gICAgc3RvcmVUb29sOiBJSnNvbjtcclxufSkge1xyXG4gICAgaWYgKHR5cGVvZiBtaXhpbiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBtaXhpbiA9IG9wdGlvbnMubWl4aW47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG1peGluID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgbWl4aW4gPSBkZWVwQ2xvbmUobWl4aW4pIGFzIElHbG9iYWxNaXhpbiB8IElMb2NhbE1peGluO1xyXG5cclxuICAgIGlmICh0eXBlID09PSBUQVJHRVRfVFlQRS5QQUdFKSB7XHJcbiAgICAgICAgbWl4aW5MaWZlVGltZXMob3B0aW9ucyBhcyBJUGFnZU9wdGlvbiwgbWl4aW4pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBUQVJHRVRfVFlQRS5DT01QT05FTlQpIHtcclxuICAgICAgICBtaXhpbkNvbXBvbmVudExpZmVUaW1lcyhvcHRpb25zIGFzIElDb21wb25lbnRPcHRpb24sIG1peGluKTtcclxuICAgIH1cclxuICAgIG1peGluRGF0YShvcHRpb25zLCBtaXhpbi5kYXRhKTtcclxuICAgIG1peGluTWV0aG9kcyhvcHRpb25zLCBtaXhpbi5tZXRob2RzLCB0eXBlKTtcclxuXHJcbiAgICBpbmplY3RTdG9yZSh7b3B0aW9ucywgbWl4aW5TdG9yZTogbWl4aW4uc3RvcmUsIGdsb2JhbCwgc3RvcmVUb29sfSk7XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfbWl4aW5HbG9iYWwgKHtcclxuICAgIG9wdGlvbnMsXHJcbiAgICB0eXBlLFxyXG4gICAgc3RvcmVUb29sXHJcbn06IHtcclxuICAgIG9wdGlvbnM6IElQYWdlT3B0aW9uIHwgSUNvbXBvbmVudE9wdGlvbjtcclxuICAgIHR5cGU6IFRBUkdFVF9UWVBFO1xyXG4gICAgc3RvcmVUb29sOiBJSnNvbjtcclxufSkge1xyXG4gICAgcmV0dXJuIG1peGluQ3VycmVudCh7XHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICBtaXhpbjogZ2xvYmFsTWl4aW5zLFxyXG4gICAgICAgIGdsb2JhbDogdHJ1ZSxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHN0b3JlVG9vbFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfZ2xvYmFsTWl4aW4gKG1peGluOiBJR2xvYmFsTWl4aW4pIHtcclxuICAgIGdsb2JhbE1peGlucyA9IG1peGluO1xyXG4gICAgY2hlY2tHbG9iYWxNaXhpblN0b3JlKG1peGluLnN0b3JlKTtcclxufSJdfQ==