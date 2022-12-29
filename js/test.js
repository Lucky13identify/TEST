const doMath = function (a, b, c, callback) {
  return callback(a, b, c);
};

const plus = function (x, y, z) {
  return x + y + z;
};

console.log(doMath(3, 5, 4, plus));
