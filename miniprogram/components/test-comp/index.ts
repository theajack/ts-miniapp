// components/test-comp/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        compProp: {
            type: String,
            value: 'comp prop',
        }
    },
  
    /**
     * 组件的初始数据
     */
    data: {
        compData: 'comp data'
    },
    lifetimes: {
        attached () {
            console.log('attached');
        },
        detached () {
            console.log('detached');
        }
    },
    pageLifetimes: {

    },
  
    /**
     * 组件的方法列表
     */
    methods: {
  
    }
});
  