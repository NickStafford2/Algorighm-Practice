"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function removeNthFromEnd(head, n) {
    if (!head) {
        return null;
    }
    let stack = [];
    {
        let current = head;
        while (current) {
            stack.push(current);
            current = current.next;
            if (stack.length > n + 1) {
                stack = stack.slice(1);
            }
            //console.log(stack)
        }
    }
    let next = null;
    for (let i = 0; i < n - 1; i++) {
        next = stack.pop() || null;
    }
    const toRemove = stack.pop();
    const previous = stack.pop() || null;
    if (toRemove) {
        toRemove.next = null;
    }
    if (previous) {
        previous.next = next || null;
    }
    // edge cases
    if (head === previous) {
        /*
                    head
            node previous toRemove next node
        */
        return head;
    }
    else if (head === toRemove) {
        /*
                head
            toRemove next node
        */
        if (next) {
            // removed the first
            return next;
        }
        else {
            // linked list is empty.
            return null;
        }
    }
    else {
        return head;
    }
}
;
function test() {
    var _a, _b, _c, _d;
    let arr;
    console.log("-------------------------------------------");
    arr = (0, utils_1.arrToLN)([1, 2, 3, 4, 5]);
    console.log(arr === null || arr === void 0 ? void 0 : arr.toArray());
    console.log((_a = removeNthFromEnd(arr, 2)) === null || _a === void 0 ? void 0 : _a.toArray(), [1, 2, 3, 5]);
    console.log("-------------------------------------------");
    arr = (0, utils_1.arrToLN)([1]);
    console.log(arr === null || arr === void 0 ? void 0 : arr.toArray());
    console.log((_b = removeNthFromEnd(arr, 1)) === null || _b === void 0 ? void 0 : _b.toArray(), []);
    console.log("-------------------------------------------");
    arr = (0, utils_1.arrToLN)([1, 2]);
    console.log(arr === null || arr === void 0 ? void 0 : arr.toArray());
    console.log((_c = removeNthFromEnd(arr, 1)) === null || _c === void 0 ? void 0 : _c.toArray(), [1]);
    console.log("-------------------------------------------");
    arr = (0, utils_1.arrToLN)([1, 2]);
    console.log(arr === null || arr === void 0 ? void 0 : arr.toArray());
    console.log((_d = removeNthFromEnd(arr, 1)) === null || _d === void 0 ? void 0 : _d.toArray(), [1]);
    let i = 0;
}
exports.default = test;
//# sourceMappingURL=Remove%20Nth%20Node%20From%20End%20of%20List.js.map