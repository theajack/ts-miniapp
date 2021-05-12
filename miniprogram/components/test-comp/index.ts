// components/test-comp/index.js
import {localStore} from '../../utils/util';
let index = 0;
Component({
    /**
     * 组件的属性列表
     */
    mixin: {
        store: localStore,
    },
    properties: {
        componentProp: {
            type: String,
            value: 'component prop',
        }
    },
  
    lifetimes: {
        attached () {
        },
        detached () {
        }
    },
    pageLifetimes: {

    },
  
    /**
     * 组件的方法列表
     */
    methods: {
        onTapGloabl () {
            this.setData({globalStoreData: `[${(++index)}]global store changed from child`});
        },
        onTapLocal () {
            this.setData({localStoreData: `[${(++index)}]local store changed from child`});
        },
    }
});
  