"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Component({
    mixin: {
        store: util_1.localStore,
    },
    properties: {
        compProp: {
            type: String,
            value: 'comp prop',
        }
    },
    data: {
        compData: 'comp data'
    },
    lifetimes: {
        attached: function () {
            console.log('attached');
        },
        detached: function () {
            console.log('detached');
        }
    },
    pageLifetimes: {},
    methods: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUE0QztBQUM1QyxTQUFTLENBQUM7SUFJTixLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsaUJBQVU7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDUixRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxXQUFXO1NBQ3JCO0tBQ0o7SUFLRCxJQUFJLEVBQUU7UUFDRixRQUFRLEVBQUUsV0FBVztLQUN4QjtJQUNELFNBQVMsRUFBRTtRQUNQLFFBQVE7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxRQUFRO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QixDQUFDO0tBQ0o7SUFDRCxhQUFhLEVBQUUsRUFFZDtJQUtELE9BQU8sRUFBRSxFQUVSO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy90ZXN0LWNvbXAvaW5kZXguanNcclxuaW1wb3J0IHtsb2NhbFN0b3JlfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuQ29tcG9uZW50KHtcclxuICAgIC8qKlxyXG4gICAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIG1peGluOiB7XHJcbiAgICAgICAgc3RvcmU6IGxvY2FsU3RvcmUsXHJcbiAgICB9LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNvbXBQcm9wOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdjb21wIHByb3AnLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgY29tcERhdGE6ICdjb21wIGRhdGEnXHJcbiAgICB9LFxyXG4gICAgbGlmZXRpbWVzOiB7XHJcbiAgICAgICAgYXR0YWNoZWQgKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXR0YWNoZWQnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRldGFjaGVkICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RldGFjaGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBhZ2VMaWZldGltZXM6IHtcclxuXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcclxuICAgICAqL1xyXG4gICAgbWV0aG9kczoge1xyXG4gIFxyXG4gICAgfVxyXG59KTtcclxuICAiXX0=