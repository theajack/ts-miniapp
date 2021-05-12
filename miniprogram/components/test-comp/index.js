"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Component({
    mixin: {
        store: util_1.localStore
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUE0QztBQUM1QyxTQUFTLENBQUM7SUFJTixLQUFLLEVBQUU7UUFDSCxLQUFLLEVBQUUsaUJBQVU7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDUixRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxXQUFXO1NBQ3JCO0tBQ0o7SUFLRCxJQUFJLEVBQUU7UUFDRixRQUFRLEVBQUUsV0FBVztLQUN4QjtJQUNELFNBQVMsRUFBRTtRQUNQLFFBQVE7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxRQUFRO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QixDQUFDO0tBQ0o7SUFDRCxhQUFhLEVBQUUsRUFFZDtJQUtELE9BQU8sRUFBRSxFQUVSO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy90ZXN0LWNvbXAvaW5kZXguanNcclxuaW1wb3J0IHtsb2NhbFN0b3JlfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuQ29tcG9uZW50KHtcclxuICAgIC8qKlxyXG4gICAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIG1peGluOiB7XHJcbiAgICAgICAgc3RvcmU6IGxvY2FsU3RvcmVcclxuICAgIH0sXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY29tcFByb3A6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2NvbXAgcHJvcCcsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICBcclxuICAgIC8qKlxyXG4gICAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIGRhdGE6IHtcclxuICAgICAgICBjb21wRGF0YTogJ2NvbXAgZGF0YSdcclxuICAgIH0sXHJcbiAgICBsaWZldGltZXM6IHtcclxuICAgICAgICBhdHRhY2hlZCAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdHRhY2hlZCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGV0YWNoZWQgKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGV0YWNoZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGFnZUxpZmV0aW1lczoge1xyXG5cclxuICAgIH0sXHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIOe7hOS7tueahOaWueazleWIl+ihqFxyXG4gICAgICovXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgXHJcbiAgICB9XHJcbn0pO1xyXG4gICJdfQ==