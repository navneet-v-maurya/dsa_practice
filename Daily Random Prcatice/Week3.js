//WEEK 3

//Day 1
const daily_temperatures = (temperatures) => {
    const result = new Array(temperatures.length).fill(0);

    let start = temperatures.length - 1;
    const stack = [];

    for (let i = start; i >= 0; i--) {
        const temp = temperatures[i];

        while (temperatures[stack[stack.length - 1]] <= temp) {
            stack.pop();
        }

        if (stack.length > 0) {
            const top = stack[stack.length - 1];
            result[i] = top - i;
        }
        stack.push(i);
    }
    return result;
};

console.log("daily_temperatures => ", daily_temperatures([73, 74, 75, 71, 69, 72, 76, 73]));

//Day 2
//Binary Tree Inorder Traversal
