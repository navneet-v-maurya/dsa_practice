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
//maximum of all subarrays of size k
