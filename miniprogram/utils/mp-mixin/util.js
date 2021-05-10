"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatEventReady = exports.pick = exports.mapToTarget = exports.deepClone = void 0;
function deepClone(object) {
    if (typeof object !== 'object') {
        return object;
    }
    var isArray = object instanceof Array;
    if (isArray) {
        return object.map(function (item) { return deepClone(item); });
    }
    else {
        var result = {};
        for (var k in object) {
            result[k] = deepClone(object[k]);
        }
        return result;
    }
}
exports.deepClone = deepClone;
function mapToTarget(_a) {
    var data = _a.data, target = _a.target, _b = _a.force, force = _b === void 0 ? false : _b;
    var ignoreList = [];
    for (var k in data) {
        if (force || typeof target[k] === 'undefined') {
            target[k] = data[k];
        }
        else {
            ignoreList.push(k);
        }
    }
    return ignoreList;
}
exports.mapToTarget = mapToTarget;
function pick(data, attributes) {
    if (attributes === void 0) { attributes = []; }
    var result = {};
    attributes.forEach(function (attr) {
        if (typeof data[attr] !== 'undefined') {
            result[attr] = data[attr];
        }
        ;
    });
    return result;
}
exports.pick = pick;
function creatEventReady() {
    var queue = [];
    var lastArgs = null;
    function onEventReady(fn) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!queue.find(function (item) { return item.fn === fn; })) {
            queue.push({ fn: fn, args: args });
        }
        if (lastArgs !== null) {
            if (args.length === 0 && lastArgs) {
                args = lastArgs;
            }
            fn.apply(void 0, args);
        }
    }
    function eventReady() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        lastArgs = args;
        queue.forEach(function (item) {
            item.fn.apply(item, ((args.length === 0) ? item.args : args));
        });
    }
    return {
        onEventReady: onEventReady,
        eventReady: eventReady
    };
}
exports.creatEventReady = creatEventReady;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBV0EsU0FBZ0IsU0FBUyxDQUFFLE1BQVc7SUFDbEMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDNUIsT0FBTyxNQUFNLENBQUM7S0FDakI7SUFDRCxJQUFNLE9BQU8sR0FBRyxNQUFNLFlBQVksS0FBSyxDQUFDO0lBQ3hDLElBQUksT0FBTyxFQUFFO1FBQ1QsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBUyxJQUFLLE9BQUEsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQ3JEO1NBQU07UUFDSCxJQUFNLE1BQU0sR0FBVSxFQUFFLENBQUM7UUFDekIsS0FBSyxJQUFNLENBQUMsSUFBSSxNQUFNLEVBQUU7WUFDcEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQztRQUNELE9BQU8sTUFBTSxDQUFDO0tBQ2pCO0FBQ0wsQ0FBQztBQWRELDhCQWNDO0FBRUQsU0FBZ0IsV0FBVyxDQUFFLEVBTTVCO1FBTEcsSUFBSSxVQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsYUFBYSxFQUFiLEtBQUssbUJBQUcsS0FBSyxLQUFBO0lBTTNCLElBQU0sVUFBVSxHQUFhLEVBQUUsQ0FBQztJQUNoQyxLQUFLLElBQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtRQUNsQixJQUFJLEtBQUssSUFBSSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDM0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjthQUFNO1lBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjtLQUVKO0lBQ0QsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQWpCRCxrQ0FpQkM7QUFFRCxTQUFnQixJQUFJLENBQUUsSUFBVyxFQUFFLFVBQThCO0lBQTlCLDJCQUFBLEVBQUEsZUFBOEI7SUFDN0QsSUFBTSxNQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ3pCLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1FBQ25CLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUFFO1FBQUEsQ0FBQztJQUMxRSxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFORCxvQkFNQztBQUVELFNBQWdCLGVBQWU7SUFFM0IsSUFBTSxLQUFLLEdBR0wsRUFBRSxDQUFDO0lBQ1QsSUFBSSxRQUFRLEdBQWUsSUFBSSxDQUFDO0lBRWhDLFNBQVMsWUFBWSxDQUFFLEVBQXdCO1FBQUUsY0FBWTthQUFaLFVBQVksRUFBWixxQkFBWSxFQUFaLElBQVk7WUFBWiw2QkFBWTs7UUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsRUFBRTtZQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxJQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUMsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksUUFBUSxFQUFFO2dCQUMvQixJQUFJLEdBQUcsUUFBUSxDQUFDO2FBQ25CO1lBQ0QsRUFBRSxlQUFJLElBQUksRUFBRTtTQUNmO0lBQ0wsQ0FBQztJQUVELFNBQVMsVUFBVTtRQUFFLGNBQVk7YUFBWixVQUFZLEVBQVoscUJBQVksRUFBWixJQUFZO1lBQVoseUJBQVk7O1FBQzdCLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDZCxJQUFJLENBQUMsRUFBRSxPQUFQLElBQUksRUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsT0FBTztRQUNILFlBQVksY0FBQTtRQUNaLFVBQVUsWUFBQTtLQUNiLENBQUM7QUFDTixDQUFDO0FBL0JELDBDQStCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHRhY2tjaGVuXHJcbiAqIEBEYXRlOiAyMDIxLTA1LTAxIDE5OjQ5OjI4XHJcbiAqIEBMYXN0RWRpdG9yczogdGFja2NoZW5cclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0wMiAxNDoxODoxN1xyXG4gKiBARmlsZVBhdGg6IFxcbXAtbWl4aW5cXHNyY1xcdXRpbC50c1xyXG4gKiBARGVzY3JpcHRpb246IENvZGluZyBzb21ldGhpbmdcclxuICovXHJcblxyXG5pbXBvcnQge0lFdmVudFJlYWR5LCBJSnNvbn0gZnJvbSAnLi90eXBlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmUgKG9iamVjdDogYW55KTogYW55IHtcclxuICAgIGlmICh0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpc0FycmF5ID0gb2JqZWN0IGluc3RhbmNlb2YgQXJyYXk7XHJcbiAgICBpZiAoaXNBcnJheSkge1xyXG4gICAgICAgIHJldHVybiBvYmplY3QubWFwKChpdGVtOiBhbnkpID0+IGRlZXBDbG9uZShpdGVtKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogSUpzb24gPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGsgaW4gb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IGRlZXBDbG9uZShvYmplY3Rba10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwVG9UYXJnZXQgKHtcclxuICAgIGRhdGEsIHRhcmdldCwgZm9yY2UgPSBmYWxzZVxyXG59OiB7XHJcbiAgZGF0YTogSUpzb247XHJcbiAgdGFyZ2V0OiBJSnNvbjtcclxuICBmb3JjZT86IGJvb2xlYW47XHJcbn0pOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBpZ25vcmVMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrIGluIGRhdGEpIHtcclxuICAgICAgICBpZiAoZm9yY2UgfHwgdHlwZW9mIHRhcmdldFtrXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tdID0gZGF0YVtrXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZ25vcmVMaXN0LnB1c2goayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlnbm9yZUxpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwaWNrIChkYXRhOiBJSnNvbiwgYXR0cmlidXRlczogQXJyYXk8c3RyaW5nPiA9IFtdKSB7XHJcbiAgICBjb25zdCByZXN1bHQ6IElKc29uID0ge307XHJcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2F0dHJdICE9PSAndW5kZWZpbmVkJykgeyByZXN1bHRbYXR0cl0gPSBkYXRhW2F0dHJdOyB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRFdmVudFJlYWR5PFQgPSBhbnk+ICgpOiBJRXZlbnRSZWFkeTxUPiB7XHJcblxyXG4gICAgY29uc3QgcXVldWU6IHtcclxuICAgICAgICBmbjogRnVuY3Rpb247XHJcbiAgICAgICAgYXJnczogVFtdO1xyXG4gICAgfVtdID0gW107XHJcbiAgICBsZXQgbGFzdEFyZ3M6IFRbXSB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uRXZlbnRSZWFkeSAoZm46ICguLi5hcmdzOiBUW10pPT52b2lkLCAuLi5hcmdzOiBUW10pIHtcclxuICAgICAgICBpZiAoIXF1ZXVlLmZpbmQoaXRlbSA9PiBpdGVtLmZuID09PSBmbikpIHtcclxuICAgICAgICAgICAgcXVldWUucHVzaCh7Zm4sIGFyZ3N9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxhc3RBcmdzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCAmJiBsYXN0QXJncykge1xyXG4gICAgICAgICAgICAgICAgYXJncyA9IGxhc3RBcmdzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZuKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICBcclxuICAgIGZ1bmN0aW9uIGV2ZW50UmVhZHkgKC4uLmFyZ3M6IFRbXSkge1xyXG4gICAgICAgIGxhc3RBcmdzID0gYXJncztcclxuICAgICAgICBxdWV1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmZuKC4uLigoYXJncy5sZW5ndGggPT09IDApID8gaXRlbS5hcmdzIDogYXJncykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb25FdmVudFJlYWR5LFxyXG4gICAgICAgIGV2ZW50UmVhZHlcclxuICAgIH07XHJcbn0iXX0=