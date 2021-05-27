// 输出小于一个数内的所有素数
// O(n log(log n))

function sieveOfEratosthenes(maxNumber) {
  const isPrime = new Array(maxNumber + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  const primes = [];

  for (let number = 2; number <= maxNumber; number += 1) {
    if (isPrime[number] === true) {
      primes.push(number);
      let nextNumber = number * number;

      while (nextNumber <= maxNumber) {
        console.log(nextNumber)
        isPrime[nextNumber] = false;
        nextNumber += number;
      }
    }
  }
}

console.log(sieveOfEratosthenes(100))