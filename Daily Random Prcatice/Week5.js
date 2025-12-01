const group_anagrams = (strs) => {
    const result = {};

    const helper = (str) => {
        const arr = new Array(26).fill(0);

        for (let i = 0; i < str.length; i++) {
            const index = str[i].charCodeAt() - 97;
            arr[index] = arr[index] + 1;
        }

        let new_str = "";

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                new_str = new_str + String.fromCharCode(i + 97) + arr[i];
            }
        }

        return new_str;
    };

    for (let i = 0; i < strs.length; i++) {
        const temp = helper(strs[i]);

        if (result[temp]) {
            result[temp].push(strs[i]);
        } else {
            result[temp] = [strs[i]];
        }
    }

    const result_arr = [];

    for (keys in result) {
        result_arr.push(result[keys]);
    }

    return result_arr;
};

console.log(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// const spiral_matrix = (matrix) => {
//     let m = matrix.length - 1;

//     let n = matrix[0].length - 1 || 0;

//     const calc_arr = [
//         [0, 1],
//         [1, 0],
//         [0, -1],
//         [-1, 0],
//     ];

//     let row = 0;
//     let col = 0;
//     const result = [];
//     const visited = {};

//     const recursion = (i, j, index) => {
//         const temp = matrix[i][j];
//         if (temp === undefined) return;

//         visited[`${i},${j}`] = true;

//         result.push(temp);

//         console.log(new_i, new_j);

//         while (new_j < n) {
//             recursion(new_i, new_j, 0);
//             new_j++;
//         }
//         n--;

//         while (new_i < m) {
//             recursion(new_i, new_j, 1);
//             new_i++;
//         }
//         m--;

//         while (new_j > col) {
//             recursion(new_i, new_j, 3);
//             new_j--;
//         }
//         col++;

//         while (new_i > row) {
//             recursion(new_i, new_j, 3);
//             new_i--;
//         }
//         row++;
//     };

//     recursion(0, 0, 0);

//     return result;
// };

// // if (new_i >= 0 && new_i < m && new_j >= 0 && new_j < n && !visited[`${new_i},${new_j}`]) {
// // }

// console.log(
//     spiral_matrix([
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16],
//     ])
// );
