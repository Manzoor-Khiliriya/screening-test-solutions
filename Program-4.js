function countMultiples(arr) {
    const result = {};
    for (let i = 1; i <= 9; i++) {
        result[i] = arr.filter(num => num % i === 0).length;
    }
    console.log(result);
}
countMultiples([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]);
countMultiples([1, 6, 3, 8, 35, 65, 98, 32, 21, 40]);
