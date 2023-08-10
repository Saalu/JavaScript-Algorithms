function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// // console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(5));
// console.log(fibonacci(7));
// console.log(fibonacci(8));
// console.log(fibonacci(9));

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));
