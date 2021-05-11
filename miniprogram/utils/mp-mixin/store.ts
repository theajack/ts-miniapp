/*
 * @Author: tackchen
 * @Date: 2021-05-01 20:29:47
 * @LastEditors: theajack
 * @LastEditTime: 2021-05-11 22:39:50
 * @FilePath: \mp-mixin\src\store.ts
 * @Description: 状态共享
 */

import {TARGET_TYPE} from './constant';
import {IComponentOption, IContext, IJson, IPageOption, IStore} from './type';
import {mapToTarget, creatEventReady} from './util';

let globalStore: IStore;
let storeId = 0;
export function _createStore (state: IJson): IStore {
    const currentId = ++storeId;
    // 缓存setData key
    const attrMap: IJson<string[]> = {};
    const getAttrs = (setDataAttr: string) => {
        if (!attrMap[setDataAttr]) {
            attrMap[setDataAttr] = handleSetDataAttr(setDataAttr);
        }
        return attrMap[setDataAttr];
    };
    const {onEventReady, eventReady} = creatEventReady<IJson>();

    const modifyState = (
        attrs: string[], value: any, setDataAttr: string
    ) => {
        let data = state;
        const last = attrs.length - 1;
        attrs.forEach((attr: string, index: number) => {
            if (index === last) {
                data[attr] = value;
                eventReady({[setDataAttr]: value});
            } else {
                if (typeof data[attr] === 'undefined') {
                    throw new Error(`Error setData:${setDataAttr}`);
                }
                data = data[attr];
            }
        });
    };

    return {
        state,
        __: {
            _id: currentId,
            _injectContext (currentContext: IContext, storeTool: IJson) {
                if (storeTool._store[currentId].inited) {
                    return;
                }
                storeTool._context = currentContext;
                storeTool._store[currentId].inited = true;
                hackSetData(currentContext, currentId, storeTool);
                onEventReady((data) => {
                    storeTool._nativeSetData.call(currentContext, data);
                });
            },
            _hitState (setDataAttr: string, value: any, ignoreList: string[]) {
                const attrs = getAttrs(setDataAttr);
                const modifyAttr = attrs[0];
                if (typeof state[modifyAttr] === 'undefined' || ignoreList.indexOf(modifyAttr) !== -1) {
                    return false;
                }
                modifyState(attrs, value, setDataAttr);
                return true;
            }
        }
    };
}

function hackSetData (context: IContext, storeId: number, storeTool: IJson) {
    const nativeSetData = context.setData;
    if (!storeTool._setDataList) {
        storeTool._setDataList = [];
        storeTool._nativeSetData = nativeSetData;
        context.setData = (data, callback) => {
            storeTool._setDataList.forEach((fn: Function) => fn(data));
            return nativeSetData.call(context, data, callback);
        };
    }
    storeTool._setDataList.push((data: IJson) => {
        const {store, ignoreList} = storeTool._store[storeId];
        for (const k in data) {
            store.__._hitState(k, data[k], ignoreList);
        }
    });
}

function handleSetDataAttr (attr: string) {
    attr = attr.replace(/\[/g, '.').replace(/\]/g, '');
    return attr.split('.');
}

export function initStoreHacker ({
    options,
    type,
    storeTool,
}: {
    options: IPageOption;
    type: TARGET_TYPE;
    storeTool: IJson;
}) {
    const stores = storeTool._store;
    if (stores) {
        for (const k in stores) {
            handleStore({
                options,
                store: stores[k].store,
                type,
                storeTool
            });
        }
    }
}

function readOnloadLifeTime (options: IPageOption | IComponentOption, type: TARGET_TYPE) {
    if (type === TARGET_TYPE.PAGE) {
        return options.onLoad;
    } else if (type === TARGET_TYPE.COMPONENT) {
        if (options.lifetimes) {
            return options.lifetimes.attached; // 使用attached 而不使用 created，因为created中不可使用setData
        }
    }
    return null;
}

function writeOnloadLifeTime (
    options: IPageOption | IComponentOption,
    type: TARGET_TYPE,
    func: (this: IContext) => void
) {
    if (type === TARGET_TYPE.PAGE) {
        options.onLoad = func;
    } else if (type === TARGET_TYPE.COMPONENT) {
        if (!options.lifetimes) {options.lifetimes = {};}
        options.lifetimes.attached = func;
    }
}

function handleStore ({
    options,
    store,
    type,
    storeTool,
}: {
    options: IPageOption | IComponentOption;
    store: IStore;
    type: TARGET_TYPE;
    storeTool: IJson;
}) {
    if (!store) return;
    const setDataHacker = function (this: IContext) {
        store.__._injectContext(this, storeTool);
    };
    const nativeOnLoad = readOnloadLifeTime(options, type);
    if (!nativeOnLoad) { // 劫持onLoad来注入setData
        writeOnloadLifeTime(options, type, setDataHacker);
    } else {
        if (!storeTool._onLoadList) {
            storeTool._onLoadList = [];
            const onLoadHacker = function (this: IContext, ...args: any[]) {
                storeTool._onLoadList.forEach((fn: (this: IContext) => void) => fn.call(this));
                nativeOnLoad.apply(this, args);
            };
            writeOnloadLifeTime(options, type, onLoadHacker);
        }
  
        storeTool._onLoadList.push(setDataHacker);
    }
}

export function _initGlobalStore (state: IJson | IStore) {
    globalStore = ((!state.__) ? _createStore(state) : state) as IStore;
    return globalStore;
}

export function checkGlobalMixinStore (store?: IJson | IStore) {
    if (!store) return;
    _initGlobalStore(store);
}

export function injectStore ({
    options,
    mixinStore,
    storeTool,
    global = false,
}: {
    options: IPageOption;
    mixinStore?: IStore | IJson<any>;
    storeTool: IJson;
    global?: boolean;
}) {
    const store = ((global) ? globalStore : (options.store || mixinStore)) as IStore;
    if (!store) return;
    if (!storeTool._store) {storeTool._store = {};};
    storeTool._store[store.__._id] = {
        store,
        ignoreList: mapToTarget({
            data: store.state,
            target: options.data
        })
    };
}