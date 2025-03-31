//print 1 to n
const print_1_to_n = (n) => {
    if (n < 1) return;
    print_1_to_n(n - 1);
    console.log("print_1_to_n => ", n);
};

print_1_to_n(5);
console.log("\n******");

// print n to 1
const print_n_to_1 = (n) => {
    if (n < 1) return;

    console.log("print_n_to_1 => ", n);
    print_n_to_1(n - 1);
};

print_n_to_1(5);
console.log("\n******");

// facrorial of a number

const factoral = (n) => {
    if (n <= 1) return 1;

    return factoral(n - 1) * n;
};

console.log("factoral => ", factoral(5));
