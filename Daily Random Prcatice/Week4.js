//WEEK 4

//DAY 1
//1. Num Decodings

const num_decodings = (s) => {
    const start = 65;
    const end = 90;

    let counter = 0;

    const recursion = (index, output) => {
        if (s[index] === "0") {
            return;
        }

        if (index >= s.length) {
            counter++;
            return;
        }

        const char_code = Number(s[index]) + 64;
        const second_char_codes = Number(s[index] + s[index + 1]) + 64;

        if (char_code >= start && char_code <= end) {
            recursion(index + 1, output + String.fromCodePoint(char_code));
        }

        if (second_char_codes >= start && second_char_codes <= end) {
            recursion(index + 2, output + String.fromCodePoint(second_char_codes));
        }
    };

    recursion(0, "");

    return counter;
};

const num_decodings_optimized = (s) => {
    const memo = {};

    const dfs = (i) => {
        if (i === s.length) return 1;
        if (s[i] === "0") return 0;
        if (memo[i] !== undefined) return memo[i];

        let ways = dfs(i + 1);

        if (i + 1 < s.length && Number(s.slice(i, i + 2)) <= 26) {
            ways += dfs(i + 2);
        }

        memo[i] = ways;
        return ways;
    };

    return dfs(0);
};

console.log("num_decodings => ", num_decodings("111"));
console.log("num_decodings_optimized => ", num_decodings_optimized("111"));

//2. Word Break ||

const word_break_second = (s, wordDict) => {
    const result = [];

    const recursion = (output, index, curr) => {
        if (index >= s.length) return;

        curr += s[index];

        if (wordDict[curr]) {
            if (index === s.length - 1) {
                output = !output ? curr : output + " " + curr;
                result.push(output);
                return;
            }
            recursion(!output ? curr : output + " " + curr, index + 1, "");
        }

        recursion(output, index + 1, curr);
    };

    recursion("", 0, "");

    return result;
};

const obj = {
    cats: "cats",
    cat: "cat",
    and: "and",
    sand: "sand",
    dog: "dog",
};

console.log("word_break_second => ", word_break_second("catsanddog", obj));
