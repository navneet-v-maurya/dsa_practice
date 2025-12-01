const group_anagrams = (strs) => {
    const result = {};

    const helper = (str) => {
        const arr = new Array(26).fill(0);

        for (let i = 0; i < str.length; i++) {
            const index = str[i].charCodeAt() - 97;
            arr[index] = arr[index] + 1;
        }

        const new_str = "";

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                new_str += String.fromCharCode(i + 97) + arr[i];
            }
        }
    };
};
