function search(nums: number[], target: number): number {
    console.log();
    const len = nums.length;
    let min = 0;
    let max = nums.length-1;

    while (min <= max) {
        let windowSize = max - min;
        let mid = min + Math.floor(windowSize / 2);
        let n = nums[mid];
        console.log("min", min, " max", max, " i", mid, " n", n);
        if (n === target) {
            return mid;
        }
        else if (n < target) {
            min = mid+1; // mid is too small, try index after it. 
        }
        else {
            max = mid-1;  // mid is too large, try index before it. 
        }
    }
    return -1; // does not exist
};

export default function test() {
    console.log(search([-1, 0, 3, 5, 9, 12], 9), 4)
    console.log(search([-1, 0, 3, 5, 9, 12], 9), -1)
}