import { addSpaces, quote } from "./utils";
// 0000000000000000000000
function isSubsequence(s: string, t: string/*, isFirst: boolean = true*/): boolean {
    //console.log("\ns= ", quote(s), "\nt= ", quote(t))
    if (s.length > t.length) return false;

    let j = 0;
    let i = 0;
    for (; i < s.length; i++) {
        let found = false;
        for (; j < t.length; j++) {
            if (s[i] === t[j]) {
                found = true;
                j++
                break
            }
        }
        if (found === false) {
            return false;
        }
    }
    return true
};
function removeUnneededLetters(letters: string, toShorten: string): string {
    let lettersSet = new Set();
    for (let c of letters) {
        lettersSet.add(c);
    }
    let shorter = ''
    for (let i = 0; i < toShorten.length; i++) {
        if (lettersSet.has(toShorten[i])) {
            shorter += toShorten[i];
        }
    }
    return shorter;
}
let depth = 0

function isSubsequenceOld(s: string, t: string/*, isFirst: boolean = true*/): boolean {
    depth++
    console.log("depth=", depth, "\ns= ", quote(s), "\nt= ", quote(t))
    
    //if (isFirst) {
        t = removeUnneededLetters(s, t);
        //console.log("t*=", quote(t))
   // }
    
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (s[i] === t[j]) {
                if (i === s.length - 1) {
                    depth--;
                    return true
                } else { 
                    let newS = s.slice(i+1)
                    let newT = t.slice(j+1)
                    if (isSubsequence(newS, newT/*, false*/)) {
                        depth--;
                        return true;
                    }
                }
            }
        }
        depth--;
        return false
    }
    depth--;
    return true
};


export default function test() {
    console.log("-------------------------------------------")
    console.log(isSubsequence("a", "a"), true)
    console.log("-------------------------------------------")
    console.log(isSubsequence("aaaaaa", "bbaaaa"), false)
    console.log("-------------------------------------------")
    console.log(isSubsequence("a", "ab"), true)
    console.log("-------------------------------------------")
    console.log(isSubsequence("ab", "accccb"), true)
    console.log("-------------------------------------------")
    console.log(isSubsequence("", "ahbgdc"), true)
    console.log("-------------------------------------------")
    console.log(isSubsequence("az", "accccb"), false)
    console.log("-------------------------------------------")
    console.log(isSubsequence("aaz", "accacbz"), true)
    console.log("-------------------------------------------")
    console.log(isSubsequence("ab", "abbbbdb"), true)
    console.log("-------------------------------------------")
    console.log(isSubsequence("abc", "ahbgfdasadc"), true)
    console.log("-------------------------------------------")
    console.log(isSubsequence("axc", "fddasaaaccccdfasdffeew"), false)
    console.log("-------------------------------------------")
    console.log(isSubsequence("abcd", "ababcaabbcccabcdaabcd"), true)
    console.log("-------------------------------------------")
    console.log(isSubsequence("rjufvjafbxnbgriwgokdgqdqewn", "mjmqqjrmzkvhxlyruonekhhofpzzslupzojfuoztvzmmqvmlhgqxehojfowtrinbatjujaxekbcydldglkbxsqbbnrkhfdnpfbuaktupfftiljwpgglkjqunvithzlzpgikixqeuimmtbiskemplcvljqgvlzvnqxgedxqnznddkiujwhdefziydtquoudzxstpjjitmiimbjfgfjikkjycwgnpdxpeppsturjwkgnifinccvqzwlbmgpdaodzptyrjjkbqmgdrftfbwgimsmjpknuqtijrsnwvtytqqvookinzmkkkrkgwafohflvuedssukjgipgmypakhlckvizmqvycvbxhlljzejcaijqnfgobuhuiahtmxfzoplmmjfxtggwwxliplntkfuxjcnzcqsaagahbbneugiocexcfpszzomumfqpaiydssmihdoewahoswhlnpctjmkyufsvjlrflfiktndubnymenlmpyrhjxfdcq"), false)

}
