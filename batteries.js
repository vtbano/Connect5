//NUMBERS

const isEven = (n) => n % 2 === 0;

const isOdd = (n) => !isEven(n);

const divisibleBy = (x, y) => x % y === 0;

// ARRAYS

const eqArrays = (xs, ys) => {
  const lengthMatch = xs.length === ys.length;
  const elementMatch = xs.every((x, index) => {
    if (Array.isArray(xs[index]) && Array.isArray(ys[index])) {
      return eqArrays(xs[index], ys[index]);
    } else {
      return xs[index] === ys[index];
    }
  });

  if (lengthMatch === true && elementMatch === true) {
    return true;
  } else {
    return false;
  }
};

const append = (xs, y) => [...xs, y];

const head = (xs) => xs[0];

const tail = (xs) => xs.slice(1);

const last = (xs) => xs[xs.length - 1];

const init = (xs) => xs.slice(0, xs.length - 1);

const isEmpty = (xs) => xs.length === 0;

const take = (n, xs) => xs.slice(0, n);

const drop = (n, xs) => xs.slice(n);

const flatten = (xs) => xs.reduce((acc, x) => [...acc, ...x], []);

const intersperse = (sep, xs) => {
  xs.reduce((acc, x) => (interspersedArray = [...acc, ...[x, sep]]), []);
  return interspersedArray.slice(0, interspersedArray.length - 1);
};

//NUMBERS ARRAY

const sum = (ns) => ns.reduce((acc, x) => acc + x, 0);

const product = (ns) => ns.reduce((acc, x) => acc * x, 1);

const maximum = (ns) => ns.reduce((acc, x) => Math.max(acc, x), ns[0]);

const minimum = (ns) => ns.reduce((acc, x) => Math.min(acc, x), ns[0]);

const buildArray = (size) => [...Array(size)];

const range = (start, end) => {
  const size = end - start + 1;
  const emptyArray = buildArray(size);
  return emptyArray.map((x, i) => i + start);
};

//OBJECTS

const eqObjects = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const setProp = (k, v, o) => {
  return { ...o, [k]: v };
};

const removeProp = (k, o) => {
  return { ...o, [k]: undefined };
};

module.exports = {
  isEven,
  isOdd,
  divisibleBy,
  eqArrays,
  append,
  head,
  tail,
  last,
  init,
  isEmpty,
  take,
  drop,
  flatten,
  intersperse,
  sum,
  product,
  maximum,
  minimum,
  buildArray,
  range,
  eqObjects,
  setProp,
  removeProp,
};
