//maximum sum of subarray of size K

const max_sum_subarry = (arr, k) => {
    let start = 0;
    let end = 0;
    let sum = 0;
    let temp = 0;
    while (end < arr.length) {
        if (end - start < k) {
            temp += arr[end];
            sum = temp;
        } else {
            temp = temp + arr[end] - arr[start];
            if (temp > sum) {
                sum = temp;
            }
            start++;
        }
        end++;
    }

    return sum;
};

console.log("max_sum_subarry => ", max_sum_subarry([9479, 488, 2374, 1583], 4));

//First Negative Number in every Window of Size K
const first_neg_num = (arr, k) => {
    const temp_arr = [];
    const res = [];

    let start = 0;
    let end = 0;

    while (end < arr.length) {
        if (arr[end] < 0) {
            temp_arr.push(arr[end]);
        }

        if (end - start + 1 >= k) {
            if (temp_arr.length === 0) {
                res.push(0);
            } else {
                res.push(temp_arr[0]);
                if (arr[start] === temp_arr[0]) {
                    temp_arr.shift();
                }
            }
            start++;
        }

        end++;
    }

    return res;
};

console.log("first_neg_num => ", first_neg_num([-8, 2, 3, -6, 10], 2));

//Count Occurrences Of Anagrams
const count_of_occurence_of_anagram = (pat, txt) => {
    let i = 0;
    let j = 0;
    let res = 0;

    let map = new Map();
    let count = 0;

    for (let i = 0; i < txt.length; i++) {
        if (map.has(txt[i])) {
            map.set(txt[i], map.get(txt[i]) + 1);
        } else {
            map.set(txt[i], 1);
            count++;
        }
    }

    while (j < pat.length) {
        if (map.has(pat[j])) {
            map.set(pat[j], map.get(pat[j]) - 1);
            if (map.get(pat[j]) === 0) count--;
        }

        if (j - i + 1 === txt.length) {
            if (count === 0) res++;

            if (map.has(pat[i])) {
                if (map.get(pat[i]) === 0) count++;
                map.set(pat[i], map.get(pat[i]) + 1);
            }
            i++;
        }
        j++;
    }

    return res;
};

console.log("count_of_occurence_of_anagram => ", count_of_occurence_of_anagram("aabaabaa", "aaba"));
//maximum of all subarrays of size k
