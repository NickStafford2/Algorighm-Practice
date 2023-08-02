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

function quickSort(arr: number[], low?: number, high?: number) {
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

function partition(arr: number[], low: number, high: number): number {
    // Choose an arbitrary pivot
    let pivot = arr[high];

    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            // Increment index of smaller element
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1; // Return the partition index
}

function swap(arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}


function slowSort(arr: number[]): number[] {
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
                minIndex = j
            }
        }
        swap(arr, i, minIndex)
    }
    return arr;
}

function lazySort(arr: number[]): number[] {
    return arr.sort();
}

// pure virtual function
// no side effects.
function lazySortPure(arr: number[]): number[] {
    const x: number[] = Object.assign([], arr);
    return x.sort();
}

function RadixSort(arr: number[]): number[] {
    const m = new Map<number, number>();
    const max = Math.max(...arr);


    arr.forEach((value: number, index) => {
        m.set(arr[index], index)
    })
    arr.forEach((value: number, index) => {
        //m.g
        m.set(arr[index], index)
    })
    //let w = new Worker("./Add Two Numbers.js");
    return arr;

}


function quicksort3(arr: number[], i: number, j: number) {
    // break the function in half
    if (i < j) {
        let k = findPivot(arr, i, j)
        quicksort3(arr, i, k);;
        quicksort3(arr, k + 1, j);
    }
}

function findPivot(arr: number[], low: number, high: number): number {
    const pivotValue = arr[high];
    let pivotIndex = low - 1;
    for (let j = low; j < high - 1;) {
        if (arr[j] > pivotValue) {
            pivotIndex++;
            swap(arr, pivotIndex, j);
        }
    }
    swap(arr, pivotIndex+1, high)

    return -1;
}



export default function test() {
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
    console.log()
}