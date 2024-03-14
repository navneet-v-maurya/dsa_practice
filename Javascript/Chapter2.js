const triangle = (val) => {
  let str = "";
  for (let i = 1; i <= val; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
};

const fiz_buzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizz-buzz", i);
    }
    if (i % 5 === 0) {
      console.log("buzz", i);
    }
    if (i % 3 === 0) {
      console.log("fizz", i);
    }
  }
};

const chess_board = () => {
  let str = "";
  for (let i = 1; i <= 8; i++) {
    if (i % 2 !== 0) {
      str += " ";
    }
    for (let j = 1; j <= 4; j++) {
      str += " # ";
    }
    str += "\n";
  }
  return str;
};

console.log(triangle(5));

fiz_buzz();

console.log(chess_board());
