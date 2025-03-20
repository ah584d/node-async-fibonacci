function fibonacciAsync(limit: number): number {
  if (limit <= 1) {
    return 1;
  }
  return fibonacciAsync(limit - 1) + fibonacciAsync(limit - 2);
}

const result = fibonacciAsync(10);

console.log(`Result is: ${result}`);
