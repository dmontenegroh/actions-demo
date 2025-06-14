
function sum(a, b) {
  return a + b;
}

function sumAsync(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

// exports 
module.exports = sum;
module.exports.sumAsync = sumAsync;