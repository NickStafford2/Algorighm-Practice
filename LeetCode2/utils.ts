
export function addSpaces(s: string, tabSize: number = 7) {
    let spacesToAdd = tabSize - s.length;
    let spaces = '';
    for (let i = 0; i < spacesToAdd; i++) {
        spaces += ' '
    }
    return spaces + s;
}

export function quote(s: string): string {
    return '\'' + s + '\''
}

export function arrToLN(arr: number[]): ListNode | null {
    let current = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        const char = arr[i]
        const val = Number(char);
        current = new ListNode(val, current);
    }
    const s = current?.toString();
    //console.log(s);
    return current

}

/**
 * Definition for singly-linked list.
 */
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    toString() {
        let s = '';
        let x: ListNode | null = this;
        do {
            s = x.val + s;
            x = x.next;
        }
        while (x)
        return s;
    }

    toArray() {
        const arr = [];
        let x: ListNode | null = this;
        while (x) {
            arr.push(x.val);
            x = x.next;
        };
        return arr;
    }
}