let obj = {
  ONE: "foo",
  TWO: 2,
  THREE: {
    ONE: ["nice1", "nice2"],
  },
  FIVE: {
    THOUSAND: 1000,
    WORD: {
      ONE: "bar",
      TWO: "qux",
    },
  },
};

// const lowerize = (obj) =>
//   Object.keys(obj).reduce((acc, k) => {
//     acc[k.toLowerCase()] = obj[k];
//     return acc;
//   }, {});
const lowerizeDeeper = (obj) =>
  Object.keys(obj).reduce((acc, k) => {
    // acc[k] = obj[k];
    // if (Array.isArray(obj[k])) {
    //   acc[k.toLowerCase()] = obj[k];
    // }
    if (typeof obj[k] == "object") {
      acc[k.toLowerCase()] = lowerizeDeeper(obj[k]);
    } else {
      acc[k.toLowerCase()] = obj[k];
    }
    return acc;
  }, {});

console.log(lowerizeDeeper(obj));
