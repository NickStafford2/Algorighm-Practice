"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Longest Substring");
// dvdf
//  xx
function lengthOfLongestSubstring(s) {
    let longest = 0;
    let longestStart = 0;
    let longestEnd = 0;
    let windowStart = 0;
    let windowEnd = 0;
    const m = new Map();
    for (let i = 0; i < s.length; i++) {
        //console.log()
        windowEnd = i;
        const key = s[i];
        //console.log('i=', i, " key=", key, " longest=", longest, " windowStart=", windowStart, " windowEnd=", windowEnd, " ", s.slice(windowStart, windowEnd+1));
        if (m.has(key)) {
            const newWindowStart = m.get(key) + 1; // there will only be on in the substring at max
            for (let j = windowStart; j < newWindowStart; j++) {
                //console.log('Deleting ', s[j], ' at ', j)
                m.delete(s[j]);
            }
            windowStart = newWindowStart;
        }
        else {
            // current window not shrunk. check to see if current is the longest
            const currentWindowLength = windowEnd - windowStart + 1;
            if (currentWindowLength > longest) {
                longestStart = windowStart;
                longestEnd = windowEnd;
                longest = longestEnd - longestStart + 1;
            }
        }
        m.set(key, i);
        //console.log('i=', i, " key=", key, " longest=", longest, " windowStart=", windowStart, " windowEnd=", windowEnd, " ", s.slice(windowStart, windowEnd + 1));
    }
    return longest;
}
;
function test() {
    console.log(lengthOfLongestSubstring("abcabcbb"), 3);
    console.log(lengthOfLongestSubstring("dvdf"), 3);
}
exports.default = test;
//# sourceMappingURL=Longest%20Substring%20Without%20Repeating%20Characters.js.map