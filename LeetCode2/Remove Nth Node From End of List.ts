import { ListNode, arrToLN } from "./utils";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) {
        return null;
    }

    let stack: ListNode[] = [];
    {
        let current: ListNode | null = head;
        while (current) {
            stack.push(current)
            current = current.next
            if (stack.length > n+1) {
                stack = stack.slice(1);
            }
            //console.log(stack)
        }
    }

    let next: ListNode | null = null;
    for (let i = 0; i < n - 1; i++) {
        next = stack.pop() || null;
    }
    const toRemove = stack.pop();
    const previous: ListNode | null = stack.pop() || null;

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
        return head
    }
    else if (head === toRemove) {
        /*
                head
            toRemove next node
        */
        if (next) {
            // removed the first
            return next
        }
        else {
            // linked list is empty.
            return null
        }
    } else {
        return head;
    }
};

export default function test() {
    let arr;
    console.log("-------------------------------------------")
    arr = arrToLN([1, 2, 3, 4, 5])
    console.log(arr?.toArray())
    console.log(removeNthFromEnd(arr, 2)?.toArray(), [1, 2, 3, 5])

    console.log("-------------------------------------------")
    arr = arrToLN([1])
    console.log(arr?.toArray())
    console.log(removeNthFromEnd(arr, 1)?.toArray(), [])

    console.log("-------------------------------------------")
    arr = arrToLN([1, 2])
    console.log(arr?.toArray())
    console.log(removeNthFromEnd(arr, 1)?.toArray(), [1])

    console.log("-------------------------------------------")
    arr = arrToLN([1, 2])
    console.log(arr?.toArray())
    console.log(removeNthFromEnd(arr, 1)?.toArray(), [1])
    let i = 0;
}
