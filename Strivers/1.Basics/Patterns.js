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
}

const p = new Patterns();
console.log(p.pattern1(6, 5));
console.log(p.pattern2(5, 5));
console.log(p.pattern3(5, 5));
console.log(p.pattern4(5, 5));
console.log(p.pattern5(5, 5));
console.log(p.pattern6(6));
console.log(p.pattern7(6));
