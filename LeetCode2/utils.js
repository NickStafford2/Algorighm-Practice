"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = exports.arrToLN = exports.quote = exports.addSpaces = void 0;
function addSpaces(s, tabSize = 7) {
    let spacesToAdd = tabSize - s.length;
    let spaces = '';
    for (let i = 0; i < spacesToAdd; i++) {
        spaces += ' ';
    }
    return spaces + s;
}
exports.addSpaces = addSpaces;
function quote(s) {
    return '\'' + s + '\'';
}
exports.quote = quote;
function arrToLN(arr) {
    let current = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        const char = arr[i];
        const val = Number(char);
        current = new ListNode(val, current);
    }
    const s = current === null || current === void 0 ? void 0 : current.toString();
    //console.log(s);
    return current;
}
exports.arrToLN = arrToLN;
/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    toString() {
        let s = '';
        let x = this;
        do {
            s = x.val + s;
            x = x.next;
        } while (x);
        return s;
    }
    toArray() {
        const arr = [];
        let x = this;
        while (x) {
            arr.push(x.val);
            x = x.next;
        }
        ;
        return arr;
    }
}
exports.ListNode = ListNode;
//# sourceMappingURL=utils.js.map