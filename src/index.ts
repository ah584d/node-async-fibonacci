const LIMIT_RUN = 45;

async function longTask(limit: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = fibonacci(limit);
      resolve(result);
    }, 0);
  });
}

function fibonacci(limit: number): number {
  if (limit <= 1) {
    return 1;
  }
  return fibonacci(limit - 1) + fibonacci(limit - 2);
}

async function main() {
  console.log("Starting calculation...");
  const result = await longTask(LIMIT_RUN);
  console.log(`Result is: ${result}`);
  console.log("continue calculation...");
}

main();
