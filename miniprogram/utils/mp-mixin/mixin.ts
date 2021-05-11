/*
 * @Author: tackchen
 * @Date: 2021-05-01 19:32:42
 * @LastEditors: theajack
 * @LastEditTime: 2021-05-11 22:36:13
 * @FilePath: \mp-mixin\src\mixin.ts
 * @Description: Coding something
 */

import {TARGET_TYPE} from './constant';
import {checkGlobalMixinStore, injectStore} from './store';
import {IComponentOption, IGlobalMixin, IJson, ILocalMixin, IPageOption} from './type';
import {deepClone, mapToTarget, pick} from './util';

let globalMixins: IGlobalMixin;

const pageLifeTimeNames = [
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

export function mixinData (options: IPageOption, data?: IJson) {
    if (typeof data === 'undefined') return;
    mapToTarget({
        data,
        target: options.data
    });
}

function mixinMethods (
    options: IPageOption | IComponentOption,
    methods?: IJson<Function>,
    type: TARGET_TYPE = TARGET_TYPE.PAGE
) {
    if (!methods) return;
    const isComponent = type === TARGET_TYPE.COMPONENT;
    if (isComponent && !options.methods) {
        options.methods = {};
    }
    mapToTarget({
        data: methods,
        target: isComponent ?
            (options as IComponentOption).methods as IJson<Function> :
            options
    });
}

function mixinLifeTimes (
    options: IPageOption,
    mixin: IGlobalMixin | ILocalMixin
) {
    const leftTimes = pick(mixin, pageLifeTimeNames);
  
    mapToTarget({
        data: leftTimes,
        target: options
    });
}

function mixinComponentLifeTimes (
    options: IComponentOption,
    mixin: IGlobalMixin | ILocalMixin
) {
    const leftTimes = mixin.lifetimes;

    if (leftTimes) {
        if (!options.lifetimes) {options.lifetimes = {};}
        mapToTarget({
            data: leftTimes,
            target: options.lifetimes
        });
    }

    const pageLiftTimes = mixin.pageLifetimes;
    if (pageLiftTimes) {
        if (!options.pageLifetimes) {options.pageLifetimes = {};}
        mapToTarget({
            data: pageLiftTimes,
            target: options.pageLifetimes
        });
    }
}

export function mixinCurrent ({
    options,
    mixin,
    global = false,
    type = TARGET_TYPE.PAGE,
    storeTool,
}: {
    options: IPageOption | IComponentOption;
    mixin?: IGlobalMixin | ILocalMixin;
    global?: boolean;
    type?: TARGET_TYPE;
    storeTool: IJson;
}) {
    if (typeof mixin === 'undefined') {
        mixin = options.mixin;
    }
    if (typeof mixin === 'undefined') {
        return options;
    }
  
    mixin = deepClone(mixin) as IGlobalMixin | ILocalMixin;

    if (type === TARGET_TYPE.PAGE) {
        mixinLifeTimes(options as IPageOption, mixin);
    } else if (type === TARGET_TYPE.COMPONENT) {
        mixinComponentLifeTimes(options as IComponentOption, mixin);
    }
    mixinData(options, mixin.data);
    mixinMethods(options, mixin.methods, type);

    injectStore({options, mixinStore: mixin.store, global, storeTool});

    return options;
}

export function _mixinGlobal ({
    options,
    type,
    storeTool
}: {
    options: IPageOption | IComponentOption;
    type: TARGET_TYPE;
    storeTool: IJson;
}) {
    return mixinCurrent({
        options,
        mixin: globalMixins,
        global: true,
        type,
        storeTool
    });
}

export function _globalMixin (mixin: IGlobalMixin) {
    globalMixins = mixin;
    checkGlobalMixinStore(mixin.store);
}