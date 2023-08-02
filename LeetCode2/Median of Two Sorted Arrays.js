"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findMedianSortedArrays(nums1, nums2) {
    console.log(arrayReadable(nums1), arrayReadable(nums2));
    const medianIndex = (nums1.length + nums2.length) / 2 + 0.5;
    console.log('medianIndex', medianIndex);
    let i1 = 0;
    let i2 = 0;
    let previous = 0;
    let current = 0;
    while (i1 + i2 <= medianIndex) {
        // pick the smallest of the options in the array, unless the array is finished. 
        let option1 = getNextIfExists(i1, nums1);
        let option2 = getNextIfExists(i2, nums2);
        if (option1 < option2) {
            previous = current;
            current = option1;
            i1++;
        }
        else {
            previous = current;
            current = option2;
            i2++;
        }
    }
    if (Number.isInteger(medianIndex)) {
        return previous;
    }
    else {
        return (previous + current) / 2;
    }
}
;
function getNextIfExists(i, arr) {
    return i < arr.length ? arr[i] : Infinity;
}
function arrayReadable(arr) {
    let s = '[';
    for (let i = 0; i < arr.length; i++) {
        s += arr[i] + ',';
    }
    s = s.slice(0, s.length - 1); // remove comma
    return s + '] ';
}
function test() {
    console.log();
    console.log(findMedianSortedArrays([1, 3], [2]), 2);
    console.log();
    console.log(findMedianSortedArrays([1, 2], [3, 4]), 2);
    console.log();
    console.log(findMedianSortedArrays([1], [2]), 1.5);
}
exports.default = test;
//# sourceMappingURL=Median%20of%20Two%20Sorted%20Arrays.js.map