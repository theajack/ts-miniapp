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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUE0QztBQUM1QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxTQUFTLENBQUM7SUFJTixLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsaUJBQVU7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDUixhQUFhLEVBQUU7WUFDWCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxnQkFBZ0I7U0FDMUI7S0FDSjtJQUVELFNBQVMsRUFBRTtRQUNQLFFBQVE7UUFDUixDQUFDO1FBQ0QsUUFBUTtRQUNSLENBQUM7S0FDSjtJQUNELGFBQWEsRUFBRSxFQUVkO0lBS0QsT0FBTyxFQUFFO1FBQ0wsV0FBVztZQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxlQUFlLEVBQUUsTUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLHFDQUFrQyxFQUFDLENBQUMsQ0FBQztRQUNyRixDQUFDO1FBQ0QsVUFBVTtZQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsTUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLG9DQUFpQyxFQUFDLENBQUMsQ0FBQztRQUNuRixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL3Rlc3QtY29tcC9pbmRleC5qc1xuaW1wb3J0IHtsb2NhbFN0b3JlfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcbmxldCBpbmRleCA9IDA7XG5Db21wb25lbnQoe1xuICAgIC8qKlxuICAgICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgICAqL1xuICAgIG1peGluOiB7XG4gICAgICAgIHN0b3JlOiBsb2NhbFN0b3JlLFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjb21wb25lbnRQcm9wOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2NvbXBvbmVudCBwcm9wJyxcbiAgICAgICAgfVxuICAgIH0sXG4gIFxuICAgIGxpZmV0aW1lczoge1xuICAgICAgICBhdHRhY2hlZCAoKSB7XG4gICAgICAgIH0sXG4gICAgICAgIGRldGFjaGVkICgpIHtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGFnZUxpZmV0aW1lczoge1xuXG4gICAgfSxcbiAgXG4gICAgLyoqXG4gICAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAgICovXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvblRhcEdsb2FibCAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe2dsb2JhbFN0b3JlRGF0YTogYFskeygrK2luZGV4KX1dZ2xvYmFsIHN0b3JlIGNoYW5nZWQgZnJvbSBjaGlsZGB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25UYXBMb2NhbCAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe2xvY2FsU3RvcmVEYXRhOiBgWyR7KCsraW5kZXgpfV1sb2NhbCBzdG9yZSBjaGFuZ2VkIGZyb20gY2hpbGRgfSk7XG4gICAgICAgIH0sXG4gICAgfVxufSk7XG4gICJdfQ==