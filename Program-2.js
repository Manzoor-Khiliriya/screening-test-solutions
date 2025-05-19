function generateSeries(num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(2 * i + 1);
  }
  console.log(result.join(', '));
}

generateSeries(1);
generateSeries(2);
generateSeries(3);
generateSeries(4);
generateSeries(5);
generateSeries(6);
generateSeries(9);


