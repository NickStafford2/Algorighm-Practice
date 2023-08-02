"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function toLN(n) {
    let current = null;
    let s = n.toString();
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        const val = Number(char);
        current = new utils_1.ListNode(val, current);
    }
    return current;
}
function addTwoNumbers(l1, l2) {
    if (l1 && l2) {
        let current = null;
        let previous = new utils_1.ListNode(-1, null);
        const beforeFirst = previous; // used to get the first digit once we finish the sum
        let c1 = l1;
        let c2 = l2;
        let carry = 0;
        while (c1 !== null || c2 !== null || carry !== 0) {
            let d1 = c1 === null ? 0 : c1.val;
            let d2 = c2 === null ? 0 : c2.val;
            let sum = d1 + d2 + carry;
            if (sum > 9) {
                carry = 1;
            }
            else {
                carry = 0;
            }
            const sumStr = sum.toString();
            const digitStr = sumStr.charAt(sumStr.length - 1);
            let num = Number(digitStr);
            if (c1) {
                c1 = c1.next;
            }
            if (c2) {
                c2 = c2.next;
            }
            current = new utils_1.ListNode(num, null);
            previous.next = current;
            previous = current;
        }
        return beforeFirst.next;
    }
    return null;
}
;
function test() {
    console.log();
    const a1 = (0, utils_1.arrToLN)([2, 4, 3]);
    const b1 = (0, utils_1.arrToLN)([5, 6, 4]);
    const c1 = addTwoNumbers(a1, b1);
    console.log(c1);
    console.log();
    const a2 = (0, utils_1.arrToLN)([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    const b2 = (0, utils_1.arrToLN)([5, 6, 4]);
    const c2 = addTwoNumbers(a2, b2);
    console.log(c2);
    console.log();
    const a3 = (0, utils_1.arrToLN)([9, 9, 9, 9, 9, 9, 9]);
    const b3 = (0, utils_1.arrToLN)([9, 9, 9, 9]);
    const c3 = addTwoNumbers(a3, b3);
    console.log(c3);
    console.log('tests finished');
}
exports.default = test;
//# sourceMappingURL=Add%20Two%20Numbers.js.map