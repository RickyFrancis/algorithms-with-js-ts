function candies(n: number, m: number): number {
    return m - (m % n)
}

console.log(candies(3, 10));
console.log(candies(2, 10));