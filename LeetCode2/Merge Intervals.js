"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge(intervals) {
    let merged = [];
    intervals.forEach((interval) => {
        merged.push(Object.assign([], interval));
    });
    console.log('before sort', merged);
    merged.sort(sort);
    console.log('after sort ', merged);
    let i = 0;
    while (merged.length > 1 && i < merged.length - 1) {
        //console.log('i=', i, 'merged=', merged);
        // compare i and i+1
        if (doIntervalsOverlap(merged[i], merged[i + 1])) {
            //console.log(merged[i], ' and', merged[i + 1], 'overlap')
            const temp = mergeInterval(merged[i], merged[i + 1]);
            //console.log('adding', temp)
            merged = merged.slice(2);
            merged.unshift(temp);
            i = 0;
            continue;
        }
        i++;
    }
    return merged;
}
;
function sort(a, b) {
    let aMin = Math.min(...a);
    let aMax = Math.max(...a);
    let bMin = Math.min(...b);
    let bMax = Math.max(...b);
    if (aMin < bMin)
        return -1;
    else if (aMin > bMin)
        return 1;
    else {
        if (aMax < bMax)
            return -1;
        else
            return 1;
    }
}
function temp(i, j, intervals) {
    const temp = mergeInterval(intervals[i], intervals[j]);
    const newIntervals = [];
    newIntervals.push(temp);
    intervals.forEach((value, index) => {
        if (index !== i && index !== j) {
        }
    });
    const a = [temp,];
}
function doIntervalsOverlap(interval1, interval2) {
    let min1 = Math.min(...interval1);
    let max1 = Math.max(...interval1);
    let min2 = Math.min(...interval2);
    let max2 = Math.max(...interval2);
    if (min1 < min2 && max1 < min2)
        return false;
    if (min1 > min2 && min1 > max2)
        return false;
    return true;
}
function mergeInterval(interval1, interval2) {
    return [
        Math.min(...interval1, ...interval2),
        Math.max(...interval1, ...interval2),
    ];
}
function test() {
    console.log("-------------------------------------------");
    console.log(merge([]), []);
    console.log("-------------------------------------------");
    console.log(merge([[1, 4], [1, 4], [1, 4], [1, 4]]), [[1, 4]]);
    console.log("-------------------------------------------");
    console.log(merge([[1, 43], [1, 4], [1, 4], [1, 4]]), [[1, 43]]);
    console.log("-------------------------------------------");
    console.log(merge([[-1, 1], [1, -4], [1, 4], [1, 4]]), [[-4, 4]]);
    console.log("-------------------------------------------");
    console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]), [[1, 6], [8, 10], [15, 18]]);
    console.log("-------------------------------------------");
    console.log(merge([[1, 4], [4, 5]]), [[1, 5]]);
    console.log("-------------------------------------------");
    console.log(merge([[1, 4], [0, 4]]), [[0, 4]]);
    console.log("-------------------------------------------");
    console.log(merge([[2, 3], [5, 5], [2, 2], [3, 4], [3, 4]]), [[2, 4], [5, 5]]);
}
exports.default = test;
//# sourceMappingURL=Merge%20Intervals.js.map