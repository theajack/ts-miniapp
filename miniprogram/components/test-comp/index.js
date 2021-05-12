"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var index = 0;
Component({
    mixin: {
        store: util_1.localStore,
    },
    properties: {
        componentProp: {
            type: String,
            value: 'component prop',
        }
    },
    lifetimes: {
        attached: function () {
        },
        detached: function () {
        }
    },
    pageLifetimes: {},
    methods: {
        onTapGloabl: function () {
            this.setData({ globalStoreData: "[" + (++index) + "]global store changed from child" });
        },
        onTapLocal: function () {
            this.setData({ localStoreData: "[" + (++index) + "]local store changed from child" });
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUE0QztBQUM1QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxTQUFTLENBQUM7SUFJTixLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsaUJBQVU7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDUixhQUFhLEVBQUU7WUFDWCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxnQkFBZ0I7U0FDMUI7S0FDSjtJQUVELFNBQVMsRUFBRTtRQUNQLFFBQVE7UUFDUixDQUFDO1FBQ0QsUUFBUTtRQUNSLENBQUM7S0FDSjtJQUNELGFBQWEsRUFBRSxFQUVkO0lBS0QsT0FBTyxFQUFFO1FBQ0wsV0FBVztZQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxlQUFlLEVBQUUsTUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLHFDQUFrQyxFQUFDLENBQUMsQ0FBQztRQUNyRixDQUFDO1FBQ0QsVUFBVTtZQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsTUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLG9DQUFpQyxFQUFDLENBQUMsQ0FBQztRQUNuRixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL3Rlc3QtY29tcC9pbmRleC5qc1xyXG5pbXBvcnQge2xvY2FsU3RvcmV9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5sZXQgaW5kZXggPSAwO1xyXG5Db21wb25lbnQoe1xyXG4gICAgLyoqXHJcbiAgICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcclxuICAgICAqL1xyXG4gICAgbWl4aW46IHtcclxuICAgICAgICBzdG9yZTogbG9jYWxTdG9yZSxcclxuICAgIH0sXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY29tcG9uZW50UHJvcDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnY29tcG9uZW50IHByb3AnLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgXHJcbiAgICBsaWZldGltZXM6IHtcclxuICAgICAgICBhdHRhY2hlZCAoKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXRhY2hlZCAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBhZ2VMaWZldGltZXM6IHtcclxuXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcclxuICAgICAqL1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uVGFwR2xvYWJsICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtnbG9iYWxTdG9yZURhdGE6IGBbJHsoKytpbmRleCl9XWdsb2JhbCBzdG9yZSBjaGFuZ2VkIGZyb20gY2hpbGRgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblRhcExvY2FsICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtsb2NhbFN0b3JlRGF0YTogYFskeygrK2luZGV4KX1dbG9jYWwgc3RvcmUgY2hhbmdlZCBmcm9tIGNoaWxkYH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG4gICJdfQ==