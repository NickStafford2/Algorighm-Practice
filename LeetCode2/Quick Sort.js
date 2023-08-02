"use strict";
/*
function quickSort(a: number[]): number[] {
    if (a.length < 2) {
        return a;
    }

    for (let i = 0; i < a.length - 1; i++) {
        console.log('--------------------------------------------------------------')
        console.log('i=', i, a);
        const toInsertIndex = i + 1;
        const toInsert = a[toInsertIndex];
        const largestSortedIndex = i;
        const largestSorted = a[i];
        console.log('comparing ', a[i], toInsert);
        if (toInsert < largestSorted) {
            console.log('inserting ', toInsert);
            // insert into sorted section of the array
            let windowMin = 0;
            let windowMax = largestSortedIndex;
            let windowMidIndex = Math.floor((windowMin + windowMax) / 2);
            console.log('Find insert location')
            // quick search
            while (windowMin < windowMax) {
                windowMidIndex = Math.floor((windowMin + windowMax) / 2);
                console.log('       ops=', windowMin, windowMidIndex, windowMax,
                    ' val[]=[', a[windowMin], a[windowMidIndex], a[windowMax], ']');
                console.log('    window=', a.slice(windowMin, windowMax + 1))
                const valueAtMid = a[windowMidIndex]
                console.log('           ', toInsert, '<', valueAtMid);
                if (toInsert < valueAtMid) {
                   windowMax = windowMidIndex - 1;
                }
                else {
                    windowMin = windowMidIndex + 1;
                }
            }
            windowMidIndex = Math.floor((windowMin + windowMax) / 2);
            let insertIndex = windowMidIndex;

            // shift items to make room for the inserted value
            console.log('before inserting ', toInsert, 'at', insertIndex)
            const temp = toInsert;
            console.log('      start=', a);
            for (let j = toInsertIndex; j > insertIndex; j--) {
                a[j] = a[j - 1];
                console.log('\tj=', j, a);
            }
            console.log('        end=', a);
           // insert the value
            a[insertIndex] = temp;
            console.log('   finished=', a);
        }
    }
    return a
}*/
Object.defineProperty(exports, "__esModule", { value: true });
function quickSort(arr, low, high) {
    low = low || 0;
    high = high || arr.length;
    if (low < high) {
        // pi is the partitioning index, arr[pi] is now at the right place
        let pi = partition(arr, low, high);
        // Separately sort elements before partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[high]] = [arr[high], arr[i + 1]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
    return i + 1; // Return the partition index
}
function swap(a, i, j) {
    const temp = a[j];
    a[j] = a[i];
    a[i] = temp;
}
function slowSort(arr) {
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let min = arr[i];
        let minIndex = i;
        // find smallest
        //let min2 = Math.min(...arr.slice(i, arr.length))
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
    return arr;
}
function lazySort(arr) {
    return arr.sort();
}
// pure virtual function
// no side effects.
function lazySortPure(arr) {
    const x = Object.assign([], arr);
    return x.sort();
}
function test() {
    let a;
    //a = [56, 78, 1, 3, 2, 3, 16, 512, 31, 5, 6, 48, 9, 13, 15, 48, 95, 66, 44, 12, 35, 73, 11, 71, 77, 771, 52, 62, 32, 79, 55, 12, 31, 13, 16, 49, 71, 52, 9];
    //console.log(a);
    //console.log(quickSort(a));
    a = [6, 1, 3, -2, 3, 16, -512, 31, 5, 6, 48, 0, 13, 15, 48, 95, -66, 44, 12, 35, 73, 11, 71, 77, 771, 52, 62, 32, 79, 55, 12, 31, 13, 16, 49, 71, 52, 9];
    a = [6, 1, 3, -2, 3, 16, -512, 31, 5, 6, 48,];
    //a = [1, 2, 4, 5, 3, 6, 7, 8, 0, 9, ];
    console.log(a);
    console.log(slowSort(a));
    console.log(quickSort(a));
    let j = 0;
    console.log();
}
exports.default = test;
//# sourceMappingURL=Quick%20Sort.js.map