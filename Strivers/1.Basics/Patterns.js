class Patterns {
  pattern1(length, width) {
    let str = "";
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < width; j++) {
        str += "*";
      }
      str += "\n";
    }
    return str;
  }

  pattern2(length, width) {
    let str = "";
    for (let i = 0; i < length; i++) {
      for (let j = 0; j <= i; j++) {
        str += "*";
      }
      str += "\n";
    }
    return str;
  }

  pattern3(length, width) {
    let str = "";
    for (let i = 0; i < length; i++) {
      for (let j = 0; j <= i; j++) {
        str += `${j + 1}`;
      }
      str += "\n";
    }
    return str;
  }

  pattern4(length, width) {
    let str = "";
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < width - i; j++) {
        str += `${j + 1}`;
      }
      str += "\n";
    }
    return str;
  }

  pattern5(length, width) {
    let str = "";
    for (let i = 0; i < length; i++) {
      for (let j = 0; j <= i; j++) {
        str += `${i + 1}`;
      }
      str += "\n";
    }
    return str;
  }

  pattern6(height) {
    let str = "";
    for (let i = 1; i <= height; i++) {
      for (let j = 0; j <= height * 2 - 1; j++) {
        if (j > height - i && j < height + i) {
          str += "*";
        } else {
          str += " ";
        }
      }
      str += "\n";
    }
    return str;
  }

  pattern7(height) {
    let str = "";
    let val = height * 2 - 1;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j <= val; j++) {
        if (j <= i || j > val - i) {
          str += " ";
        } else {
          str += "*";
        }
      }
      str += "\n";
    }
    return str;
  }

  pattern8(width) {
    let str = "";
    let temp;
    for (let i = 1; i <= width * 2 - 1; i++) {
      if (i <= width) {
        temp = i;
      } else {
        temp = width - (i - width);
      }
      for (let j = 1; j <= temp; j++) {
        str += "*";
      }
      str += "\n";
    }
    return str;
  }

  pattern9(heigth) {
    let str = "";
    for (let i = 1; i <= heigth; i++) {
      for (let j = 1; j <= i; j++) {
        if (i % 2 === 0 && j === 1) {
          str += "0";
        } else if (i % 2 !== 0 && j === 1) {
          str += "1";
        } else {
          if (str[str.length - 1] === "0") {
            str += "1";
          } else {
            str += "0";
          }
        }
      }
      str += "\n";
    }
    return str;
  }

  pattern10(heigth) {
    let str = "";
    for (let i = 1; i <= heigth; i++) {
      for (let j = 1; j <= heigth * 2; j++) {
        if (j <= i) {
          str += `${j}`;
        } else if (j > heigth * 2 - i) {
          str += `${heigth * 2 + 1 - j}`;
        } else {
          str += " ";
        }
      }
      str += "\n";
    }
    return str;
  }

  pattern11(length) {
    let str = "";
    for (let i = 1; i <= length; i++) {
      for (let j = 1; j <= i; j++) {
        str += `${String.fromCharCode(64 + j)}`;
      }
      str += "\n";
    }
    return str;
  }

  pattern12(length) {
    let str = "";
    let start = 64;
    for (let i = 1; i <= length; i++) {
      start = start + 1;
      for (let j = 1; j <= i; j++) {
        str += `${String.fromCharCode(start)}`;
      }
      str += "\n";
    }
    return str;
  }

  // pattern13(input) {
  //   let str = "";
  //   const height = 2 * input - 1;
  //   let count = input;
  //   let rows = 0;
  //   for (let i = 1; i <= height; i++) {
  //     for (let j = 1; j <= height; j++) {
  //       if (count <= rows) {
  //         str += `${count}`;
  //       }
  //     }
  //     str += "\n";
  //   }
  //   return str;
  // }
}

const p = new Patterns();
console.log(p.pattern1(6, 5));
console.log(p.pattern2(5, 5));
console.log(p.pattern3(5, 5));
console.log(p.pattern4(5, 5));
console.log(p.pattern5(5, 5));
console.log(p.pattern6(6));
console.log(p.pattern7(6));
console.log(p.pattern8(5));
console.log(p.pattern9(10));
console.log(p.pattern10(9));
console.log(p.pattern11(10));
console.log(p.pattern12(10));
